import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const variants = {
  left: tw`lg:items-start`,
  right: tw`lg:items-end`,
  centre: tw`fixed left-0 bottom-0 h-screen px-0 pt-32 lg:items-center`,
};

export const contentVariants = {
  left: tw`lg:pl-[4.5rem]`,
  right: tw`lg:pr-[4.5rem]`,
  centre: tw`justify-center items-center text-center`,
};

export const Wrapper = styled.div(() => [
  tw`absolute left-0 top-28 bottom-10 w-full flex flex-col gap-10 px-4 justify-start items-center overflow-hidden
  md:gap-36 
  lg:(gap-14)`,
  ({ variant }) => variants[variant],
]);

export const TitleWrapper = tw(motion.div)`
   flex flex-col justify-center items-start
`;

export const Content = styled.div(() => [
  tw`flex flex-col w-full gap-4 lg:(w-1/2 gap-6)`,
  ({ variant }) => contentVariants[variant],
]);

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;
