import tw, { styled } from 'twin.macro';

export const variants = {
  left: tw`lg:items-start`,
  right: tw`lg:items-end`,
};

export const Wrapper = styled.div(() => [
  tw`w-full h-screen flex flex-col gap-10 px-4 justify-start items-start md:gap-36 
  lg:(gap-14)`,
  ({ variant }) => variants[variant],
]);

export const Subtitle = tw.span`
 text-2xl leading-[1.875rem] uppercase text-brightOrange block
`;

export const Content = tw.div`
  flex flex-col w-full gap-4
  lg:(w-1/2 gap-6)
  `;

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;
