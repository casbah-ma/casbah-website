import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const LottieWrapper = tw.div`
 w-full h-[24.2rem] flex justify-center items-center bg-[#000F9F] px-4 pt-5 pb-8
 md:(h-[37rem] px-[5.688rem] py-10) lg:hidden
`;

export const LottieContainer = tw.div`
 relative w-full h-full
`;

export const Content = styled.div(() => [
  tw`w-full flex flex-col gap-4 px-4 md:px-[4.313rem]
    lg:(gap-6 pl-16 pr-[4.5rem] w-[40%])`,
]);

export const TitleWrapper = tw(motion.div)`
   flex flex-col justify-center items-start
`;

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
`;
