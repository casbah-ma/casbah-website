import styled from 'styled-components';
import tw from 'twin.macro';

export const InputWrapper = tw.div`w-full flex flex-col`;

export const InputLabel = tw.label`text-base text-darkBlue text-opacity-50 font-normal font-inter capitalize`;

export const StyledInput = styled.input`
  ${tw`w-full outline-none py-2.5 border-b-2 border-solid 
        font-made text-lg md:text-[2rem] font-light  uppercase
        placeholder:(text-lg md:text-2xl capitalize  text-darkBlue text-opacity-50)
        focus:border-deepBlue`}
  ${({ value }) => value && tw`border-deepBlue`}
`;
