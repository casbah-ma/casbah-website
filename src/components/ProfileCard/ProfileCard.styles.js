import tw from "twin.macro";


export const imagesSize = tw`w-full h-[20.125rem] bg-cover object-cover
                             md:(w-[20.125rem] h-[20.125rem])
                             lg:(w-[25.188rem] h-[25.188rem])`

export const CardWrapper = tw.div`w-full flex flex-col justify-start items-start gap-6 pb-6 border-b border-darkBlue
                                   md:max-w-[20.125rem] lg:max-w-[25.188rem] ` ;


export const CardInfo = tw.div`w-full flex flex-col justify-between items-start gap-2`
export const CardTitle = tw.h3`font-made text-2xl font-light text-darkBlue uppercase`;
export const CardText = tw.p`font-made text-sm font-light text-darkBlue text-opacity-50 uppercase`;
