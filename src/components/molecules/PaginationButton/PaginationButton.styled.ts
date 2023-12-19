import { styled } from "styled-components";
import tw from "twin.macro";
import { IPaginationButtonProps } from "./PaginationButton.types";

export const StyledPaginationButton = styled.button<IPaginationButtonProps>(
  ({ selected, disabled }) => [
    tw`flex items-center justify-center w-8 h-8 text-xs font-bold  bg-primary-white border border-border-gray-400 rounded-md hover:border-primary-black-800 focus:outline-none`,
    selected && tw`hover:border-border-gray-400`,
    disabled &&
      tw`bg-primary-gray-50 border-primary-gray-50 cursor-not-allowed hover:border-primary-gray-50`,
  ]
);
