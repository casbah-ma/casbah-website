import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const sizes = {
  md: tw`text-base`,
  lg: tw`text-lg  leading-[1.875rem]`,
  home: tw`text-base xxl:(text-2xl leading-[39.623px])
        xxxl:(text-[1.69rem] leading-[44.965px])
  `,
};

export const StyledP = styled(motion.p)`
  ${tw`first-letter:uppercase text-black font-mako`};
  ${({ size }) => sizes[size]};
  color: ${({ color }) => color && color};
`;
