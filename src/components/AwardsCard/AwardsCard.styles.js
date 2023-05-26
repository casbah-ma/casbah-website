import tw from 'twin.macro';

export const imagesSize = tw`w-[14.375rem] h-[11.375rem] object-cover bg-cover
                             md:(w-[20.125rem] h-[15.875rem])
                             lg:(w-[31.813rem] h-[25rem])`;

export const CardWrapper = tw.div`max-w-[31.813rem] flex flex-col justify-start items-start gap-4 md:gap-6`;

export const CardInfo = tw.div`w-full flex flex-col justify-between items-start gap-2`;
export const CardTitle = tw.h3`font-made text-lg md:text-2xl font-light text-darkBlue uppercase`;
export const CardText = tw.p`font-made text-base font-light text-darkBlue uppercase`;
