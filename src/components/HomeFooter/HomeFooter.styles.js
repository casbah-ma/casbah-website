import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`w-full h-full flex flex-col items-start  bg-white isolate`};
`;

export const TextWrapper = tw.div`
  w-full flex-1 flex items-center pl-4 max-w-[87.5rem] mx-auto
  lg:(pl-[4.5rem] w-[80%])
`;

export const Text = styled.p`
  ${tw`text-black font-made uppercase font-light  text-2xl leading-[1.875rem]
       md:(text-[2rem] leading-[2.5rem])
  `}
  span {
    ${tw` text-brightOrange`}
  }
`;
