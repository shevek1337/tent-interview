import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledDropdownButton = styled.button<{
  disabled?: boolean;
}>(({ disabled }) => [
  tw`flex items-center pl-3 pr-2 h-10 border rounded-md bg-primary-white border-border-gray-400 cursor-pointer w-full whitespace-nowrap overflow-hidden`,
  disabled && tw`bg-primary-gray-50 cursor-default`,
]);

export const StyledDropdownButtonContainer = styled.div(() => [
  tw`relative h-fit cursor-pointer`,
]);
