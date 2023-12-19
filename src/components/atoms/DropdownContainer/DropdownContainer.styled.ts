import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledDropdownContainer = styled.div(() => [
  tw`absolute min-w-full shadow-xl rounded-md bg-primary-white border border-border-gray-200 mt-1 z-50 max-h-72 overflow-y-auto`,
]);
