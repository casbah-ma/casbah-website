import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = tw.div`
 min-h-screen w-full flex flex-col justify-between items-center [&>footer]:z-50  pb-0
 border border-red
`;

export const MainWrapper = styled.main`
  ${tw`w-full flex-1 flex flex-col justify-center items-center pt-[5.563rem]
        md:(pt-0) px-[2.5rem]  lg:px-[4.5rem] `}
  // if isNotFound pt-0
    ${({ isNotFound }) => isNotFound && tw`!pt-0`}
`;
