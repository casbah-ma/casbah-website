import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
    body {
        ${tw`antialiased`}
    }

    .dialog {
      ${tw`fixed bg-black/25 z-10 inset-0`}
    
      .dialog-panel {
        ${tw`w-full h-full transform overflow-y-scroll bg-white text-left align-middle transition-all`}
      }
    }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
