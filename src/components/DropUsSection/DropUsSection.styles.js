import tw from "twin.macro";

export const Wrapper = tw.section`w-full flex flex-col gap-14`;

export const Header = tw.div`w-full flex flex-col gap-8 lg:gap-12`;

export const HeaderTitle = tw.div`w-full flex flex-col justify-start items-start gap-8
                            md:(flex-row [&>hr]:(flex-1 self-center))`;

export const HeaderLine = tw.hr`self-end border-4 border-solid border-black w-[80%]`;

export const InfoSection = tw.div`w-full flex flex-col  gap-8 
                                md:(flex-row flex-wrap gap-x-[7.438rem]) lg:(flex-nowrap gap-[9.938rem])`;

export const InfoWrapper = tw.div`w-fit max-w-[32rem] flex flex-col gap-[0.554rem] first:shrink-0 `;
export const InfoTile = tw.h1`font-made font-light text-2xl capitalize `;
export const InfoLabel = tw.span`font-made font-light text-base uppercase`;
