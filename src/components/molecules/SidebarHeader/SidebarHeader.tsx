import React from "react";
import {
  ISidebarHeaderProps,
  SidebarHeaderSelectOptionsEnum,
} from "./SidebarHeader.types";
import StyledSidebarHeader from "./SidebarHeader.styled";
import SidebarHeaderButton from "../SidebarHeaderButton/SidebarHeaderButton.styled";
import SidebarHeaderIcon from "../SidebarHeaderIcon/SidebarHeaderIcon";

export const SidebarHeader = ({ selected }: ISidebarHeaderProps) => {
  // TODO: NIT - ლისტი უმჯობესია იყოს დინამიური
  return (
    <StyledSidebarHeader>
      <SidebarHeaderButton
        selected={selected === SidebarHeaderSelectOptionsEnum.CAR}
        variant={SidebarHeaderSelectOptionsEnum.CAR}
      >
        <SidebarHeaderIcon
          variant={SidebarHeaderSelectOptionsEnum.CAR}
          selected={selected === SidebarHeaderSelectOptionsEnum.CAR}
        />
      </SidebarHeaderButton>
      <SidebarHeaderButton
        selected={selected === SidebarHeaderSelectOptionsEnum.TRUCK}
        variant={SidebarHeaderSelectOptionsEnum.TRUCK}
      >
        <SidebarHeaderIcon
          variant={SidebarHeaderSelectOptionsEnum.TRUCK}
          selected={selected === SidebarHeaderSelectOptionsEnum.CAR}
        />
      </SidebarHeaderButton>
      <SidebarHeaderButton
        selected={selected === SidebarHeaderSelectOptionsEnum.MOTO}
        variant={SidebarHeaderSelectOptionsEnum.MOTO}
      >
        <SidebarHeaderIcon
          variant={SidebarHeaderSelectOptionsEnum.MOTO}
          selected={selected === SidebarHeaderSelectOptionsEnum.MOTO}
        />
      </SidebarHeaderButton>
    </StyledSidebarHeader>
  );
};
