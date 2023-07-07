import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useBooleanState } from "react-use-object-state";
import { Box, Button, Grid } from "../../atoms";
import { SidebarMenu } from "../SidebarMenu";

interface NavigationBarProps {}

export const NavigationBar: FC<NavigationBarProps> = ({}) => {
  const sidebarMenuOpen = useBooleanState(false);

  return (
    <>
      <Grid
        container
        position="fixed"
        top={0}
        left={0}
        direction="row"
        alignItems="center"
        minWidth="100%"
        height="fit-content"
        sx={{ background: (theme) => theme.palette.background.paper }}
      >
        <Grid item lg={4} alignItems="center" justifyContent="center">
          <Box px={4}>
            <Button onClick={sidebarMenuOpen.setTrue}>
              <MenuIcon fontSize="large" style={{ color: "white" }} />
            </Button>
          </Box>
        </Grid>
        <Grid item lg={4} alignItems="center" justifyContent="center">
          <Box
            justifySelf="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={2}
            mb={-0.5}
          >
            <Link href="/">
              <Image
                src="/z-index-logo-transparent.png"
                height={40}
                width={40}
                alt=""
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
      <SidebarMenu openState={sidebarMenuOpen} />
    </>
  );
};
