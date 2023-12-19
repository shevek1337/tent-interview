import React from "react";
import { StyledInput } from "./Input.styled";
import { IInputProps } from "./Input.types";

const Input = ({ ...props }: IInputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
