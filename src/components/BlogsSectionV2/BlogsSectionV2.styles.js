import tw, { styled } from 'twin.macro';

export const Wrapper = styled.section(({ $isPortfolio }) => [
  tw`flex flex-col justify-center items-center gap-[5.625rem] mb-[10rem]`,
  $isPortfolio && tw`gap-[6.563rem]`,
]);

export const Grid = styled.div(({ $isPortfolio }) => [
  tw`grid grid-cols-1 gap-y-6 place-items-start
  md:(grid-cols-2 gap-x-5)
  lg:(gap-y-16 gap-x-6)`,
  $isPortfolio && tw`px-[4.5rem]`,
]);
