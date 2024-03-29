import tw from 'twin.macro';

export const imagesSize = tw` w-full h-[14.125rem] md:(h-[30rem])`;

export const AboutWrapper = tw.section`w-full flex flex-col gap-10 [&>div]:[&>img]:(!object-contain [object-position: 0 10%]) md:[&>div]:[&>img]:!object-cover`;

export const AboutContent = tw.div`w-full self-end flex flex-col gap-16 md:(gap-12 max-w-[68%]) lg:gap-[5rem]`;

export const ExtraContent = tw.div`w-full flex flex-col gap-4 lg:flex-row`;
