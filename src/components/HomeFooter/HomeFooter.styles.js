import tw, { styled } from 'twin.macro';

export const Wrapper = tw.div`
  w-full min-h-screen flex flex-col items-start gap-32 justify-end z-20 bg-white
`;

export const Text = styled.p`
  ${tw`pl-[4.5rem] w-[80%] max-w-[87.5rem] mx-auto text-black font-made uppercase font-light  text-2xl 
  leading-[1.875rem] md:text-[2rem] md:leading-[2.5rem]`}
  span {
    ${tw`text-brightOrange`}
  }
`;
