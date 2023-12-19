import React from "react";
import { StyledImage } from "./Image.styled";
import { IImageProps } from "./Image.types";

export const Image = ({ src }: IImageProps) => {
  return <StyledImage src={src} />;
};
