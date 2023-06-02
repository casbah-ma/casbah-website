import tw from 'twin.macro';

export const Wrapper = tw.div`w-full flex flex-col gap-16`;

export const BlogContent = tw.div`w-full flex flex-col md:max-w-[38.188rem] lg:(max-w-[58.813rem])  self-end gap-20`;

export const BlogStepsWrapper = tw.div`flex flex-col items-center justify-center w-full h-full space-y-8 `;

export const BlogStep = tw.div`w-full bg-red bg-opacity-10 py-8 px-9 border-l border-solid border-black flex gap-14`;

export const BlogNumber = tw.div`font-made font-bold text-[2rem]`;
