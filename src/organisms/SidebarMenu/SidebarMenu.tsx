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

export interface SideBarMenuProps {
  openState: ReturnType<typeof useBooleanState>;
}

export const SidebarMenu = ({ openState }: SideBarMenuProps) => {
  return (
    <Drawer anchor="left" open={openState.state}>
      Sidebar menu
    </Drawer>
  );
};
