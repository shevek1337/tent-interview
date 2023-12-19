import React from "react";
import { ISidebarHeaderIconProps } from "./SidebarHeaderIcon.types";
import StyledSidebarHeaderIcon from "./SidebarHeaderIcon.styled";
import { ReactComponent as CarIcon } from "../../../assets/svg/car-icon.svg";
import { ReactComponent as TractorIcon } from "../../../assets/svg/tractor-icon.svg";
import { ReactComponent as MotoIcon } from "../../../assets/svg/moto-icon.svg";
import { SidebarHeaderSelectOptionsEnum } from "../SidebarHeader/SidebarHeader.types";

const SidebarHeaderIcon = ({ variant, selected }: ISidebarHeaderIconProps) => {
  return (
    <StyledSidebarHeaderIcon selected={selected} variant={variant}>
      {variant === SidebarHeaderSelectOptionsEnum.CAR && <CarIcon />}
      {variant === SidebarHeaderSelectOptionsEnum.TRUCK && <TractorIcon />}
      {variant === SidebarHeaderSelectOptionsEnum.MOTO && <MotoIcon />}
    </StyledSidebarHeaderIcon>
  );
};

export default SidebarHeaderIcon;
