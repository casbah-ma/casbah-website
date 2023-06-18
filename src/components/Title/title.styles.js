import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const titleLevels = {
  h1: tw`text-[2rem] leading-[107.7%] md:text-[2.5rem]
        lg:(text-[3.5rem] leading-[107.7%]) `,
  h2: tw`text-2xl leading-[1.875rem] md:text-[2rem] md:leading-[2.5rem]`,
  h3: tw`md:text-lg md:leading-[166.02%]`,
};

export const StyledTitle = styled(motion.h1)`
  ${tw`text-black font-made uppercase font-light border-l border-brightOrange pl-10 whitespace-pre-line
     lg:pl-[6rem]`};
  ${({ level }) => titleLevels[level]};
  ${({ withoutBorder }) => withoutBorder && tw`pl-0 lg:pl-0 border-0`};
  ${({ color }) => color && `color: ${color}`};
`;

export const LineWrapper = styled(motion.span)`
  ${tw`inline-block overflow-y-hidden`}
`;

export const Line = styled(motion.span)`
  ${tw`inline-block`}
`;
