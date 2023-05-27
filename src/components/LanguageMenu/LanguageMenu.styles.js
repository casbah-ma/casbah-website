import { Menu } from '@headlessui/react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Button = styled(Menu.Button)`
  ${tw`relative  inline-flex justify-center items-center gap-1.5 text-lg font-bold capitalize
  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
  span {
    ${tw`shrink-0`}
  }
`;

export const List = styled(Menu.Items)`
  ${tw`w-[7.188rem] flex flex-col justify-center items-center mt-2 
    absolute left-1/2 -translate-x-1/2 shadow-2xl rounded-md
      bg-white ring-black  ring-opacity-5 focus:outline-none`}
`;

export const ListItem = styled.li(({ active }) => [
  tw`w-full flex justify-center items-center cursor-pointer  py-2  rounded
  text-center text-base  text-[#151B18] font-light uppercase`,
  active && tw`text-brightOrange`,
]);

export const ToggleButton = styled.div(({ open }) => [
  !open && tw`transform transition-transform duration-500 `,
  open && tw`transform transition-transform duration-500 rotate-180`,
]);
