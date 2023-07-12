import tw from 'twin.macro';

export const Wrapper = tw.div`
  flex w-full flex-col gap-6 items-start pt-[11.25rem]
  md:pt-[11.688rem] lg:pt-[12.5rem] lg:flex-row lg:gap-[10.438rem]
`;

export const Content = tw.div`
  flex flex-col w-full  items-end gap-6
  md:(self-end w-[80%] items-start)
  lg:(w-full items-start )
  `;

export const Texts = tw.div`
   flex w-[84%] flex-col gap-1.5 md:w-full 
 `;

export const imagesSize = {
  lg: tw`w-[14.75rem] h-[14.75rem] md:w-[15.375rem] md:h-[15.375rem] 
          lg:w-[16.438rem] lg:h-[16.438rem]`,
  md: tw`w-[7.563rem] h-[7.563rem] md:w-[7.938rem] md:h-[7.938rem] 
         lg:w-[8.438rem] lg:h-[8.438rem]`,
  sm: tw`w-[3.625rem] h-[3.625rem] md:w-[3.813rem] md:h-[3.813rem] 
         lg:w-16 lg:h-16`,
};

export const ImagesWrapper = tw.div`
  relative inline-block
`;

export const MeduimImage = tw.div`
  absolute left-full bottom-full
`;

export const SmallImage = tw.div`
  absolute right-full bottom-full
`;
