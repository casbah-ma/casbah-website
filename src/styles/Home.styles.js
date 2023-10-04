import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled(motion.div)`
  ${tw`w-full`}

  &:after,
  &:before {
    ${({ hasGradient }) => hasGradient && tw`[content: '']`};
    ${tw`fixed right-0  w-[40%] z-10`}
  }

  &:before {
    height: 20%;
    top: 0;
    background: linear-gradient(
      180deg,
      #fff 0%,
      rgba(255, 255, 255, 0.82) 89.18%,
      rgba(255, 255, 255, 0.06) 100%
    );
  }
`;

export const LottieWrapper = styled.div`
  ${tw`hidden lg:flex fixed top-0 left-0 bottom-0 w-[calc(50% + 4px)] -z-20
       justify-center items-center  bg-[#000F9F] p-48
       transition-all duration-300`}
  ${({ isWhite }) => isWhite && tw`bg-white`}
`;

export const LottierContainer = styled.div`
  ${tw`relative w-full h-full`};
`;

export const ScrollTopBtn = styled.button(({ $isHidden }) => [
  tw`hidden fixed z-50 bottom-8 right-[4.5rem] 
  w-[2.063rem] md:flex justify-center items-center`,
  $isHidden && tw`lg:hidden`,
]);
