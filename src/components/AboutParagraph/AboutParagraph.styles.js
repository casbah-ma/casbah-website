import styled from 'styled-components';
import tw from 'twin.macro';

export const sizes = {
  sm: tw`md:gap-[1.9rem] [&>h2]:(text-lg) [&>div]:gap-0`,
  lg: tw`md:gap-6 lg:gap-8`,
};

export const Wrapper = styled.div`
  ${tw`w-full flex flex-col gap-4 `}
  ${({ size }) => sizes[size]}
`;

export const TextSection = tw.div`w-full flex flex-col gap-3`;
