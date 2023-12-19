import React from "react";
import { ISearchButtonProps } from "./SearchButton.types";
import Button from "../../atoms/Button/Button";
import { Typography } from "../../atoms/Typography/Typography";

const SearchButton = ({ children, ...props }: ISearchButtonProps) => {
  return (
    <Button variant="primary" {...props}>
      <Typography as="p" size="sm" fontWeight="bold" color="white">
        {children}
      </Typography>
    </Button>
  );
};

export default SearchButton;
