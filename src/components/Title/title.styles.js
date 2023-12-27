import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const titleLevels = {
  h1: tw`text-[2rem] leading-[107.7%] md:text-[2.5rem]
        lg:(text-[3.5rem] leading-[107.7%]) `,
  h2: tw`text-2xl leading-[1.875rem] md:(text-[2rem] leading-[2.5rem])`,
  h3: tw`md:(text-lg leading-[166.02%])`,
};

export const StyledTitle = styled(motion.h1)`
  ${tw`text-black font-made uppercase font-light border-l-2 border-brightOrange pl-6 whitespace-pre-line`};
  ${({ level }) => titleLevels[level]};
  ${({ isHome }) =>
    isHome &&
    tw`
  xxl:(text-[2.7rem] leading-[120%])
  xxxl:(text-5xl leading-[120%])
  `};
  ${({ withoutBorder }) => withoutBorder && tw`pl-0 lg:pl-0 border-0`};
  ${({ color }) => color && `color: ${color}`};
`;

export const LineWrapper = styled(motion.span)`
  ${tw`inline-block overflow-y-hidden`}
`;

export const Line = styled(motion.span)`
  ${tw`inline-block`}
`;
