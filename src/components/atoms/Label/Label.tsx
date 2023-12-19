import React from "react";
import { Typography } from "../Typography/Typography";
import { ILabelProps } from "./Label.types";

export const Label = ({ children }: ILabelProps) => {
  return (
    <Typography as="p" size="xs" color="black800" fontWeight="medium">
      {children}
    </Typography>
  );
};
