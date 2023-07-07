import { List, ListItem, ListItemButton, ListItemText } from "@core/atoms";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const menuItemOptions = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "Blog",
    path: "blog",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Contact",
    path: "contact",
  },
] as const;

type MenuItemNames = (typeof menuItemOptions)[number]["name"];

export const MenuItems: FC = () => {
  const router = useRouter();
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemNames>(
    menuItemOptions.find((option) => option.path === "")?.name || "Home"
  );

  const handleMenuItemClick = (text: MenuItemNames) => {
    setSelectedMenuItem(text);
  };

  useEffect(() => {
    if (router.pathname === "/") {
      console.log("Home");
      setSelectedMenuItem("Home");
    } else {
      const path = router.pathname.split("/")[1];
      setSelectedMenuItem(
        menuItemOptions.find((option) => option.path === path)
          ?.name as MenuItemNames
      );
    }
  }, [router.pathname]);

  return (
    <List component="nav" sx={{ minWidth: 240, pt: 2 }}>
      {menuItemOptions.map((option) => (
        <ListItem key={option.name} sx={{ px: 4 }}>
          <ListItemButton
            selected={selectedMenuItem === option.name}
            onClick={() => handleMenuItemClick(option.name)}
          >
            <Link href={`/${option.path}`}>
              <ListItemText primary={capitalize(option.name)} />
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
