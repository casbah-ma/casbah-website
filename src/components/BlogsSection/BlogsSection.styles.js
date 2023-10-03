import tw, { styled } from 'twin.macro';

export const Grid = styled.div(() => [
  tw`w-full grid grid-cols-1 gap-y-8 px-4 max-w-[87.5rem] cursor-none
   md:(grid-cols-2 gap-y-6 gap-x-5)
   lg:(gap-y-10 gap-x-6 px-[4.5rem])`,
]);
