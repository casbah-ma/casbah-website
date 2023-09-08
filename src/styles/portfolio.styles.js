import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled(motion.div)`
  ${tw`min-h-screen w-full flex flex-col items-center mb-24 gap-14 mt-[9.188rem] 
      lg:(gap-20 mb-40 mt-[11.5rem])`}
`;
