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
  ${tw`relative w-full h-[5.625rem] overflow-hidden flex gap-5 md:gap-10 lg:gap-20`}
`;

export const Carousel = styled.div`
  ${tw`w-full absolute left-full top-0  overflow-hidden 
     flex items-center  gap-5 pr-5 md:(gap-10 pr-10) lg:(gap-20 pr-20)`}
  animation: ${slide1} 30s linear infinite;
`;

export const Carousel2 = styled(Carousel)`
  animation-delay: 15s;
`;

export const imageStyle = tw`w-full h-full`;

export const ImageWrapper = tw.div`
w-[6.688rem] h-[2rem] md:(w-[6rem] h-[4rem])   lg:(w-[6.688rem] h-[4.875rem] mx-10)
`;


export const Boxes = tw.div`w-full relative [left: -50px]`

export const Box = tw.div`absolute w-fit h-fit`