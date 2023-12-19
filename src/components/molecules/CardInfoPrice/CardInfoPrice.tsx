import React from "react";
import { ICardInfoPriceProps } from "./CardInfoPrice.types";
import { StyledCardInfoPrice } from "./CardInfoPrice.styled";
import { ReactComponent as LariIcon } from "../../../assets/svg/lari-icon.svg";
import { Typography } from "../../atoms/Typography/Typography";

const CardInfoPrice = ({ price }: ICardInfoPriceProps) => {
  return (
    <StyledCardInfoPrice>
      <Typography as="p" size="xl" color="black800">
        {price.toLocaleString("en-US")}
      </Typography>
      <LariIcon />
    </StyledCardInfoPrice>
  );
};

export default CardInfoPrice;
