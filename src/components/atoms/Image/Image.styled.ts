import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledImage = styled.img(() => [
  tw`rounded-md object-cover w-44.5 min-w-image h-35`,
]);
