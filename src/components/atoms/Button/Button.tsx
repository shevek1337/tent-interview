import React from "react";
import { IButtonProps } from "./Button.types";
import StyledButton from "./Button.styled";

const Button = ({ variant = "primary", children, ...props }: IButtonProps) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
