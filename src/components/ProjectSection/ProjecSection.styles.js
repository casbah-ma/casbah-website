import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const Wrapper = styled(motion.div)`
  ${tw`absolute inset-0 h-screen z-[9999] cursor-pointer overflow-hidden bg-white `}
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
  ${tw`z-20 absolute left-4 bottom-[7vh] w-[80%] flex flex-col overflow-y-hidden gap-8
      md:(left-[4.5rem] bottom-[5.5rem] w-[66%])
      lg:(left-[7.5rem]  w-[60%])`}
`;

export const Tags = styled(motion.ul)`
  ${tw`font-inter w-full flex justify-start items-center gap-2 overflow-y-hidden`}
`;

export const Tag = styled(motion.li)`
  ${tw`border border-white p-2 leading-[1.66rem] text-white text-base uppercase`}
`;
