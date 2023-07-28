import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`w-full h-full flex flex-col items-start gap-32 justify-end  bg-white isolate`};
`;

export const Text = styled.p`
  ${tw`w-full pl-4 text-black font-made uppercase font-light  text-2xl leading-[1.875rem]
  md:(text-[2rem] leading-[2.5rem])
  lg:(pl-[4.5rem] w-[80%] max-w-[87.5rem])`}
  span {
    ${tw`text-brightOrange`}
  }
`;
