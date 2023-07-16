import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`relative w-full h-full`};
  scroll-snap-align: start;
`;

export const Container = styled(motion.div)`
  ${tw`h-full w-full flex flex-col justify-center gap-14 
  lg:(gap-24 px-[4rem])`};
  ${({ isFixed }) => isFixed && tw`fixed bottom-0 w-[99%] h-full  -z-10`}
`;

export const Title = styled(motion.h1)`
  ${tw`font-made text-[3.438rem] leading-[2.671rem] text-[#000219]  font-light capitalize overflow-y-hidden
       md:(text-[6.438rem] leading-[5rem])
       lg:(text-[12rem] leading-[9.567rem])`}
`;

export const Word = styled(motion.span)`
  ${tw`whitespace-nowrap`}
`;

export const Letter = styled(motion.span)`
  ${tw`inline-block`}
`;
