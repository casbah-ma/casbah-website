import styled from 'styled-components';
import tw from 'twin.macro';

export const variants = {
  primary: tw`w-full bg-white  py-4 px-2 rounded-full`,
};
export const StyledBtn = styled.button(() => [
  tw`flex justify-center items-center gap-2 border-2 border-black
     font-made text-base font-light leading-5
     md:(min-w-[15.688rem])
     lg:(min-w-[19.563rem] h-[5.875rem])`,
  ({ variant }) => variants[variant],
]);
