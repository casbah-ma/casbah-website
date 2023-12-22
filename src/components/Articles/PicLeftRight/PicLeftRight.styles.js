import styled from 'styled-components';
import tw from 'twin.macro';

export const imageVariants = {
  v1: tw`w-full h-[13rem]
    md:(!h-[20.5rem])
    lg:(!w-[38.25rem] !h-[24.5rem])`,
  v2: tw`w-full h-[13rem]
    md:(!h-[20.5rem])
    lg:(!w-[38.25rem] !h-[24.5rem])`,
  v3: tw`(w-full h-[19.375rem]
    md:(!h-[19.938rem])
    lg:(!w-[38.25rem]) !h-[21.875rem])`,
  v4: tw`w-full h-[14.75rem]
    md:(!h-[17.563rem])
    lg:(!w-[44.813rem] !h-[21.938rem])`,
  v5: tw`w-full h-[13rem]
    md:(!h-[20.5rem])
    lg:(!w-[38.25rem] !h-[24.5rem])`,
  v6: tw`(w-full h-[19.375rem]
    md:(!h-[19.938rem])
    lg:(!w-[38.25rem]) !h-[21.875rem])`,
};

export const versions = {
  // Version 1
  v1: tw`
    // update text container
    [&>section]:(w-[95%] gap-6 [&>div]:(w-full max-w-[16.438rem] self-end)
        md:( max-w-[80%] self-center [&>div]:max-w-full)
        lg:(!max-w-[38.25rem] !ml-0 ))
    lg:flex-row`,
  // Version 2
  v2: tw`
    // update text container
    [&>section]:(w-[95%] gap-6 [&>div]:(w-full max-w-[16.438rem] self-end)
        md:( max-w-[80%] self-center [&>div]:max-w-full)
        lg:(!max-w-[38.25rem] !ml-0 ))
    lg:flex-row-reverse`,
  //  Version 3
  v3: tw`
    // update text container
    [&>section]:(w-[95%] gap-6 [&>div]:(w-full pl-10 self-end)
        md:(!w-full  [&>div]:pl-0)
        lg:(!max-w-[38.25rem] ))
    lg:flex-row-reverse`,
  // Version 4
  v4: tw`
  [&>section]:(w-[95%] gap-6 [&>div]:(w-full pl-10 self-end)
        md:(!w-full  [&>div]:pl-0)
        lg:(max-w-[38.25rem] ))
    lg:flex-row`,
  //Version 5
  v5: tw`
  [&>section]:(w-[95%] gap-6 [&>div]:(w-full pl-10 self-end)
        md:(!w-full )
        lg:(max-w-[38.25rem] [&>div]:pl-0))
    lg:flex-row`,
  v6: tw`
    // update text container
    [&>section]:(w-[95%] gap-6 [&>div]:(w-full pl-10 self-end)
        md:(!w-full  [&>div]:pl-[13.188rem])
        lg:(!max-w-[38.25rem] [&>div]:!pl-0))
    lg:flex-row-reverse`,
};

export const StyledPicLeft = styled.div`
  ${tw`w-full flex flex-col justify-start items-start gap-8`};
  // variant
  ${({ variant }) => versions[variant]}
`;

export const StyledText = tw.section`flex flex-col justify-start items-start`;

export const StyledArticle = tw.div`w-full flex flex-col`;
