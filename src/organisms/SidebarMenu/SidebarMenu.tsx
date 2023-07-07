// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

import { useBooleanState } from "react-use-object-state";
import { Box, Button, Drawer, List, ListItem } from "../../atoms";
import { MenuItems } from "./MenuItems";

export interface SideBarMenuProps {
  openState: ReturnType<typeof useBooleanState>;
}

export const SidebarMenu = ({ openState }: SideBarMenuProps) => {
  const closeDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    openState.setFalse();
  };

  return (
    <Box onClick={closeDrawer} onKeyDown={closeDrawer} sx={{ width: "auto" }}>
      <Drawer anchor="left" open={openState.state} onClose={openState.setFalse}>
        <MenuItems />
      </Drawer>
    </Box>
  );
};
