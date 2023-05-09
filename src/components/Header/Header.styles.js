import tw from "twin.macro";

export const Wrapper = tw.div`
 w-full flex flex-col gap-6
 md:(gap-[3.438rem] [&>p]:(self-end w-[76%]))
 lg:(flex-row justify-between items-start gap-[10.688rem] [&>p]:self-start)
`;
