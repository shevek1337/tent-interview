import styled from "styled-components";
import { TButtonVariant } from "./Button.types";
import tw from "twin.macro";

const StyledButton = styled.button<{ variant: TButtonVariant }>(
  ({ variant }) => [
    tw`whitespace-nowrap`,
    variant === "primary" && tw`bg-primary-orange-800 w-full rounded-lg py-2`,
    variant === "secondary" &&
      tw`bg-primary-gray-50 rounded-md px-4 py-2.5 flex gap-2`,
  ]
);

export default StyledButton;
