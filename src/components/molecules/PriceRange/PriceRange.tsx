import React from "react";
import Input from "../../atoms/Input/Input";
import {
  StyledPriceRange,
  StyledPriceRangeContainer,
  StyledPriceRangeHeader,
} from "./PriceRagen.styled";
import { Typography } from "../../atoms/Typography/Typography";
import { Label } from "../../atoms/Label";
import { CurrencyToggle } from "../CurrencyToggle";
import { useTranslation } from "react-i18next";
import { IPriceRangeProps } from "./PriceRange.types";

export const PriceRange = ({
  selectedCurrency,
  fromOnChange,
  toOnChange,
  fromValue,
  toValue,
}: IPriceRangeProps) => {
  const { t } = useTranslation();

  return (
    <StyledPriceRangeContainer>
      <StyledPriceRangeHeader>
        <Label>{t("PRICE")}</Label>
        <CurrencyToggle selected={selectedCurrency} />
      </StyledPriceRangeHeader>
      <StyledPriceRange>
        <Input
          placeholder={t("FROM")}
          onChange={fromOnChange}
          value={fromValue}
          type="number"
        />
        <Typography size="sm" color="black500Alt">
          -
        </Typography>
        <Input
          placeholder={t("TO")}
          onChange={toOnChange}
          value={toValue}
          type="number"
        />
      </StyledPriceRange>
    </StyledPriceRangeContainer>
  );
};
