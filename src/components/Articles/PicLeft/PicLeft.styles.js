import styled from "styled-components";
import tw from "twin.macro";

export const versions = {
  // Version 1
  v1: tw`
    // udate image size
    [&>img]:(w-full h-[14.5rem] 
        md:(!h-[19.938rem])
        lg:(!w-[38.25rem]))
    // update text container
    [&>div]:(w-[95%] gap-[1.875rem] [&>p]:(w-full max-w-[16.438rem] self-end)
        md:(!w-[30.75rem] !gap-[2.125rem] ml-[10.563rem] [&>p]:max-w-full)
        lg:(!w-[38.25rem] !ml-0 !gap-10))
    lg:flex-row`,
  // Version 2
  v2: tw`
    // udate image size
    [&>img]:(w-full h-[19.375rem] 
    md:(!h-[19.938rem])
    lg:(!w-[38.25rem]) !h-[21.875rem])
    // update text container
    [&>div]:(w-[95%] gap-[1.875rem] [&>p]:(w-full max-w-[19.5rem] self-end)
    md:(!w-[30.75rem] !gap-[2.125rem] [&>p]:max-w-full)
    lg:(!w-[38.25rem] !gap-10))
    lg:flex-row`,
};

export const StyledPicLeft = styled.div`
  ${tw`w-full flex flex-col justify-start items-start gap-8`};
  // variant
  ${({ variant }) => versions[variant]}
`;

export const StyledImg = tw.img`self-start object-cover object-center`;

export const StyledText = tw.div`flex flex-col justify-start items-start`;
