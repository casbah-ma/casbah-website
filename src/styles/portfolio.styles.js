import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`w-full h-screen absolute inset-0 overflow-y-scroll`}
  scroll-snap-type: y mandatory;
`;
