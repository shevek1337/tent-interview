import React from "react";
import Button from "../../atoms/Button/Button";
import { Typography } from "../../atoms/Typography/Typography";
import { ITestDriveButtonProps } from "./TestDriveButton.types";
import { ReactComponent as TestDriveIcon } from "../../../assets/svg/sache-icon.svg";

const TestDriveButton = ({ children }: ITestDriveButtonProps) => {
  return (
    <Button variant="secondary">
      <TestDriveIcon />
      <Typography as="p" size="xs" fontWeight="bold" color="black800">
        {children}
      </Typography>
    </Button>
  );
};

export default TestDriveButton;
