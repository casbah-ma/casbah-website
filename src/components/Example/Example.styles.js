import styled from 'styled-components';
import tw from 'twin.macro';

export const ExampleStyled = styled.div`
  ${tw`w-40 h-32 border-2 border-solid border-gray-900 
    rounded-xl flex justify-center items-center cursor-pointer bg-amber-200`};
  &:hover {
    ${tw`bg-amber-400`};
  }
  // change background color if bgColor prop not empty
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  // change color if color prop not empty
    ${({ color }) => color && `color: ${color};`}
`;
