import { StyledSingleSelect } from "./SingleSelect.styled";
import { ISingleSelectProps } from "./SingleSelect.types";
import { Label } from "../../atoms/Label";
import { Stack } from "../../atoms/Stack";
import { DropdownButton } from "../../atoms/DropdownButton";
import { DropdownContainer } from "../../atoms/DropdownContainer";
import { Typography } from "../../atoms/Typography/Typography";
import { Box } from "../../atoms/Box";
import useDropdown from "../../../hooks/useDropdown";

export const SingleSelect = <T,>({
  variant = "primary",
  label,
  placeholder,
  options,
  value,
  onChange,
}: ISingleSelectProps<T>) => {
  const { dropdownRef, isOpen, toggleDropdown } = useDropdown();
  const isPrimary = variant === "primary";

  const handleSelect = (value: T) => {
    onChange(value);
    toggleDropdown();
  };

  return (
    <StyledSingleSelect ref={dropdownRef}>
      {isPrimary && !!label && <Label>{label}</Label>}
      <Box className="block relative w-full">
        <DropdownButton
          className="mr-4.5"
          onClick={toggleDropdown}
          isOpen={isOpen}
          placeholder={placeholder}
          displayValue={
            options.find((option) => option.value === value)?.label || ""
          }
          disabled={!Object.keys(options).length}
        />
        <DropdownContainer isOpen={isOpen}>
          {options.map((option) => (
            <Stack
              key={option.value as string}
              className={`cursor-pointer px-4 py-2 ${
                value === option.value ? "bg-primary-gray-50" : "bg-white"
              } hover:bg-primary-gray-50`}
              onClick={() => handleSelect(option.value as T)}
            >
              <Typography
                as="p"
                color={value === option.value ? "black800" : "black600"}
                size="sm"
                className="whitespace-nowrap"
              >
                {option.label}
              </Typography>
            </Stack>
          ))}
        </DropdownContainer>
      </Box>
    </StyledSingleSelect>
  );
};
