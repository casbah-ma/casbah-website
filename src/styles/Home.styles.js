import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`h-screen absolute inset-0 overflow-y-scroll`}
  scroll-snap-type: y mandatory;
`;

export const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
`;
