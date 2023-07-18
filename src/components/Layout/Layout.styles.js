import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = tw.div`
 min-h-screen w-full flex flex-col justify-between items-center pb-0
 [&>footer]:z-50
`;

export const MainWrapper = styled.main`
  ${tw`w-full max-w-[87.5rem]  flex-1 flex flex-col justify-center items-center pt-[5.563rem] pb-20
        md:(pt-0) px-[2.5rem]  lg:px-[4.5rem] `}
  // if isNotFound pt-0
    ${({ isNotFound }) => isNotFound && tw`!pt-0`}
`;
