import tw from 'twin.macro';

export const Wrapper = tw.div`
 min-h-screen flex flex-col justify-between items-center gap-10 [&>footer]:z-50
`;

export const MainWrapper = tw.main`w-full flex flex-col justify-center items-center pt-[5.563rem] px-4
                                   md:(pt-[4rem] px-10)
                                   lg:( px-[4.5rem])`;

