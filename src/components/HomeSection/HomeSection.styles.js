import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Content = styled.div(() => [
  tw`flex flex-col w-full gap-4 lg:(gap-6 pl-16 pr-[4.5rem]  w-[40%])`,
]);

export const TitleWrapper = tw(motion.div)`
   flex flex-col justify-center items-start
`;

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;
