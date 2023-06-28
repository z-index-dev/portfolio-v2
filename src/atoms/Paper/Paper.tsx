import { Paper as MuiPaper, PaperProps as MuiPaperProps } from "@mui/material";
import { FC } from "react";

export type PaperProps = MuiPaperProps & {
  borderColorVariant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error";
  borderWidth?: "none" | "thin" | "medium" | "thick";
  color?: "background" | "paper" | "transparent";
};

/**
 * https://mui.com/components/paper/
 *
 * In Material Design, the physical properties of paper are translated to the screen.
 *
 * The background of an application resembles the flat, opaque texture of a sheet of paper, and an application's behavior mimics paper's ability to be re-sized, shuffled, and bound together in multiple sheets.
 */
export const Paper: FC<PaperProps> = (props) => (
  <MuiPaper {...(props as MuiPaperProps)} />
);
