import React from "react";
import { StyledPaginationButton } from "./PaginationButton.styled";
import { IPaginationButtonProps } from "./PaginationButton.types";

export const PaginationButton = ({
  children,
  ...props
}: IPaginationButtonProps) => {
  return <StyledPaginationButton {...props}>{children}</StyledPaginationButton>;
};
