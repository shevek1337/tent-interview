import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

const GlobalStyles = createGlobalStyle`
  body {
    ${tw`bg-primary-gray-50`}
  }

  h1, h2, h3, h4, h5, h6 {
    ${tw`font-bold`}
  }

  p {
    ${tw`text-base`}
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    ${tw`appearance-none`}
  }
`;

export default GlobalStyles;
