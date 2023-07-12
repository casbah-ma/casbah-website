import tw from 'twin.macro';

export const Wrapper = tw.div`
  flex w-full flex-col gap-6 items-start pt-[7.813rem]
  md:pt-[14.563rem] 
  lg:(pt-[13.375rem] flex-row gap-[21rem] )
`;

export const Content = tw.div`
  flex flex-col w-full gap-6
  md:items-start
  lg:(w-full items-start self-center)
  `;

export const Texts = tw.div`
   flex w-full flex-col gap-1.5 pl-10 md:pl-0 
 `;

export const imagesSize = {
  lg: tw`w-[11.125rem] h-[11.25rem] md:(w-[15.375rem] h-[15.375rem]) 
          lg:(w-[20.938rem] h-[21.125rem])`,
  md: tw`w-[7.813rem] h-[5.438rem] md:(w-[14.563rem] h-[10.063rem]) 
         lg:(w-[13.375rem] h-[9.188rem])`,
  sm: tw`w-[3.25rem] h-[3.313rem] md:(w-[6.188rem] h-[6.313rem]) 
         lg:(w-[5.625rem] h-[5.813rem])`,
  xs: tw`w-[1.125rem] h-[1.125rem] md:(w-[2.063rem] h-[2.125rem]) 
         lg:(w-[1.875rem] h-[1.938rem])`,
};

export const ImagesWrapper = tw.div`
  relative inline-block
`;

export const MeduimImage = tw.div`
  absolute left-full bottom-full
`;

export const SmallImage = tw.div`
  absolute left-full top-full
  after:([content: ''] absolute z-10 left-[20%] top-0 w-1/5 h-2.5 md:h-4 lg:h-5 bg-white)
  before:([content: ''] absolute z-10 left-[60%] top-0 w-1/5 h-2.5 md:h-4 lg:h-5 bg-white)
`;
export const ExtraSmallImage = tw.div`
  absolute flex justify-center items-center right-full top-full w-[1.125rem] h-[1.125rem] 
  md:(w-[2.063rem] h-[2.125rem]) lg:(w-[1.875rem] h-[1.938rem])
`;
