import { IBoxProps } from "./Box.types";
import { StyledBox } from "./Box.styled";

export const Box = ({ children, ...props }: IBoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
