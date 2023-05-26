import styled from 'styled-components';
import tw from 'twin.macro';

export const imagesSizes = {
  v1: tw`w-full h-[19.375rem] md:h-[15.625rem] lg:h-[22.875rem]`,
  v2: tw`w-full h-[32.75rem] md:(h-[23.25rem]) lg:(h-[32.3755rem])`,
  v3: tw`w-full h-[24.688rem] lg:h-[47.25rem]
`,
};

export const versions = {
  v1: tw`w-full col-span-1`,
  v2: tw`w-full gap-4 pb-4 
         md:(col-span-2 gap-6 pb-10 mb-2) 
         lg:(gap-12 pb-8 mb-0)`,
  v3: tw`w-full`,
};

export const CardWrapper = styled.div`
  ${tw`flex flex-col justify-center items-center gap-6 cursor-pointer relative pb-6 border-b border-solid border-darkBlue`}
  // variant
  ${({ variant }) => versions[variant]}
  :nth-child(2n-2) {
    ${({ variant }) =>
      variant === 'v3' && tw`relative md:top-[9.875rem] lg:top-[17.188rem]`}
  }
`;

export const CardInfo = tw.div`w-full flex flex-col justify-center items-start gap-4`;

export const CardTitle = tw.h3`text-black font-made uppercase font-light text-lg md:leading-[166.02%]`;

export const CardTags = tw.div`flex justify-start items-start gap-2 absolute top-4 left-4 z-10
                               lg:(top-6 left-6)`;
