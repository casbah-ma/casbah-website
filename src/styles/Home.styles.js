import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled(motion.div)`
  ${tw`w-full flex flex-col gap-28`}
`;

export const LottieWrapper = styled.div`
  ${tw`hidden md:flex fixed top-0 left-0 bottom-0 w-[60%]  justify-center items-center -z-10 bg-[#000F9F]`}
`;
