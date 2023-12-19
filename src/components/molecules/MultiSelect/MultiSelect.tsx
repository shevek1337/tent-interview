import {
  IDefaultMultiSelect,
  IModelsMultiSelect,
  SearchSidebarMultiSelectEnum,
  TMultiSelectProps,
} from "./MultiSelect.types";
import {
  StyledMultiSelect,
  StyledDropdownButtonWrapper,
} from "./MultiSelect.styled";
import { Label } from "../../atoms/Label";
import { DropdownButton } from "../../atoms/DropdownButton/DropdownButton";
import { DropdownContainer } from "../../atoms/DropdownContainer";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { Typography } from "../../atoms/Typography/Typography";
import useDropdown from "../../../hooks/useDropdown";
import React from "react";

const MultiSelect = ({
  label,
  placeholder,
  displayValue,
  options,
  selectedItems,
  onClick,
  variant,
}: TMultiSelectProps) => {
  const { dropdownRef, isOpen, toggleDropdown } = useDropdown();

  return (
    <StyledMultiSelect ref={dropdownRef}>
      <Label>{label}</Label>
      <StyledDropdownButtonWrapper>
        <DropdownButton
          onClick={toggleDropdown}
          isOpen={isOpen}
          placeholder={placeholder}
          displayValue={displayValue}
          disabled={!Object.keys(options).length}
        />
        <DropdownContainer isOpen={isOpen}>
          {variant !== SearchSidebarMultiSelectEnum.MODELS
            ? (options as IDefaultMultiSelect["options"]).map((option) => (
                <Checkbox
                  key={option.value}
                  value={option.value}
                  checked={
                    !!selectedItems.find((i) => i.value === option.value)
                  }
                  label={option.label}
                  onClick={onClick}
                />
              ))
            : Object.entries(options as IModelsMultiSelect["options"]).map(
                ([key, value]) => (
                  <React.Fragment key={key}>
                    <Typography
                      as="p"
                      size="sm"
                      color="black800"
                      className="px-4 py-3"
                    >
                      {value.manufacturerName}
                    </Typography>
                    {value.data.map((item) => (
                      <Checkbox
                        key={item.model_id}
                        value={item.model_id}
                        checked={
                          !!selectedItems.find(
                            (i) => i.value === String(item.model_id)
                          )
                        }
                        label={item.model_name}
                        onClick={onClick}
                      />
                    ))}
                  </React.Fragment>
                )
              )}
        </DropdownContainer>
      </StyledDropdownButtonWrapper>
    </StyledMultiSelect>
  );
};

export default MultiSelect;
