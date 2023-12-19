import React from "react";
import {
  StyledCardInfoGrid,
  StyledCardInfoGridItem,
} from "./CardInfoGrid.styled";
import { ReactComponent as EngineIcon } from "../../../assets/svg/motor-icon.svg";
import { ReactComponent as SpeedIcon } from "../../../assets/svg/speed-icon.svg";
import { ReactComponent as GearIcon } from "../../../assets/svg/automatic-icon.svg";
import { ReactComponent as WheelIcon } from "../../../assets/svg/wheel-icon.svg";
import { Typography } from "../../atoms/Typography/Typography";
import { ICardInfoGridProps } from "./CardInfoGrid.types";
import { calculateEngine } from "../../../utils/helpers";
import { useTranslation } from "react-i18next";

export const CardInfoGrid = ({
  engineVolume,
  carRunKm,
  rightWheel,
}: ICardInfoGridProps) => {
  const { t } = useTranslation();

  return (
    <StyledCardInfoGrid>
      <StyledCardInfoGridItem>
        <EngineIcon />
        <Typography as="p" size="xs" color="black900" className="w-38.5">
          {calculateEngine(engineVolume)}
        </Typography>
      </StyledCardInfoGridItem>

      <StyledCardInfoGridItem>
        <SpeedIcon />
        <Typography as="p" size="xs" color="black900" className="w-38.5">
          {t("CAR_RUN_KM", { number: carRunKm.toLocaleString("ru-RU") })}
        </Typography>
      </StyledCardInfoGridItem>

      <StyledCardInfoGridItem>
        <GearIcon />
        <Typography as="p" size="xs" color="black900" className="w-38.5">
          {t("AUTOMATIC")}
        </Typography>
      </StyledCardInfoGridItem>

      <StyledCardInfoGridItem>
        <WheelIcon />
        <Typography as="p" size="xs" color="black900" className="w-38.5">
          {t(rightWheel ? "RIGHT" : "LEFT")}
        </Typography>
      </StyledCardInfoGridItem>
    </StyledCardInfoGrid>
  );
};
