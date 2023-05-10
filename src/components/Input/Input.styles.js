import tw from "twin.macro";

export const InputWrapper = tw.div`w-full flex flex-col gap-2`

export const InputLabel = tw.label`text-base text-darkBlue text-opacity-50 font-normal font-inter capitalize`

export const StyledInput = tw.input`w-full outline-none py-2.5 border-b-2 border-solid 
                                    font-made text-[2rem] font-light  uppercase
                                    placeholder:(text-2xl capitalize  text-darkBlue text-opacity-50)
                                    focus:border-deepBlue`