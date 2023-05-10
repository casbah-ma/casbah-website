import styled from "styled-components";
import tw from "twin.macro";

export const imagesSizes = {
  v1: tw`w-full h-[19.375rem]
    md:(!w-[20.125rem] !h-[15.625rem])
    lg:(!w-[38.5rem] !h-[22.875rem])`,
  v2: tw`w-full h-[24.688rem]
    md:(!w-[20.125rem])
    lg:(!w-[38.5rem] !h-[47.25rem])
  `,
};

export const versions = {
  v1: tw`w-full 
    md:(!max-w-[20.125rem])
    lg:(!max-w-[38.5rem])
    `,
  v2: tw`w-full
    md:(!max-w-[20.125rem])
    lg:(!max-w-[38.5rem])
    `,
};

export const CardWrapper = styled.div`
  ${tw`flex flex-col justify-center items-center gap-6 cursor-pointer relative pb-6 border-b border-solid border-darkBlue`}
  // variant
    ${({ variant }) => versions[variant]}
`;

export const CardInfo = tw.div`w-full flex flex-col justify-center items-center gap-4`;

export const CardTitle = tw.h3`text-black font-made uppercase font-light text-lg md:leading-[166.02%]`;

export const CardTags = tw.div`flex justify-start items-start gap-2 absolute top-4 left-4 z-10
                               lg:(top-6 left-6)`;


// export const CardDivider = tw.hr`w-full border border-solid border-darkBlue`