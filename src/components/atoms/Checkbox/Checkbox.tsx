import React from "react";
import { StyledCheckboxInput, StyledCheckboxWrapper } from "./Checkbox.styled";
import { Typography } from "../Typography/Typography";
import { ICheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  checked,
  label,
  value,
  onClick,
}: ICheckboxProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === inputRef.current) return;

    onClick(String(value));
  };

  return (
    <StyledCheckboxWrapper
      checked={checked}
      value={value}
      onClick={handleWrapperClick}
    >
      <StyledCheckboxInput
        type="checkbox"
        checked={checked}
        onChange={() => onClick(String(value))}
        value={value}
        ref={inputRef}
      />
      <Typography size="sm" as="p" color={checked ? "black800" : "black600"}>
        {label}
      </Typography>
    </StyledCheckboxWrapper>
  );
};
