import tw from 'twin.macro';

export const imagesSize = tw`w-[14.716rem] h-[8.167rem]
                            md:(w-[27.173rem] h-[15.079rem]) 
                            lg:(w-[50.984rem] h-[28.294rem])`;

export const imageSize = tw` w-full h-[17.625rem]
                            md:(h-[20.813rem])
                            lg:(h-[28.313rem])`;

export const Wrapper = tw.div`w-full flex flex-col gap-28`;

export const BlogTitle = tw.div`w-full lg:max-w-[54.688rem]`;

export const BlogContent = tw.div`w-full flex flex-col justify-start items-start md:max-w-[38.188rem] lg:(max-w-[51.813rem])  self-end gap-5 [&>div]:mt-10`;

export const BlogQuote = tw.div`w-full bg-gray py-8 px-9 border-l border-solid border-black`;

export const SwiperWrapper = tw.div`w-full`;
