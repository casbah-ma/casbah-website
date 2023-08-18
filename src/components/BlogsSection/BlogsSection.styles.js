import tw, { styled } from 'twin.macro';

export const Grid = styled.div(({ $isPortfolio }) => [
  tw`grid grid-cols-1 gap-y-8
   md:(grid-cols-2 gap-y-6 gap-x-5)
   lg:(gap-y-10 gap-x-6)`,
  $isPortfolio && tw`px-[2.5rem]  lg:px-[4.5rem] max-w-[87.5rem]`,
]);
