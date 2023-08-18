import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`flex flex-col justify-center gap-14 max-w-[89rem]
  lg:(gap-24 pl-[4.5rem] pr-14)`};
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
