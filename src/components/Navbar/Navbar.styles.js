import tw from "twin.macro";

export const NavbarWrapper = tw.div`
    fixed inset-0 bg-[#FFFFFF] h-[6.5rem] flex items-center justify-between flex-row lg:px-[4.5rem]  px-[2.5rem] z-50
`;

export const Logo = tw.img`
 max-w-[14.5rem] max-h-[1.563rem]
`;

export const LinksWrapper = tw.div`
    flex flex-row items-center gap-[2.5rem]
`;

export const LinkLabel = tw.div`
    text-black lg:text-base text-lg leading-[1.257rem] capitalize font-made

   lg:py-0 py-4 pl-10 lg:pl-0 
`;

export const MediaWrapper = tw.div`
    flex flex-row items-center gap-[1.6rem] lg:p-0 p-[1.688rem]
     justify-between lg:justify-start pl-10 lg:pl-0  max-w-[20rem]
`;

export const StyledMedia = tw.div``

export const DeskView = tw.div`
  hidden lg:flex w-full flex-row items-center justify-between
`;

export const MobileView = tw.div`
  lg:hidden w-full flex flex-row items-center justify-between
`;
export const PointerWrapper = tw.div`
 cursor-pointer
`;

export const MobileNav = tw.div`flex flex-col mt-[4.813rem] border-y border-[#D9D9D9]`;

export const MobileList = tw.ul`flex w-full flex-col  justify-center divide-y divide-[#D9D9D9]`;
