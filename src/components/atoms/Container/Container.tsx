import React from "react";
import { IContainerProps } from "./Container.types";
import StyledContainer from "./Container.styled";

const Container = ({ children, variant = "default" }: IContainerProps) => {
  return <StyledContainer variant={variant}>{children}</StyledContainer>;
};

export default Container;
