import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const variants = {
  left: tw`lg:items-start`,
  right: tw`lg:items-end`,
  centre: tw`fixed left-0 bottom-0 flex-1 px-0 pt-32 bg-[#000F9F] lg:items-center z-50`,
};

export const Wrapper = styled.div(() => [
  tw`absolute left-0 top-28 bottom-10 w-full flex-1 flex flex-col gap-10 px-4 justify-start items-center overflow-hidden
  md:gap-36 
  lg:(gap-14)`,
  ({ variant }) => variants[variant],
]);

export const TitleWrapper = tw(motion.div)`
   flex flex-col justify-center items-start
`;

export const Content = styled.div(({ $isCenter }) => [
  tw`flex flex-col w-full gap-4 lg:(w-1/2 gap-6)
  `,
  $isCenter && tw`justify-center items-center text-center `,
]);

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;
