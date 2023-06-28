import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";
import { FC } from "react";

export type CardProps = MuiCardProps & {
  borderColorVariant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error";
  borderWidth?: "none" | "thin" | "medium" | "thick";
  color?: "background" | "paper" | "light" | "transparent";
};

/**
 * https://mui.com/components/cards/
 *
 * Cards contain content and actions about a single subject.
 *
 * Cards are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
 */
export const Card: FC<CardProps> = (props) => (
  <MuiCard {...(props as MuiCardProps)} />
);
