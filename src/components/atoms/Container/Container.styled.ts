import styled from "styled-components";
import tw from "twin.macro";
import { IContainerProps } from "./Container.types";

const StyledContainer = styled.div<IContainerProps>(({ variant }) => [
  tw`container mx-auto`,
  variant === "sidebar" &&
    tw`flex bg-white flex-col w-desktopSidebar border border-t-0 border-border-gray-200`,
  variant === "sidebarFooter" &&
    tw`flex px-5.75 pt-4 pb-5 shadow-sidebarFooter`,
]);

export default StyledContainer;
