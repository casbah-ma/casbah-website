import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`w-full flex flex-col justify-center items-center gap-14 lg:gap-24`}
`;

export const Title = styled(motion.h1)`
  ${tw`text-[3.438rem] leading-[2.671rem] text-[#000219]  font-light capitalize overflow-y-hidden
       md:(text-[6.438rem] leading-[5rem])
       lg:(text-[12.313rem] leading-[9.567rem])`}
`;

export const Word = styled(motion.span)`
  ${tw`whitespace-nowrap`}
`;

export const Letter = styled(motion.span)`
  ${tw`inline-block`}
`;
