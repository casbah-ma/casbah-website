import styled from 'styled-components';
import tw from 'twin.macro';

export const directions = {
  v1: tw` flex-col gap-8 
          lg:(flex-row gap-[8.438rem] items-start)`,
  v2: tw`flex-col gap-8 items-start 
             md:items-start lg:gap-11`,
  v3: tw`flex-col gap-8 items-start 
             md:items-start lg:gap-10`,
};
const textDirections = {
  v1: tw`w-[80%] last:self-end lg:w-full`,
  v2: tw`w-full pl-10 last:self-end md:(pl-0 w-full)`,
  v3: tw`w-full pl-10 md:pl-0  md:w-full`,
};
export const imageDirections = {
  v1: tw`w-full h-[19.375rem] lg:h-[24.563rem]`,
  v2: tw`w-[86%] h-[16rem] md:(w-full h-[17.563rem]) lg:h-[21.938rem]`,
  v3: tw`w-[86%] h-[16rem] md:(w-full h-[17.563rem]) lg:h-[21.938rem]`,
};

export const Wrapper = tw.div`
  w-full flex flex-col gap-8 
  lg:gap-10 
`;

export const Content = styled.div(() => [
  tw`flex w-full`,
  ({ variant }) => directions[variant],
]);

export const Texts = styled.div(() => [
  tw`flex flex-col gap-3 lg:gap-4`,
  ({ variant }) => textDirections[variant],
]);
