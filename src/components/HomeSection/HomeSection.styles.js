import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`relative ml-auto w-[40%]`};
`;

export const Container = styled(motion.div)`
  ${tw`h-full w-full flex flex-col gap-10 
      justify-start items-center
      md:gap-36 lg:(gap-14)`};
`;

export const TitleWrapper = tw(motion.div)`
   flex flex-col justify-center items-start
`;

export const Content = styled.div(() => [
  tw`flex flex-col w-full gap-4 lg:(w-1/2 gap-6)`,
]);

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;
