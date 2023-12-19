import { styled } from "styled-components";
import tw from "twin.macro";
import { ISidebarHeaderIconProps } from "./SidebarHeaderIcon.types";

const StyledSidebarHeaderIcon = styled.div<ISidebarHeaderIconProps>(
  ({ selected }) => [
    tw`flex justify-center fill-secondary-black-500`,
    selected && tw`fill-primary-orange-800`,
  ]
);

export default StyledSidebarHeaderIcon;
