import tw, { styled } from "twin.macro";

export const titleLevels = {
  h1: tw`text-[2rem] leading-[107.7%] md:text-[2.5rem]
        lg:(text-[3.5rem] leading-[107.7%]) `,
  h2: tw`text-2xl leading-[1.875rem] md:text-[2rem] md:leading-[2.5rem]`,
  h3: tw`md:text-lg md:leading-[166.02%]`,
};
export const StyledTitle = styled.h1(({ color, withoutBorder }) => [
  tw`text-black font-made uppercase font-light border-l border-brightOrange pl-10
     lg:pl-[6rem]`,
  ({ level }) => titleLevels[level],
  withoutBorder && tw`pl-0 lg:pl-0 border-0`,
  color && `color: ${color}`,
]);
