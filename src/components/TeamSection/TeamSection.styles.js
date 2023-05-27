import tw from 'twin.macro';

export const Wrapper = tw.div`
w-full flex flex-col gap-10 
md:gap-[1.875rem] lg:gap-12
`;

export const Grid = tw.div`
   grid grid-cols-1 gap-y-4
   md:(grid-cols-2 gap-y-[1.875rem] gap-x-5)
   lg:(grid-cols-3 gap-y-12 gap-x-6)
`;
