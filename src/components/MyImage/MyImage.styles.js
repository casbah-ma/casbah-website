import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`relative w-full overflow-hidden`}
  ${({ sizes }) => sizes};
`;
