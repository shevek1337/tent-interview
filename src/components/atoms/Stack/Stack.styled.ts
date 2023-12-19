import styled from "styled-components";
import tw from "twin.macro";
import { IStackProps } from "./Stack.types";

export const StyledStack = styled.div<IStackProps>(() => [tw`flex`]);
