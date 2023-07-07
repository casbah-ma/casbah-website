import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.section)`
  ${tw`absolute left-0 top-0 bottom-0 w-full min-h-screen flex flex-col gap-10
       px-4  justify-start items-center overflow-hidden text-center
       md:gap-36 lg:(gap-16 px-16 pt-28 pb-6)`}
`;

export const Content = tw.div`
  flex flex-col w-full gap-4 
  lg:(w-[34rem] gap-6)
`;
