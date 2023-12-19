export enum SidebarHeaderSelectOptionsEnum {
  CAR = "car",
  TRUCK = "truck",
  MOTO = "moto",
}

export interface ISidebarHeaderProps {
  selected: SidebarHeaderSelectOptionsEnum;
}
