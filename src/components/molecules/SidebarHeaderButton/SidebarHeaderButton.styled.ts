import styled from "styled-components";
import tw from "twin.macro";
import { ISidebarHeaderButtonProps } from "./SidebarHeaderButton.types";
import { SidebarHeaderSelectOptionsEnum } from "../SidebarHeader/SidebarHeader.types";

const StyledSidebarHeaderButton = styled.button<ISidebarHeaderButtonProps>(
  ({ selected, variant }) => [
    tw`py-2 flex-1 justify-center bg-primary-gray-25 h-12 border-t border-b`,
    selected && tw`bg-primary-white border-b-primary-orange-800`,
    variant === SidebarHeaderSelectOptionsEnum.CAR &&
      tw`border-l rounded-tl-large`,
    variant === SidebarHeaderSelectOptionsEnum.MOTO &&
      tw`!border-r rounded-tr-large`,
  ]
);

export default StyledSidebarHeaderButton;
