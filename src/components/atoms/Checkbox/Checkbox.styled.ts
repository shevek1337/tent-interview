import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledCheckboxWrapper = styled.div<{
  checked: boolean;
  value: string | number;
}>(({ checked }) => [
  tw`flex items-center cursor-pointer gap-2 hover:bg-primary-gray-50 px-4 py-2`,
  checked && tw`bg-primary-gray-50`,
]);

export const StyledCheckboxInput = styled.input(() => [
  tw`w-4 h-4 text-blue-600 bg-gray-100 border-border-gray-200 outline-border-gray-200 rounded`,
]);
