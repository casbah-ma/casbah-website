import tw, { styled } from 'twin.macro';

export const Grid = styled.div(({ $isPortfolio }) => [
  tw`grid grid-cols-1 gap-y-8 px-[2.5rem] max-w-[87.5rem]
   md:(grid-cols-2 gap-y-6 gap-x-5)
   lg:(gap-y-10 gap-x-6 px-[4.5rem])`,
]);
