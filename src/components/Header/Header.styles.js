import tw, { styled } from "twin.macro";

export const Wrapper = styled.div(({ withLine }) => [
  tw`w-full flex flex-col gap-6 [&>p]:(self-end w-[76%])
     md:(gap-[3.438rem] )
     lg:(flex-row justify-between items-start gap-[10.688rem] [&>p]:(self-start w-full))`,
  withLine && tw`border-b-2 border-darkBlue pb-8 lg:pb-[1.125rem]`,
]);
