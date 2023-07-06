import styled from 'styled-components';
import tw from 'twin.macro';

export const imagesSize = (index, variant) => {
  if (variant === 'v1') {
    switch (index) {
      case 0:
        return tw`col-span-1 md:col-span-2 object-cover h-[426px] w-full`;
      case 1:
        return tw`col-span-1 object-cover h-[426px] w-full`;
      default:
        return tw`col-span-1 w-full object-cover h-[426px]`;
    }
  } else {
    switch (index) {
      case 0:
        return tw`col-span-1 md:col-span-3 lg:col-span-4 object-cover h-[426px] lg:h-[769px] w-full`;
      case 1:
        return tw`col-span-1 md:col-span-2  object-cover h-[426px] lg:h-[769px] w-full`;
      case 2:
        return tw`col-span-1 lg:col-span-2  object-cover h-[426px] lg:h-[769px] w-full`;
      case 4:
        return tw`col-span-1 md:col-span-2 lg:col-span-3 object-cover h-[426px] w-full`;
      default:
        return tw`col-span-1 object-cover h-[426px] w-full`;
    }
  }
};

export const Wrapper = tw.section`w-full flex flex-col justify-center items-center gap-24`;

export const ImagesGrid = styled.div`
  ${tw`w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3`}
  ${({ variant }) => variant === 'v2' && tw`md:!grid-cols-3 lg:!grid-cols-4`}
`;

export const GridContent = tw.div`w-full flex flex-col justify-start items-start md:max-w-[38.188rem] lg:(max-w-[51.813rem])  self-end gap-5 [&>div]:mt-10`;
