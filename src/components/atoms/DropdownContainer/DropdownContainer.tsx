import React from "react";
import { IDropdownContainerProps } from "./DropdownContainer.types";
import { StyledDropdownContainer } from "./DropdownContainer.styled";

export const DropdownContainer = ({
  children,
  isOpen,
}: IDropdownContainerProps) => {
  return isOpen ? (
    <StyledDropdownContainer>{children}</StyledDropdownContainer>
  ) : null;
};
