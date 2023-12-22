import tw from 'twin.macro';

export const imageSize = tw`w-[21.813rem] h-[2.356rem] md:(w-[18.938rem] h-[2.05rem]) lg:(w-[12.438rem] h-[1.344rem])`;
export const socialSize = tw`w-[1.713rem] h-[1.713rem]
                            md:(w-[1.477rem] h-[1.477rem])
                            lg:(w-8 h-8)`;

export const FooterWrapper = tw.footer`
  w-full  bg-deepBlue flex flex-col justify-start items-start -z-20 relative
  gap-20 lg:(justify-center items-center) 
   [scroll-snap-align: start]`;

export const FooterContainer = tw.div`w-full h-full flex flex-col justify-start items-start z-30  text-white
                                        pt-[6.188rem] pl-4 gap-[3.666rem] 
                                        md:(px-[2.313rem] pt-[3.375rem] )
                                        lg:(flex-row pl-[4.5rem]  max-w-[87.5rem] gap-[17rem])
                              
                                       `;
export const FooterTerms = tw.div`w-full h-full flex flex-col justify-start items-start z-30  text-white
                                         pl-4 gap-[3.666rem] pb-16
                                        md:(px-[2.313rem] pb-20)
                                        lg:(flex-row px-[4.5rem]  max-w-[87.5rem] gap-[10rem])
                           
                                       `;

export const FooterLabel = tw.label`font-made font-light text-white text-opacity-50 uppercase`;
export const EmailText = tw.p`font-mako text-base cursor-pointer`;
export const SocialWrapper = tw.div`w-full flex justify-start items-start gap-[3rem]
                                  md:(gap-[13.313rem])
                                  lg:(gap-[13.375rem])`;

export const SocialItem = tw.div`w-full flex flex-col gap-4`;

export const SocialLinks = tw.div`w-full flex flex-col gap-2 capitalize font-mako
                                  lg:(mt-0 grid grid-cols-2 self-center [grid-row-gap: 0.5rem] [grid-column-gap: 6rem] )`;

export const AddressWrapper = tw.div`w-full flex flex-col  gap-4`;
export const Address = tw.div`w-full flex gap-[3rem] md:(gap-[12.6rem]) lg:(gap-[4rem])`;

export const AddressName = tw.h2`uppercase font-made font-light text-sm`;
export const AddressItem = tw.div`w-full flex flex-col gap-4`;

export const AddressText = tw.p`max-w-[8.375rem] md:max-w-max lg:max-w-[13.063rem] font-mako text-sm`;

export const TermsWrapper = tw.div`w-fit flex flex-col gap-4 justify-between md:(flex-row gap-[11.5rem]) lg:(gap-[9.9rem])`;

export const TermsItem = tw.p`font-mako font-normal text-base capitalize`;


export const FooterToast =  tw.div`absolute -bottom-[100%] w-[12.9375rem] h-[2.5rem] px-3  py-7 font-mako text-sm font-normal bg-white flex justify-center items-center gap-1 rounded-lg transition-all duration-1000 ease-in-out [animation: smooth-appear 1s ease forwards]`