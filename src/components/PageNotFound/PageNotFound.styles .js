import tw from 'twin.macro';

export const Wrapper = tw.div`w-full h-screen flex flex-col justify-between items-center pt-28 lg:pt-64 text-white `;

export const DivsWrapper = tw.div`w-full flex gap-10 md:gap-[3.83rem] lg:gap-24 bg-white self-start`;
export const StyledDiv = tw.div`w-[3.125rem] h-[3.125rem] bg-brightOrange
md:(w-[3.83rem] h-[3.83rem])
lg:(w-[7.188rem] h-[7.188rem])`;
export const Content = tw.div`w-screen flex-1 flex flex-col justify-center items-center bg-brightOrange -mt-[1px]`;

export const Title = tw.h1`font-made font-light text-[6.188rem] md:text-[6.7rem]`;

export const SubTitle = tw.h2`font-made font-light text-center uppercase
 text-[1.2rem] md:text-[1.7rem] max-w-[17.063rem] md:max-w-[24.938rem]`;
