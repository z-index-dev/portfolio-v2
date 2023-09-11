import { useBooleanState } from "react-use-object-state";
import { Box, Drawer } from "../../atoms";
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
