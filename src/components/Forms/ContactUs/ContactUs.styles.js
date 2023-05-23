import tw from "twin.macro";

export const Wrapper = tw.section`w-full flex flex-col gap-14
                        md:(gap-12 [&>h1]:!text-[2.5rem])
                        lg:(gap-10 [&>h1]:!text-[3.5rem])`

export const ContactForm = tw.form`w-full flex flex-col gap-8 
                                   [&>button]:(w-full md:w-[19.563rem] mt-3)`


