import tw from "twin.macro";

export const Wrapper = tw.div`
  flex w-full flex-col gap-6 items-end pt-[4.688rem]
  md:pt-[7.313rem] md:gap-8 lg:pt-[7.5rem] lg:flex-row-reverse lg:gap-[13rem] 
`;

export const Content = tw.div`
  flex flex-col w-full gap-7
  md:self-start md:gap-[2.125rem] md:items-start
  lg:w-full lg:items-start lg:gap-10 
  `;

export const Texts = tw.div`
   flex w-[84%] self-end flex-col gap-3 md:w-full lg:gap-4
 `;

export const imagesSize = {
  lg: tw`w-[12.875rem] h-[12.9rem] md:w-[20.063rem] md:h-[20.063rem] 
          lg:w-[20.563rem] lg:h-[20.563rem]`,
  md: tw`w-[4.688rem] h-[4.688rem] md:w-[7.313rem] md:h-[7.313rem] 
         lg:w-[7.5rem] lg:h-[7.5rem]`,
  sm: tw`w-[2.188rem] h-[2.313rem] md:w-[3.438rem] md:h-[3.438rem] 
         lg:w-[3.563] lg:h-[3.563]`,
};

export const ImagesWrapper = tw.div`
  relative inline-block
`;

export const MeduimImage = tw.div`
  absolute right-full bottom-full
`;

export const SmallImage = tw.div`
  absolute right-full top-full
`;
