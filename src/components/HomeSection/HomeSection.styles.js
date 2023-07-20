import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`relative h-[70vh] flex justify-center items-end ml-auto w-[40%] pb-20`};
  ${({ isFirst }) => isFirst && tw`h-screen`}
  scroll-snap-align: end;
  scroll-snap-stop: always;
`;

export const Content = styled.div(() => [
  tw`flex flex-col w-full gap-4 lg:(w-full gap-6 pl-16 pr-[4.5rem])`,
]);

export const TitleWrapper = tw(motion.div)`
   flex flex-col justify-center items-start
`;

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;
