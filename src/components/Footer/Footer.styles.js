import tw from 'twin.macro';

export const imageSize = tw`w-[8.063rem] h-3.5 lg:(w-[12.125rem] h-[1.313rem])`;
export const socialSize = tw`w-[1.713rem] h-[1.713rem]
                            md:(w-[1.477rem] h-[1.477rem])
                            lg:(w-8 h-8)`;

export const FooterWrapper = tw.footer`
  w-full h-[65.375rem] bg-deepBlue flex flex-col justify-between items-center -z-20 mt-10
   md:(h-[41rem] ) [scroll-snap-align: start]
   lg:(h-[26.688rem])`;

export const FooterContainer = tw.div`w-full h-full flex flex-col  justify-start items-start z-30  text-white
                                        pt-[4.813rem] pl-4 gap-[3.666rem]
                                        md:(px-[2.313rem] pt-[2.625rem] gap-[4.813rem])
                                        lg:(flex-row px-[4.5rem] pt-[2.5rem] max-w-[87.5rem] gap-[15rem])
                                        xl:(gap-[24.625rem])`;

export const FooterTitle = tw.h2`text-lg font-medium font-made text-white uppercase`;

export const FooterInfo = tw.div`w-full lg:max-w-[20.125rem] flex flex-col md:(gap-[1.5rem])`;

export const InfoSection = tw.div`flex flex-col gap-7  md:(flex-row gap-[7.688rem])  lg:(flex-col gap-7)`;

export const Info = tw.div`font-made font-light capitalize max-w-[20.125rem]`;

export const SocialWrapper = tw.div`w-full flex flex-col justify-between items-start  md:(flex-row justify-start gap-[7.688rem]) lg:(gap-[15.373rem] )`;

export const SocialInfo = tw.div`flex self-start flex-col md:(gap-[1.5rem]) `;

export const SocialSection = tw.div`flex flex-col gap-2 md:(flex-none grid grid-cols-2 [grid-gap: 1rem]) lg:(flex flex-col  gap-2) `;

export const FooterNavigation = tw.div`h-[18.063rem]  text-white 
                                        flex flex-col 
                                        transition-all duration-700 ease-in-out gap-3
                                        md:(gap-[1.5rem])`;

export const FooterNavigationTitle = tw.h2`font-made font-light text-xl sm:text-2xl uppercase self-start`;

export const LinksWrapper = tw.nav`mt-0 grid grid-cols-2 self-center [grid-gap: 1rem] sm:([grid-gap: 2rem] self-start)  lg:self-start
`;

export const LinkLabel = tw.div`
    text-white  text-lg lg:text-base leading-[1.257rem] capitalize font-made
    cursor-pointer hover:(text-brightOrange)
    `;

export const LinksCol = tw.div`col-span-1 flex flex-col gap-4`;
export const SubLink = tw.div`font-made font-light text-sm capitalize
                                cursor-pointer hover:(text-brightOrange font-bold)`;

export const TermsSection = tw.div`w-full h-fit flex justify-center items-center border-t border-solid border-white`;

export const CopyrightSection = tw.div`w-full flex h-[10.688rem]  text-white py-6
                                       px-6
                                       md:(h-[7.938rem] px-[2.313rem] bg-deepBlue) 
                                       lg:(h-[5.313rem] flex-row justify-between items-center px-[4.5rem] py-8 max-w-[87.5rem]) `;

export const FooterCopyright = tw.p`font-mako font-normal text-base`;

export const FooterTerms = tw.div`flex gap-[3.125rem] capitalize`;

export const MobileTerms = tw.div`w-full h-full flex flex-col gap-6
                                    md:(flex-row-reverse justify-between items-start)`;
