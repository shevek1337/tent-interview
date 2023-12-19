import React from "react";
import {
  StyledCurrencyToggleButton,
  StyledCurrencyToggleContainer,
} from "./CurrencyToggle.styled";
import {
  CurrencyToggleSelectOptionsEnum,
  ICurrencyToggleProps,
} from "./CurrencyToggle.types";
import { Typography } from "../../atoms/Typography/Typography";

export const CurrencyToggle = ({
  selected = CurrencyToggleSelectOptionsEnum.GEL,
}: ICurrencyToggleProps) => {
  const isGelSelected = selected === CurrencyToggleSelectOptionsEnum.GEL;
  const isUsdSelected = selected === CurrencyToggleSelectOptionsEnum.USD;

  return (
    <StyledCurrencyToggleContainer>
      <StyledCurrencyToggleButton selected={isGelSelected}>
        <Typography
          size="xs"
          as="p"
          fontWeight="bold"
          color={isGelSelected ? "white" : "black500Alt"}
        >
          ₾
        </Typography>
      </StyledCurrencyToggleButton>
      <StyledCurrencyToggleButton selected={isUsdSelected}>
        <Typography
          size="xs"
          as="p"
          fontWeight="bold"
          color={isUsdSelected ? "white" : "black500Alt"}
        >
          $
        </Typography>
      </StyledCurrencyToggleButton>
    </StyledCurrencyToggleContainer>
  );
};
