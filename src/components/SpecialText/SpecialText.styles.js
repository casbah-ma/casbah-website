import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const sizes = {
  md: tw`text-base md:text-lg lg:text-2xl`,
  lg: tw`text-2xl lg:(text-[2rem] leading-[2.5rem])`,
};

export const SpecialStyle = styled(motion.div)`
  ${tw`w-full font-made font-light text-base md:text-lg lg:text-2xl
    text-darkBlue overflow-y-hidden`};
  ${({ size }) => sizes[size]}
  ${({ uppercase }) => uppercase && tw`uppercase`}
`;

export const LineWrapper = styled(motion.p)`
  ${tw`overflow-y-hidden  `}
`;

export const Line = styled(motion.span)`
  ${tw`inline-block`}
`;
