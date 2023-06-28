import { Tab as MuiTab, TabProps as MuiTabProps } from "@mui/material";
import { FC } from "react";

export type TabProps = MuiTabProps & {
  chip?: boolean;
};

export const Tab: FC<TabProps> = (props) => (
  <MuiTab {...(props as MuiTabProps)} />
);
