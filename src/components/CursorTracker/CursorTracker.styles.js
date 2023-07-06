import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const ReadMore = styled(motion.div)`
  ${tw`w-[10rem] h-[10rem] rounded-full flex justify-center items-center bg-brightOrange overflow-hidden
       z-[99999]  fixed text-base text-white uppercase  cursor-none pointer-events-none`};
`;
