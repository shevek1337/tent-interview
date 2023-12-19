import React from "react";
import { IStackProps } from "./Stack.types";
import { StyledStack } from "./Stack.styled";

export const Stack = (props: IStackProps) => {
  return <StyledStack {...props}>{props.children}</StyledStack>;
};
