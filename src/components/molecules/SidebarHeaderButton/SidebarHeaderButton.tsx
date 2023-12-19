import React from "react";
import { ISidebarHeaderButtonProps } from "./SidebarHeaderButton.types";
import StyledSidebarHeaderButton from "./SidebarHeaderButton.styled";

const NavButton = ({
  children,
  selected,
  variant,
}: ISidebarHeaderButtonProps) => {
  return (
    <StyledSidebarHeaderButton selected={selected} variant={variant}>
      {children}
    </StyledSidebarHeaderButton>
  );
};

export default NavButton;
