import { styled } from "styled-components";
import tw from "twin.macro";

export const StyledSearchSidebar = styled.div(() => [tw`flex flex-col w-62.5`]);

export const StyledSearchSidebarInputs = styled.div(() => [
  tw`flex flex-col gap-5 p-6 pt-5.5 border-b`,
]);
