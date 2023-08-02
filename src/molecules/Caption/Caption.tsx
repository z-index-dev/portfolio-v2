import { Typography } from "@mui/material";
import type { FC, ReactNode } from "react";

interface CaptionProps {
  text: ReactNode;
  alignment: "inherit" | "left" | "center" | "right" | "justify";
  children: ReactNode;
}

export const Caption: FC<CaptionProps> = ({ children, alignment }) => {
  return (
    <Typography
      variant="caption"
      align={alignment}
      fontStyle="italic"
      sx={{ "& > p": { fontSize: ".75rem", mt: -2 } }}
    >
      {children}
    </Typography>
  );
};
