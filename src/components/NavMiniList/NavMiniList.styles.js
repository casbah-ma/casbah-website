import tw, { styled } from "twin.macro";

export const DropdownContainer = styled.div`
  ${tw`relative`}
`;

export const DropdownButton = styled.div`
  ${tw`text-black text-base font-light leading-[1.257rem] capitalize font-made
  flex flex-row items-center cursor-pointer gap-[0.5rem]
  `}
`;

export const DropdownList = styled.ul`
  ${tw`absolute z-10 p-4 mt-4 bg-white flex flex-col items-start gap-[1.5rem] right-0`}
`;

export const DropdownItem = styled.li`
  ${tw`text-[#151B1870] text-base font-light leading-[1.257rem] uppercase font-made`}
  ${({ active }) => active && tw`text-[#FF5100] font-bold leading-[1.276rem]`}
`;

export const ToggleButton = styled.div(({ open }) => [
  !open && tw`transform transition-transform duration-500 `,
  open && tw`transform transition-transform duration-500 rotate-180`,
]);
