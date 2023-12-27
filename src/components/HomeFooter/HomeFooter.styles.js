import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-center gap-8 isolate bg-white`};
`;

export const Content = tw.div`
 hidden w-full lg:flex flex-col justify-center items-center text-center flex-1
`;

export const Logo = tw.span`
  shrink-0 w-9 h-9
`;

export const TextWrapper = tw.div`
  w-full flex items-center pl-4 max-w-[87.5rem] mx-auto text-center
  lg:(pl-[4.5rem])
`;

export const Text = styled.p`
  ${tw`w-full text-black font-made uppercase font-light text-2xl leading-[1.875rem]
       whitespace-pre-line md:(text-[2rem] leading-[2.5rem]) lg:(text-[3.5rem] leading-[107.7%])
  `}

  span {
    ${tw` text-brightOrange`}
  }
`;
