import React from "react";
import { StyledOverlay } from "./Overlay.styled";
import { IOverlayProps } from "./Overlay.types";
import { ReactComponent as SpinnerIcon } from "../../../assets/svg/spinner-icon.svg";

export const Overlay = ({ isVisible }: IOverlayProps) => {
  return isVisible ? (
    <StyledOverlay>
      <SpinnerIcon className="animate-spin" />
    </StyledOverlay>
  ) : null;
};
