import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Container = styled(motion.div)`
  ${tw`relative flex justify-center items-end`};
  ${({ isFirst }) => isFirst && tw`h-screen`}
`;

export const Content = styled.div(() => [
  tw`flex flex-col w-full gap-4 lg:(gap-6 pl-16 pr-[4.5rem]  ml-auto mt-auto w-[40%])`,
]);

export const TitleWrapper = tw(motion.div)`
   flex flex-col justify-center items-start
`;

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;
