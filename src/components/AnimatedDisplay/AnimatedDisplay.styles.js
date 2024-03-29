import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';

export const titleLevels = {
  lg: tw`text-[2rem] leading-[107.7%] md:text-[2.5rem]
        lg:(text-[3.5rem] leading-[107.7%])`,
  md: tw`text-2xl leading-[1.875rem] uppercase text-brightOrange block`,
  home: tw`text-2xl leading-[1.875rem] uppercase text-brightOrange block
           xxl:text-3xl`,
};

export const Wrapper = styled(motion.h1)`
  ${tw`font-made uppercase font-light whitespace-pre-line`};
  ${({ size }) => titleLevels[size]};
  ${({ color }) => color && `color: ${color}`}
`;

export const LineWrapper = styled(motion.span)`
  ${tw`inline-block overflow-y-hidden`}
`;

export const Line = styled(motion.span)`
  ${tw`inline-block`}
`;
