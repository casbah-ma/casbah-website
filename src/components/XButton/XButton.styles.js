import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledBtn = styled.button`
  ${tw`relative flex justify-center items-center gap-2 border-2 border-black text-center
     font-made text-base font-light leading-5 transition-all hover:rounded-[5rem] duration-300
     after:(-z-10 absolute inset-0 transform scale-0 origin-bottom rounded-[5rem] bg-brightOrange duration-300)
     hover:after:scale-100
     md:(min-w-[15.688rem])
     lg:(min-w-[19.563rem] h-[5.875rem])`};
`;
