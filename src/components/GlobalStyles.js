import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
    body {
        ${tw`antialiased`}
    }
    .swiper-wrapper {
      transition-timing-function: linear;
      }
    .swiper-slide {
      width: fit-content !important;
      height: fit-content !important;
    }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
