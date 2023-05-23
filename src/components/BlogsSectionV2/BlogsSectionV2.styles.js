import tw, { styled } from 'twin.macro';

export const Wrapper = tw.section`
  flex flex-col justify-center items-center gap-[5.625rem]
`;

export const Grid = styled.div`
  ${tw`grid grid-cols-1 gap-y-6 
   md:(grid-cols-2 gap-x-5)
   lg:(gap-y-16 gap-x-6)`};
`;
