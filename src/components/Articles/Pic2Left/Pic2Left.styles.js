import tw from "twin.macro";

export const Wrapper = tw.div`
  flex w-full flex-col gap-6 items-start pt-[7.563rem]
  md:(pt-[10.438rem] gap-8) lg:(pt-[9.313rem] flex-row gap-[8.75rem])
`;

export const Content = tw.div`
  flex flex-col w-full  gap-6
  md:(gap-8 self-end w-[80%] )
  lg:(w-full self-start  gap-10 mt-16)
  `;

export const Texts = tw.div`
   flex w-full flex-col gap-3  lg:gap-4
 `;

export const imagesSize = {
  lg: tw`w-[14.813rem] h-[14.813rem] md:(w-[20.375rem] h-[20.375rem]) 
          lg:(w-[18.125rem] h-[18.125rem])`,
  md: tw`w-[7.563rem] h-[7.563rem] md:(w-[10.438rem] h-[10.438rem]) 
         lg:(w-[9.313rem] h-[9.313rem])`,
};

export const ImagesWrapper = tw.div`
  relative inline-block
`;

export const MeduimImage = tw.div`
  absolute left-full bottom-full
`;
