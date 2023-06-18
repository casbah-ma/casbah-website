import tw, { styled } from 'twin.macro';

export const DropdownContainer = styled.div`
  ${tw`relative transition-all duration-300 ease-in-out`}
  ${({ active }) =>
    active && tw`lg:bg-transparent bg-deepBlue text-white lg:text-black `}
`;

export const DropdownButton = styled.div`
  ${tw`lg:text-base text-lg   font-made
  flex flex-row items-center cursor-pointer gap-[0.5rem]
  lg:py-0 py-4 pl-10 lg:pl-0
  after:([content: ''] absolute bg-black h-[2px] w-0 left-0 -bottom-1 transition-[0.4s])
  hover:after:w-full
  active:text-brightOrange
  `}
`;

export const DropdownList = styled.ul`
  ${tw`lg:absolute z-10 lg:p-4 lg:mt-2 lg:bg-white flex flex-col items-start gap-[1.5rem] -right-4
  pl-[11rem] pb-4

   -mt-[2.3rem]
  `}

  /* Styles for the animation */
  &.fade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.fade-exit-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
  }
`;

export const DropdownItem = styled.li`
  ${tw`lg:text-[#151B1870] text-white text-base font-light leading-[1.257rem] uppercase font-made`}
  ${({ active }) =>
    active && tw`lg:text-brightOrange font-bold leading-[1.276rem]`}
`;

export const ToggleButton = styled.div(({ open }) => [
  tw`lg:flex hidden`,
  !open && tw`transform transition-transform duration-500 `,
  open && tw`transform transition-transform duration-500 rotate-180`,
]);

export const MobileToggle = styled.div`
  ${tw`lg:hidden flex flex-row items-center justify-between`}
`;
