import tw, { styled } from 'twin.macro';

export const Grid = tw.div`
   grid grid-cols-1 gap-y-8
   md:(grid-cols-2 gap-y-6 gap-x-5)
   lg:(gap-y-10 gap-x-6)
`;

export const ReadMore = styled.div.attrs(
  ({ x, y }) =>
    x &&
    y && {
      style: {
        left: x,
        top: y,
      },
    }
)`
  ${tw`w-[10rem] h-[10rem] rounded-full flex justify-center items-center bg-brightOrange
       fixed z-10 text-base text-white uppercase -translate-x-1/2 -translate-y-1/2 cursor-none`};
`;
