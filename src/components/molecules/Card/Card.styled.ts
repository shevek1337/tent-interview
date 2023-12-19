import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledCard = styled.div(() => [
  tw`flex rounded-cardBorderRadius bg-primary-white w-full p-4 h-fit gap-4`,
]);

export const StyledCardInfoWrapper = styled.div(() => [
  tw`flex flex-col w-full`,
]);
