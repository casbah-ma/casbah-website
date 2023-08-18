import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.section)`
  ${tw`z-20 bg-white min-h-screen w-full flex items-center justify-center`}
`;

export const Container = styled(motion.div)`
  ${tw`w-full bg-white flex flex-col justify-start items-center  
      text-center gap-10  md:gap-36 lg:(gap-16)`};
`;

export const LottierContainer = styled(motion.div)`
  ${tw`w-full h-full`}
`;

export const ContentWrapper = styled(motion.div)`
  ${tw`flex flex-col justify-start items-center gap-7`}
`;

export const Content = styled(motion.div)`
  ${tw`flex flex-col w-full gap-4 justify-start items-center [&>h1]:text-brightOrange`}
`;

export const Arrows = styled(motion.div)`
  ${tw`flex flex-col justify-center items-center`}
`;

export const Arraow = styled(motion.span)`
  ${tw`w-7`}
`;
