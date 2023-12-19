import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledCurrencyToggleContainer = styled.div(() => [
  tw`flex flex-row items-center rounded-full border border-border-gray-200 font-bold text-xs h-6`,
]);

export const StyledCurrencyToggleButton = styled.button<{ selected: boolean }>(
  ({ selected }) => [
    tw`flex items-center justify-center w-5.75 h-full rounded-full text-secondary-black-500`,
    selected && tw`bg-primary-black-800`,
  ]
);
