import tw, { styled } from 'twin.macro';
import Paragraph from '../Paragraph';

export const variants = {
  v1: tw`w-[80%] ml-auto 
       md:(w-full pl-[13.188rem]) lg:(w-[60%] pl-0)`,
  v2: tw`lg:w-[56%]`,
};

export const Wrapper = styled.div(() => [
  tw`w-full flex flex-col gap-12 justify-center`,
]);

export const MyParagraph = styled(Paragraph)`
  ${({ variant }) => variants[variant]}
`;
