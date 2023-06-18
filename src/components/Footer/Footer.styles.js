import tw from 'twin.macro';

export const imageSize = tw`w-[10.563rem] h-[1.143rem] lg:(w-[258px] h-[1.744rem])`;
export const socialSize = tw`w-[1.713rem] h-[1.713rem]
                            md:(w-[1.477rem] h-[1.477rem])
                            lg:(w-8 h-8)`;

export const FooterWrapper = tw.footer`w-full h-[47rem] bg-deepBlue p-4 pt-6 flex flex-col justify-center items-center -z-20
                                        md:(h-[29.438rem] )
                                        lg:(h-[37.5rem])`;

export const FooterContainer = tw.div`w-full p-0 flex flex-col md:flex-row justify-center items-center z-30`;

export const FooterCol = tw.div`w-full flex flex-col self-start md:(-mr-[1px] self-end w-fit)`;

export const FooterLogo = tw.div`w-full h-[5.313rem] border border-solid border-white 
                                flex justify-center items-center py-8 px-10
                                md:(w-[14.75rem] h-[6rem] py-7 px-8 self-end)
                                lg:(w-[37.125rem] h-[6.75rem])`;
export const SocialWrapper = tw.div`w-full h-fit md:w-fit flex flex-col md:self-end lg:(flex-row)`;
export const FooterSocial = tw.label`-mt-[1px] w-[95%] h-[4.688rem] sm:w-[20.9rem] font-made font-light 
                                    uppercase text-2xl text-white border  border-solid border-white 
                                    flex justify-center items-center
                                    md:(w-[17.438rem] h-[4rem] py-7 px-8 self-end)
                                    lg:(w-[12.313rem] h-[7.688rem] )`;

export const FooterSocialItems = tw.div`-mt-[1px] lg:-ml-[1px] w-fit h-[4rem] sm:h-[5.05rem] font-made 
                                        font-light uppercase text-2xl text-white 
                                        border border-solid border-white flex flex-wrap 
                                        divide-x divide-white
                                        md:(h-[4.5rem] self-end)
                                        lg:(h-[7.688rem])`;
export const SocialItem = tw.div`xs:w-[3.88rem] sm:w-[5.05rem] md:w-[4.5rem] lg:w-[7.688rem] h-full 
                                    flex justify-center items-center 
                                    transition duration-300 ease-in-out cursor-pointer
                                    hover:(bg-grayIsh [&>div]:scale-150) 
                                    border-solid border-white`;

export const FooterTerms = tw.div`w-full -mt-[1px]
                                flex flex-col justify-start items-start
                                md:(flex-row w-[38.938rem] h-[3.688rem] border 
                                border-solid border-white justify-between items-center px-9) 
                                lg:(w-[71.938rem] mr-10)`;
export const FooterCopyright = tw.div`w-full text-xs px-2 font-mako font-normal text-white 
                                    flex justify-center items-center
                                    border border-solid border-white py-4 -mr-2
                                    sm:(w-[21.313rem] self-end text-sm px-3)
                                    md:(w-fit self-auto text-base border-0)`;
export const FooterTermsItem = tw.div`-mt-[1px] w-full text-xs gap-8 px-8 font-mako font-normal text-white 
                                    flex justify-center items-center
                                    border border-solid border-white py-4 -mr-2 
                                    [&>a]:(underline underline-offset-4 cursor-pointer)
                                    sm:(w-[21.313rem] self-start text-sm px-8)
                                    md:(w-fit self-auto text-base border-0 gap-8 px-5)
                                    lg:(mr-6 gap-10)`;

export const FooterNavigation = tw.div`w-full h-[18.063rem] border border-solid border-white text-white
                                        self-end -mt-[1px] flex flex-col justify-center items-center
                                        transition-all duration-700 ease-in-out gap-3
                                        md:(w-[24rem] h-[18.063rem] gap-2 border-l-0) 
                                        lg:(w-[38.25rem] h-[21.188rem] pl-[11.375rem] gap-6)`;

export const FooterNavigationTitle = tw.h2`font-made font-light text-xl sm:text-2xl uppercase self-center lg:self-start`;

export const LinksWrapper = tw.nav`grid grid-cols-2 self-center [grid-gap: 1rem] sm:([grid-gap: 2rem] self-center)  lg:self-start
`;

export const LinkLabel = tw.div`
    text-white lg:text-base text-lg leading-[1.257rem] capitalize font-made
    cursor-pointer hover:(text-brightOrange)
    py-1.5 md:py-2 lg:(pl-0 py-2)`;

export const LinksCol = tw.div`col-span-1 flex flex-col`;
export const SubLink = tw.div`font-made font-light text-sm capitalize
                                cursor-pointer hover:(text-brightOrange font-bold)`;
