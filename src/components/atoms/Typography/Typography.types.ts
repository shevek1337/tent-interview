export type TTypographyVariant = "h1" | "h2" | "h3" | "p";

export type TTypographySize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type TTypographyFontWeight = "bold" | "medium" | "light" | "normal";

export type TTypographyColors =
  | "black500Alt"
  | "black600"
  | "black800"
  | "black900"
  | "white"
  | "red800"
  | "green300";

export interface ITypographyProps {
  as?: TTypographyVariant;
  children: React.ReactNode;
  size: TTypographySize;
  className?: string;
  fontWeight?: TTypographyFontWeight;
  color?: TTypographyColors;
  style?: React.CSSProperties;
}
