import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const variants = {
  left: tw`lg:items-start`,
  right: tw`lg:items-end`,
  centre: tw`px-0 pt-32 lg:items-center`,
};

export const contentVariants = {
  left: tw`lg:pl-[4.5rem]`,
  right: tw`lg:pr-[4.5rem]`,
  centre: tw`justify-center items-center text-center`,
};

export const Wrapper = styled(motion.div)`
  ${tw`relative h-full w-full `};

  scroll-snap-align: start;
`;

export const Container = styled(motion.div)`
  ${tw`h-full w-full flex flex-col gap-10 
      justify-start items-center px-4 pt-28
  md:gap-36 lg:(gap-14)`};
  ${({ variant }) => variants[variant]}
  ${({ isFixed }) => isFixed && tw`fixed bottom-0 w-[99%] h-full  -z-10`}
`;

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
