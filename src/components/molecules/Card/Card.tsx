import React from "react";
import { StyledCard, StyledCardInfoWrapper } from "./Card.styled";
import { Image } from "../../atoms/Image";
import { ICardProps } from "./Card.types";
import { Stack } from "../../atoms/Stack/Stack";
import { Typography } from "../../atoms/Typography/Typography";
import { useTranslation } from "react-i18next";
import { ReactComponent as CustomsClearedIcon } from "../../../assets/svg/customs-checkmark-icon.svg";
import { ReactComponent as GeoFlagIcon } from "../../../assets/svg/geo-flag-icon.svg";
import { ReactComponent as OvalDividerIcon } from "../../../assets/svg/oval-divider-icon.svg";
import { CardInfoGrid } from "../CardInfoGrid";
import CardInfoPrice from "../CardInfoPrice/CardInfoPrice";
import { howLongAgo } from "../../../utils/dateFormaters";
import { CardActionButtons } from "../CardActionButtons";

export const Card = ({
  carImageSrc,
  carName,
  year,
  isCustomsCleared,
  customsPrice,
  carRunKm,
  engineVolume,
  rightWheel,
  price,
  views,
  orderDate,
}: ICardProps) => {
  const { t } = useTranslation();

  return (
    <StyledCard>
      <Image src={carImageSrc} />
      <StyledCardInfoWrapper>
        <Stack className="mb-6 justify-between">
          <Stack className="gap-2">
            <Typography as="h2" size="sm" color="black800">
              {carName}
            </Typography>
            <Typography as="p" size="sm" color="black500Alt">
              {year}
            </Typography>
          </Stack>

          <Stack className="gap-4 items-center">
            {isCustomsCleared ? (
              <Stack className="items-center">
                <CustomsClearedIcon />
                <Typography as="p" size="xs" color="green300">
                  {t("CUSTOMS_CLEARED")}
                </Typography>
              </Stack>
            ) : (
              <Stack className="items-center">
                <Typography as="p" size="xs" color="red800">
                  {t("CUSTOMS_CLEAR_PRICE", { number: customsPrice })}
                </Typography>
              </Stack>
            )}

            <Stack className="items-center gap-2">
              <GeoFlagIcon />
              <Typography as="p" size="xs" color="black600">
                {t("TBILISI")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack className="justify-between">
          <CardInfoGrid
            carRunKm={carRunKm}
            engineVolume={engineVolume}
            rightWheel={rightWheel}
          />
          <CardInfoPrice price={price} />
        </Stack>

        <Stack className="mt-auto justify-between">
          <Stack className="gap-1 items-center">
            <Typography as="p" size="xs" color="black600">
              {t("NUMBER_VIEWS", { number: views })}
            </Typography>
            <OvalDividerIcon />
            <Typography as="p" size="xs" color="black600">
              {howLongAgo(orderDate, t)}
            </Typography>
          </Stack>

          <CardActionButtons />
        </Stack>
      </StyledCardInfoWrapper>
    </StyledCard>
  );
};
