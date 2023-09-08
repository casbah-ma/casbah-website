import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.section)`
  ${tw`z-20 bg-white min-h-screen w-full flex items-center justify-center lg:pt-0`}
`;

export const Container = styled(motion.div)`
  ${tw`z-20 bg-white max-w-[87.5rem] mx-auto flex flex-col justify-start items-center  
      text-center gap-10 px-4 pt-28 md:gap-36 lg:(gap-16 px-16 pb-6)`};
`;

export const LottierContainer = styled(motion.div)`
  ${tw`w-full h-full`}
`;

export const ContentWrapper = styled(motion.div)`
  ${tw`flex flex-col justify-start items-center gap-7`}
`;

export const Content = styled(motion.div)`
  ${tw`flex flex-col w-full gap-4 justify-start items-center
       lg:(w-[34rem] gap-2)`}
`;

export const ArrowsWrapper = styled(motion.div)`
  ${tw`w-full h-full`}
`;
