import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
    body {
        ${tw`overflow-hidden`}
    }
    .blog > ol > li::before{
      content: '0'counter(items);
    }
    
    .blog > ol > li:nth-child(n + 10)::before {
    content: counter(items);
      }
    .dialog {
      ${tw`fixed bg-black/25 z-10 inset-0`}
    
      .dialog-panel {
        ${tw`w-full h-full transform overflow-y-scroll bg-white text-left align-middle transition-all`}
      }
    .swiper-wrapper {
      transition-timing-function: linear;
      }
    .swiper-slide {
      width: fit-content !important;
      height: fit-content !important;
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
