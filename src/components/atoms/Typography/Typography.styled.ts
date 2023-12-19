import styled from "styled-components";
import tw from "twin.macro";
import {
  TTypographyColors,
  TTypographyFontWeight,
  TTypographySize,
  TTypographyVariant,
} from "./Typography.types";

const StyledTypography = styled.span<{
  as: TTypographyVariant;
  size: TTypographySize;
  fontWeight?: TTypographyFontWeight;
  color?: TTypographyColors;
}>(({ as, size, fontWeight = "normal", color = "black800" }) => [
  tw`transition-all duration-300`,

  // Variants
  as === "h1" && tw`text-4xl font-bold`,
  as === "h2" && tw`text-3xl font-semibold`,
  as === "h3" && tw`text-2xl font-medium`,
  as === "p" && tw`text-base`,
  // Sizes
  size === "xs" && tw`text-xs leading-[normal]`,
  size === "sm" && tw`text-sm leading-[normal]`,
  size === "md" && tw`text-base leading-[normal]`,
  size === "lg" && tw`text-lg leading-[normal]`,
  size === "xl" && tw`text-xl leading-[normal]`,
  size === "2xl" && tw`text-2xl leading-[normal]`,
  size === "3xl" && tw`text-3xl leading-[normal]`,
  size === "4xl" && tw`text-4xl leading-[normal]`,
  // Font Weights
  fontWeight === "bold" && tw`font-bold`,
  fontWeight === "medium" && tw`font-medium`,
  fontWeight === "light" && tw`font-light`,
  fontWeight === "normal" && tw`font-normal`,
  // Colors
  color === "black500Alt" && tw`text-text-black-500Alt`,
  color === "black600" && tw`text-text-black-600`,
  color === "black800" && tw`text-text-black-800`,
  color === "black900" && tw`text-text-black-900`,
  color === "white" && tw`text-text-white`,
  color === "red800" && tw`text-text-red-800`,
  color === "green300" && tw`text-secondary-green-300`,
]);

export default StyledTypography;
