import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div(({ withLine, isVertical, isSplited }) => [
  tw`w-full flex flex-col gap-6 [&>p]:(self-end w-[76%])
     md:(gap-[3.438rem])
     lg:(flex-row justify-between items-start gap-[10.688rem] [&>p]:(self-start flex-1))`,
  withLine && tw`border-b-2 border-darkBlue pb-8 lg:pb-[1.125rem]`,
  isVertical &&
    tw`[&>p]:w-full md:gap-6 
    lg:(flex-col gap-10 [&>p]:(self-start max-w-[70%]))`,
  isSplited &&
    tw`md:([&>p]:(self-end w-full)) lg:(flex flex-col gap-14 [&>h1]:max-w-[80%] [&>p]:(self-end w-[60%]))`,
]);
