import styled from "styled-components";
import tw from "twin.macro";

export const sizes = {
  md: tw`text-base md:text-lg lg:text-2xl`,
  lg: tw`text-2xl lg:(text-[2rem] leading-[2.5rem])`,
};

export const SpecialStyle = styled.p`
  ${tw`w-full font-mako font-normal text-base md:text-lg lg:text-2xl
    text-darkBlue [&>span]:text-brightOrange`};
  ${({ size }) => sizes[size]}
  ${({ uppercase }) => uppercase && tw`uppercase`}
`;
