import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled(motion.div)`
  ${tw` w-full flex flex-col gap-28`}
  &:after , &:before {
    ${({ hasGradient }) => hasGradient && tw`[content: '']`};
    ${tw`fixed right-0 w-full `}
  }

  &:before {
    height: 20%;
    top: 0;
    background: linear-gradient(
      180deg,
      #fff 75.56%,
      rgba(255, 255, 255, 0.82) 89.18%,
      rgba(255, 255, 255, 0.06) 100%
    );
  }

  &:after {
    height: 14%;
    bottom: 0;
    background: linear-gradient(
      180deg,
      #fff 24.59%,
      rgba(255, 255, 255, 0.86) 71.37%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const LottieWrapper = styled.div`
  ${tw`hidden md:flex fixed top-0 left-0 bottom-0 w-[60%]  z-10
       justify-center items-center  bg-[#000F9F] p-48 pt-52`}
`;
