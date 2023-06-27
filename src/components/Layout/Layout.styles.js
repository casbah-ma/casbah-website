import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = tw.div`
 min-h-screen flex flex-col justify-between items-center [&>footer]:z-50 px-[2.5rem]  xl:px-[4.5rem]
`;

export const MainWrapper = styled.main`
  ${tw`w-full flex-1 flex flex-col justify-center items-center pt-[5.563rem]
                                   md:(pt-0 )`}
  // if isNotFound pt-0
    ${({ isNotFound }) => isNotFound && tw`!pt-0`}
`;
