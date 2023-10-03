import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.section)`
  ${tw`z-20 bg-white min-h-screen w-full flex items-center justify-center lg:pt-0`}
`;

export const Container = styled(motion.div)`
  ${tw`z-20 bg-white h-full max-w-[87.5rem] mx-auto flex flex-col justify-start items-center  
      text-center gap-10 pt-28 `};
`;

export const LottierContainer = styled(motion.div)`
  ${tw`w-full h-full`}
`;

export const ContentWrapper = styled(motion.div)`
  ${tw`flex flex-col justify-start items-center gap-7`}
`;

// export const Content = styled(motion.div)`
//   ${tw`flex flex-col w-full h-full gap-4 justify-start items-center
//        lg:(w-[34rem] gap-2)`}
// `;

export const ArrowsWrapper = styled(motion.div)`
  ${tw`w-full h-full`}
`;

export const Content = tw.div`w-full h-full relative overflow-hidden `;

export const Infos = tw.div`absolute top-0 left-1/2 -translate-x-1/2  flex flex-col justify-center items-center gap-6 lg:gap-9 2xl:top-[5rem]`;

export const SubTitle = styled(motion.H2)`
  ${tw`font-made font-light text-[1.188rem] tracking-[1.425rem] md:text-[2.188rem] leading-[95.2%] uppercase text-brightOrange
                              lg:(text-[2rem] tracking-[2.4rem] )`}
`;

export const HeroTitle = styled(motion.h1)`
  ${tw`font-made font-light text-[2.5rem] md:text-[5rem] lg:text-[8rem]  leading-[95.2%] uppercase`}
`;

//  w-[699.86px] h-[440px]
export const imageSize = tw`absolute -bottom-[10rem] left-1/2 -translate-x-1/2 w-[390px] h-[592px] object-contain `;

export const SVGStyle =
  'absolute -bottom-[28rem] left-1/2  w-full z-20 lg:w-[700px] lg:-bottom-[43.9rem]';
