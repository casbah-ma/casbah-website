import tw from 'twin.macro';

export const imagesSize = tw`w-full h-[20.125rem] 
                             md:(w-[22.75rem] h-[27.438rem])
                             lg:(w-[45rem] h-[51.875rem])`;
export const quoteSize = tw`w-[3.875rem] h-[3.875rem] 
                             md:( w-[2.875rem] h-[2.875rem])
                             lg:(w-[7.313rem] h-[7.313rem])`;

export const CardWrapper = tw.div`w-full h-[38rem] col-span-1 bg-deepBlue text-center transition duration-1000 ease-in
                                    flex flex-col-reverse justify-between items-center pt-6 gap-2
                                    md:(flex-row col-span-2 h-[27.438rem] pr-[2.125rem] pt-0 )
                                   lg:(col-span-3 pr-16  h-[51.875rem]) `;

export const CardInfo = tw.div`flex-1 flex flex-col justify-between items-end gap-3.5 px-9 md:px-0`;
export const CardText = tw.h2`font-made  font-normal text-white 
                                md:(w-full text-[1.063rem])
                                lg:(w-[26.063rem] text-[2rem])`;
export const CardMe = tw.div`w-full flex flex-col gap-2
                            md:(mt-[58px] gap-4)
                            lg:(mt-[68px] w-[26.063rem])`;
export const CardName = tw.h3`font-made text-lg md:text-2xl font-light text-white uppercase`;
export const CardPost = tw.p`font-made text-sm font-light text-white text-opacity-50 uppercase`;
