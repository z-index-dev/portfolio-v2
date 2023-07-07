import { Box, Typography } from "@core/atoms";
import type { FC } from "react";

export const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Box width="100%" bgcolor="background.paper" p={1}>
      <Typography variant="body2" textAlign="center">
        Copyright &copy; Z-Index Web Servies, LLC {year}
      </Typography>
    </Box>
  );
};
