import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.section)`
  ${tw`w-full flex flex-col gap-10 px-4 pt-28
        justify-start items-center text-center
       md:gap-36 lg:(gap-16 px-16 pb-6)`}
  scroll-snap-align: start;
`;

export const ContentWrapper = styled(motion.div)`
  ${tw`flex flex-col justify-start items-center gap-7`}
`;

export const Content = styled(motion.div)`
  ${tw`flex flex-col w-full gap-4 justify-start items-center
       lg:(w-[34rem] gap-2)`}
`;

export const Arrows = styled(motion.div)`
  ${tw`flex flex-col justify-center items-center`}
`;

export const Arraow = styled(motion.span)`
  ${tw`w-7`}
`;
