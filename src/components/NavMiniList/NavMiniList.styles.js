import tw, { styled } from 'twin.macro';

export const DropdownContainer = styled.div`
  ${tw`relative transition-all duration-300 ease-in-out`}
  ${({ active }) =>
    active && tw`lg:bg-transparent bg-deepBlue lg:text-black text-white`}
`;

export const DropdownButton = styled.div`
  ${tw`lg:text-base text-lg leading-[1.257rem]  font-made
  w-full flex justify-center items-center cursor-pointer 
  lg:py-0 py-4 pl-10 lg:pl-0
  `}
`;

export const DropdownList = styled.ul`
  ${tw`lg:absolute z-10 lg:p-4 lg:mt-1 lg:bg-white flex flex-col items-start gap-[1.5rem] -right-3.5
  pl-[12rem]  pb-4 uppercase

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
  ${tw`text-white text-base font-light leading-[1.257rem] font-made  lg:(text-blackIsh text-opacity-70 hover:(text-brightOrange !text-opacity-100 font-bold))`}
  ${({ active }) =>
    active && tw`lg:text-brightOrange font-bold leading-[1.276rem]`}
`;

export const ToggleButton = styled.div(({ open }) => [
  tw`hidden lg:flex p-0 transform transition-transform duration-500 mt-1 `,
  open && tw`rotate-180`,
]);

export const MobileToggle = styled.div`
  ${tw`lg:hidden flex flex-row items-center justify-between`}
`;
