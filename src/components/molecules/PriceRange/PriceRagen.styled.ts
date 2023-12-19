import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledPriceRangeContainer = styled.div(() => [
  tw`flex flex-col w-full px-6 pb-11 pt-4 gap-3`,
]);

export const StyledPriceRangeHeader = styled.div(() => [
  tw`flex flex-row justify-between items-center`,
]);

export const StyledPriceRange = styled.div(() => [
  tw`flex flex-row gap-1 items-center`,
]);
