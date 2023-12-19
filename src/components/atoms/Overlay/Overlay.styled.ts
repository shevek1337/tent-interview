import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledOverlay = styled.div(() => [
  tw`fixed top-0 left-0 w-full h-full bg-white bg-opacity-50 z-10 animate-pulse flex items-center justify-center`,
]);
