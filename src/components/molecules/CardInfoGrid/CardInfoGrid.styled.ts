import styled from "styled-components";
import tw from "twin.macro";

export const StyledCardInfoGrid = styled.div(() => [
  tw`grid grid-cols-2 gap-x-8 gap-y-4`,
]);

export const StyledCardInfoGridItem = styled.div(() => [tw`flex gap-3`]);
