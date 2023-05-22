import tw from 'twin.macro';

export const Grid = tw.div`
   grid grid-cols-1 gap-y-8
   md:(grid-cols-2 gap-y-6 gap-x-5)
   lg:(gap-y-10 gap-x-6)
`;
