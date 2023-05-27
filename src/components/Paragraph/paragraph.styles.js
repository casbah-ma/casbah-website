import tw, { styled } from 'twin.macro';

export const sizes = {
  md: tw`text-base leading-[1.688rem]`,
  lg: tw`text-lg  leading-[1.875rem]`,
};
export const StyledP = styled.p(({ color }) => [
  tw`first-letter:uppercase text-black font-mako font-normal`,
  ({ size }) => sizes[size],
  color && `color: ${color}`,
]);
