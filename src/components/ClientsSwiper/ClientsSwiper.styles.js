import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';

const slide1 = keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
`;

export const Wrapper = styled.div`
  ${tw`w-full flex flex-col gap-14  
       lg:gap-[6rem]`}
`;

export const CarouselParent = styled.div`
  ${tw`relative w-full h-[5.625rem] overflow-hidden`}
`;

export const Carousel = styled.div`
  ${tw`w-full absolute left-full top-0 overflow-hidden  
     flex items-center whitespace-nowrap gap-24`}
  animation: ${slide1} 30s linear infinite;
`;

export const Carousel2 = styled(Carousel)`
  animation-delay: 15s;
`;

export const imageStyle = tw`w-full h-full rounded-2xl `;

export const ImageWrapper = tw.div`
  shrink-0 w-32 h-16 rounded-2xl md:(w-[10.875rem] h-[5.438rem])
  
`;
