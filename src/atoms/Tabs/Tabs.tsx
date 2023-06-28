import {
  styled,
  Tabs as MuiTabs,
  TabsProps as MuiTabsProps,
} from "@mui/material";

export type TabsProps = MuiTabsProps & {
  chip?: boolean;
};

export const Tabs = styled(
  MuiTabs,
  {}
)<TabsProps>(({ centered }) => ({
  ...(centered && {
    "& .MuiTabs-flexContainer": {
      "& :first-child": {
        marginLeft: "auto",
      },
      "& :last-child": {
        marginRight: "auto",
      },
    },
  }),
}));
