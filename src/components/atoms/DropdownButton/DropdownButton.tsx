import React from "react";
import {
  StyledDropdownButton,
  StyledDropdownButtonContainer,
} from "./DropdownButton.styled";
import { IDropdownButtonProps } from "./DropdownButton.types";
import { ReactComponent as ArrowDownIcon } from "../../../assets/svg/arrow-down-icon.svg";
import { Typography } from "../Typography/Typography";
import lodash from "lodash";

const DropdownRenderValue = ({
  placeholder,
  displayValue,
}: {
  displayValue: string;
  placeholder: string;
}) => {
  return displayValue ? (
    <Typography fontWeight="medium" size="xs" color="black900">
      {lodash.truncate(displayValue, { length: 23 })}
    </Typography>
  ) : (
    <Typography fontWeight="medium" size="xs" color="black600">
      {placeholder}
    </Typography>
  );
};

export const DropdownButton = ({
  placeholder,
  isOpen,
  displayValue,
  onClick,
  disabled,
  variant = "primary",
  ...props
}: IDropdownButtonProps) => {
  return (
    <StyledDropdownButtonContainer onClick={onClick}>
      <StyledDropdownButton disabled={disabled} {...props}>
        <DropdownRenderValue
          placeholder={placeholder}
          displayValue={displayValue}
        />
      </StyledDropdownButton>
      <ArrowDownIcon
        className={`absolute right-2 top-[calc(50%-0.5rem)] ${
          isOpen && "rotate-180"
        }`}
      />
    </StyledDropdownButtonContainer>
  );
};
