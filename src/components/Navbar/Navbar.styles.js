import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

export const NavbarWrapper = styled.header(({ $isHidden, $hiddenFromHome }) => [
  tw`fixed left-1/2 -translate-x-1/2 top-0  w-full h-[6.5rem] max-w-[87.5rem]   px-[2.5rem]  lg:px-[4.5rem]
  bg-white  flex items-center justify-center z-50`,
  $isHidden && tw`hidden`,
  $hiddenFromHome && tw`md:hidden`,
]);

export const Logo = tw.img`
 max-w-[14.5rem] max-h-[1.563rem]
`;

export const LinksWrapper = tw.nav`
    flex items-center justify-center gap-5 xl:gap-[2.5rem]
`;

export const LinkLabel = styled(motion.div)`
  ${tw`
    w-fit text-black lg:text-base text-lg leading-[2rem] font-made relative
   lg:py-0 py-4 pl-10 lg:pl-0 
  lg:after:([content: ''] absolute bg-black h-[2px] w-0 left-0 -bottom-1.5 transition-[0.4s])
  lg:hover:after:w-full
  active:(text-brightOrange)
   `}
`;

export const Social = tw.div`flex gap-14`;

export const MediaWrapper = tw.div`
    flex items-center gap-2 p-[1.688rem] bg-[#D9D9D9] bg-opacity-10 lg:(bg-white self-end bg-opacity-100)
     justify-between  pl-10  max-w-[20rem] 
     lg:(justify-start p-0)
     xl:gap-[1.6rem]
`;

export const StyledMedia = tw.div``;

export const DeskView = tw.div`
  hidden lg:flex w-full items-center justify-between
`;

export const MobileView = tw.div`
  lg:hidden w-full flex items-center justify-between
`;

export const PointerWrapper = tw.button`
    relative
`;

export const MobileNav = tw.nav`flex flex-col mt-[4.813rem] border-y border-[#D9D9D9]`;

export const MobileList = tw.ul`flex w-full flex-col justify-center divide-y divide-[#D9D9D9] `;

// create new animation

export const Wrapper = styled(motion.div)`
  ${tw`relative flex flex-col cursor-pointer  overflow-hidden`}
`;

export const Word = styled(motion.span)`
  ${tw`relative whitespace-nowrap active:[&>span]:(text-brightOrange)`}
`;

export const AbsoluteContainer = styled.div`
  ${tw`absolute inset-0`}
`;

export const LinkName = styled(motion.span)`
  ${tw`relative whitespace-nowrap inline-block text-black lg:text-base text-lg leading-[2rem] font-made
   lg:py-0 py-4 pl-10 lg:pl-0 
 
   `};
  ${({ key }) => key === 0 && tw`capitalize`}
`;
