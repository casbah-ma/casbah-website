import tw, { styled } from 'twin.macro';

export const Wrapper = tw.div`
w-full h-full flex justify-center items-center
`;

export const LottierContainer = styled.div(({ isLogo }) => [
  tw`w-full h-full`,
  isLogo && tw`w-[832px] h-[93px] self-center`,
]);
