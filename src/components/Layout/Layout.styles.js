import tw from 'twin.macro';

export const Wrapper = tw.div`
 min-h-screen flex flex-col justify-between items-center [&>footer]:z-50
`;

export const MainWrapper = tw.main`w-full flex-1 flex flex-col justify-center items-center pt-[5.563rem] px-4
                                   md:(pt-0 px-10)
                                   lg:(px-[4.5rem])`;
