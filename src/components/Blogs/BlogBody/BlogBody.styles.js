import tw from 'twin.macro';

export const BodyWrapper = tw.section`w-full flex flex-col gap-12
                            [&>h1]:(font-made font-light text-[2rem] w-full lg:max-w-[54.688rem])
                            [&>blockquote]:(w-full bg-gray py-8 px-9 border-l border-solid italic border-black md:max-w-[38.188rem] lg:(max-w-[51.813rem])  self-end gap-5 [&>div]:mt-10)
                            [&>p]:(w-full flex flex-col justify-start items-start md:max-w-[38.188rem] lg:(max-w-[51.813rem])  self-end gap-5 [&>div]:mt-10)  
                            [&>img]:(w-full h-[8.167rem] object-cover
                                md:(!h-[15.079rem]) 
                                lg:(!h-[28.294rem]))
                            [&>ol]:(w-full flex flex-col md:max-w-[38.188rem] lg:(max-w-[51.813rem])  self-end gap-5

                                [&>li]:([counter-increment: items] flex justify-center items-start before:(font-made font-bold text-[2rem] uppercase) gap-10))                        
`;

export const BodyContent = tw.div`w-full`;

export const PrivacyWrapper = tw.section`w-full pt-24 mt-10
                            flex flex-col gap-12
                            [&>h1]:(font-made font-light text-[2rem] w-full lg:max-w-[54.688rem])
                            [&>h2]:(font-made font-light text-xl w-full lg:max-w-[54.688rem])
                            [&>blockquote]:(w-full bg-gray py-8 px-9 border-l border-solid italic border-black md:max-w-[38.188rem] lg:(max-w-[51.813rem])  gap-5 [&>div]:mt-10)
                            [&>p]:(font-mako w-full flex flex-col justify-start items-start md:max-w-[38.188rem] lg:(max-w-[51.813rem])  gap-5 [&>div]:mt-10)  
                            [&>img]:(w-full h-[8.167rem] object-cover
                                md:(!h-[15.079rem]) 
                                lg:(!h-[28.294rem]))
                            [&>ol]:(w-full flex flex-col  gap-5
                            [&>li]:([counter-increment: items] font-mako flex justify-start items-center before:(font-made font-bold text-xl uppercase) gap-10))                        
`;
