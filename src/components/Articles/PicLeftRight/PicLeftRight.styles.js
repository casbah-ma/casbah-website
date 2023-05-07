import styled from "styled-components";
import tw from "twin.macro";

export const imageVariants = {
  v1: tw`(w-full h-[14.5rem] 
        md:(!h-[19.938rem])
        lg:(!w-[38.25rem]))`,
  v2: tw`(w-full h-[19.375rem]
    md:(!h-[19.938rem])
    lg:(!w-[38.25rem]) !h-[21.875rem])`,
  v3: tw`(w-full h-[19.375rem]
    md:(!h-[19.938rem])
    lg:(!w-[38.25rem]) !h-[21.875rem])`,
  v4: tw`w-full h-[14.75rem]
    md:(!h-[17.563rem])
    lg:(!w-[44.813rem] !h-[21.938rem])`,
};

export const versions = {
  // Version 1
  v1: tw`
    // update text container
    [&>section]:(w-[95%] gap-[1.875rem] [&>div]:(w-full max-w-[16.438rem] self-end)
        md:(!gap-[2.125rem] max-w-[80%] self-end [&>div]:max-w-full)
        lg:(!max-w-[38.25rem] !ml-0 !gap-10))
    lg:flex-row`,
  // Version 2
  v2: tw`
    // update text container
    [&>section]:(w-[95%] gap-[1.875rem] [&>div]:(w-full max-w-[19.5rem] self-end)
        md:(!w-full !gap-[2.125rem] [&>div]:max-w-full)
        lg:(max-w-[38.25rem] !gap-10))
    lg:flex-row`,
  //  Version 3
  v3: tw`
    // update text container
    [&>section]:(w-[95%] gap-[1.875rem] [&>div]:(w-full max-w-[19.5rem] self-end)
        md:(!w-full !gap-[2.125rem] [&>div]:max-w-full)
        lg:(!max-w-[38.25rem] !gap-10))
    lg:flex-row-reverse`,
  // Version 4
  v4: tw`
  [&>section]:(w-[95%] gap-[1.875rem] [&>div]:(w-full max-w-[19.5rem] self-end)
        md:(!w-full !gap-[2.125rem] [&>div]:max-w-full)
        lg:(max-w-[38.25rem] !gap-10))
    lg:flex-row`,
};

export const StyledPicLeft = styled.div`
  ${tw`w-full flex flex-col justify-start items-start gap-8`};
  // variant
  ${({ variant }) => versions[variant]}
`;

export const StyledText = tw.section`flex flex-col justify-start items-start`;

export const StyledArticle = tw.div`w-full flex flex-col gap-3`;
