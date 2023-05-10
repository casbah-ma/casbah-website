import styled from "styled-components";
import tw from "twin.macro";

export const variants = {
  primary: tw`w-full bg-white border-2 border-black py-4 px-14
              md:(max-w-[15.688rem])
              lg:(max-w-[19.563rem] h-[5.875rem])`,
};
export const StyledBtn = styled.button(() => [
  tw`flex justify-center items-center gap-2 rounded-full
      font-made text-base font-light leading-5`,
  ({ variant }) => variants[variant],
]);
