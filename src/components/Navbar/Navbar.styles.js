import tw from "twin.macro";

export const NavbarWrapper = tw.div`
    fixed inset-0 bg-[#FFFFFF] h-[6.5rem] flex items-center justify-between flex-row px-[4.5rem] z-50
`;

export const Logo = tw.img`
 max-w-[14.5rem] max-h-[1.563rem]
`;

export const LinksWrapper = tw.div`
    flex flex-row items-center gap-[2.5rem]
`;

export const LinkLabel = tw.span`
    text-black text-base font-light leading-[1.257rem] capitalize font-made
`;

export const MediaWrapper = tw.div`
    flex flex-row items-center gap-[1.6rem]
`;
