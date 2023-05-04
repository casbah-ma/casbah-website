import tw, { styled } from "twin.macro";

export const sizes = {
  md: tw`text-base leading-[1.688rem] font-inter`,
  lg: tw`text-lg  leading-[1.875rem] font-mako`,
};
export const StyledP = styled.p(({ color }) => [
  tw`first-letter:uppercase text-black`,
  ({ size }) => sizes[size],
  color && `color: ${color}`,
]);
