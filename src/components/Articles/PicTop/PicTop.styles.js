import styled from 'styled-components';
import tw from 'twin.macro';

export const directions = {
  row: tw` flex-col gap-8 
          lg:flex-row lg:gap-[8.438rem] lg:items-start`,
  column: tw`flex-col gap-8 items-start 
             md:items-start lg:gap-11`,
};
const textDirections = {
  row: tw`w-[80%] last:self-end lg:w-full`,
  column: tw`w-full pl-10 md:pl-0 last:self-end md:w-full `,
};
export const imageDirections = {
  row: tw`w-full h-[19.375rem] lg:h-[24.563rem]`,
  column: tw`w-[86%] h-[16rem] md:w-full md:h-[17.563rem] lg:h-[21.938rem]`,
};

export const Wrapper = tw.div`
  w-full flex flex-col gap-8 
  lg:gap-10
`;

export const Content = styled.div(() => [
  tw`flex w-full`,
  ({ direction }) => directions[direction],
]);

export const Texts = styled.div(() => [
  tw`flex flex-col gap-3 lg:gap-4`,
  ({ direction }) => textDirections[direction],
]);
