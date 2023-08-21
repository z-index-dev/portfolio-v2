import MenuIcon from "@mui/icons-material/Menu";
import { Theme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useBooleanState } from "react-use-object-state";
import { Box, Button, Stack } from "../../atoms";
import { SidebarMenu } from "../SidebarMenu";

interface NavigationBarProps {}

export const NavigationBar: FC<NavigationBarProps> = ({}) => {
  const sidebarMenuOpen = useBooleanState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <>
      <Stack
        position="fixed"
        top={0}
        left={0}
        direction="row"
        alignItems="center"
        minWidth="100%"
        height={60}
        sx={{
          background: (theme) => theme.palette.background.paper,
          zIndex: 100,
        }}
      >
        <Box px={isMobile ? 2 : 4} position="absolute" zIndex={20}>
          <Button onClick={sidebarMenuOpen.setTrue}>
            <MenuIcon fontSize="large" style={{ color: "white" }} />
          </Button>
        </Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
        >
          <Box mt={0.75}>
            <Link href="/">
              <Image
                src="/z-index-logo-transparent.png"
                height={40}
                width={40}
                alt=""
              />
            </Link>
          </Box>
        </Stack>
      </Stack>
      <SidebarMenu openState={sidebarMenuOpen} />
    </>
  );
};
