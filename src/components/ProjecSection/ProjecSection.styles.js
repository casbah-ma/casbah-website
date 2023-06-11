import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`relative w-full h-screen`}
`;

export const imageStyle = tw`w-full h-full`;
export const ImageWrapper = styled(motion.div)`
  ${tw`absolute inset-0 object-cover`}
`;

export const Backdrop = styled.div`
  ${tw`absolute inset-0 z-10`}
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
`;

export const Content = styled(motion.div)`
  ${tw`z-20 absolute left-4 bottom-[10vh] w-[80%] flex flex-col gap-28 overflow-y-hidden 
      md:(left-[4.5rem] w-[66%] gap-32)
      lg:(left-[7.5rem] [bottom: unset] top-1/2 w-[46%] gap-28)`}
`;

export const Title = styled(motion.h1)`
  ${tw`text-white font-made uppercase font-light 
        text-[2rem] leading-[107.7%] md:text-[2.5rem]
        lg:(text-[3.5rem] leading-[107.7%]) `}
`;

export const Tags = styled(motion.ul)`
  ${tw`w-full flex justify-start items-center gap-2 overflow-y-hidden`}
`;

export const Tag = styled(motion.li)`
  ${tw`border border-white p-2 leading-[1.66rem] text-white text-base uppercase`}
`;
