import { SidebarHeaderSelectOptionsEnum } from "../SidebarHeader/SidebarHeader.types";

export interface ISidebarHeaderButtonProps {
  children: React.ReactNode;
  selected: boolean;
  variant: SidebarHeaderSelectOptionsEnum;
}
