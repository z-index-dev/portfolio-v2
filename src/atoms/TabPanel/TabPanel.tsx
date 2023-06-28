import { FC, ReactNode } from "react";

export type TabPanelProps = {
  children?: ReactNode;
  selectedValue: string;
  value: string;
};

export const tabPanelControlsA11yProps = (value: string) => {
  return {
    id: `${value} tab`,
    "aria-controls": `${value} tabpanel`,
  };
};

export const TabPanel: FC<TabPanelProps> = ({
  children,
  value,
  selectedValue,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== selectedValue}
      id={`${value} tabpanel`}
      aria-labelledby={`${value} tab`}
    >
      {value === selectedValue && children}
    </div>
  );
};
