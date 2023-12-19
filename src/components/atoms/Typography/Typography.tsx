import React from "react";
import StyledTypography from "./Typography.styled";
import { ITypographyProps } from "./Typography.types";

export const Typography = ({ children, ...props }: ITypographyProps) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
