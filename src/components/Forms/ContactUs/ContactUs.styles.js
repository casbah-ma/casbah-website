import tw from "twin.macro";

export const Wrapper = tw.section`w-full flex flex-col gap-14
                        md:(gap-12 [&>h1]:!text-[2.5rem])
                        lg:(gap-10 [&>h1]:!text-[3.5rem])`

export const ContactForm = tw.form`w-full flex flex-col gap-8`


export const Button = tw.button`border-deepBlue text-deepBlue text-base font-made font-bold uppercase py-3.5 px-8 rounded-md border`

