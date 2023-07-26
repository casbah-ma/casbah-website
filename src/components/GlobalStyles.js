import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
    
    body {
        ${tw`antialiased`};
        -webkit-font-smoothing: antialiased;
    }
  
    // client slider / agency page 
    .infinite-slider::before,
    .infinite-slider::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      width: 25px;
      height: 100%;
    }
    .infinite-slider::before {
      background: linear-gradient(to right, #fff 0%, rgba(250, 251, 252, 0) 100%
      ); left: 0;
    }
    .infinite-slider::after {
        background: linear-gradient(to right, rgba(250,251,252,0) 0%, #fff 100%); right: 0;
    }

    .wave span {
      position: relative !important;
      display: inline-block !important;
    }


    .wave:hover span {
      animation: animate 1s ease-out;
      animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .wave:target span{
      animation: animate 1s ease-out;
      animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    @keyframes animate {
      0% {
        transform: translateY(0px);
      }

      20% {
        transform: translateY(-5px);
      }

      40%,
      100% {
        transform: translateY(0px);
      
      }
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
