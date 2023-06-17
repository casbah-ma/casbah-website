import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const sizes = {
  md: tw`text-base leading-[1.688rem]`,
  lg: tw`text-lg  leading-[1.875rem]`,
};
export const StyledP = styled(motion.p)`
  ${tw`first-letter:uppercase text-black font-mako`};
  ${({ size }) => sizes[size]};
  color: ${({ color }) => color && color};
`;
