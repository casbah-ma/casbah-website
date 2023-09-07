import { allDesigns } from 'contentlayer/generated';
//components
import HeaderV2 from '../../components/HeaderV2';
import PicTop from '../../components/Articles/PicTop';
import PicThreeRight from '../../components/Articles/PicThreeRight';
import PicFourLeft from '../../components/Articles/PicFourLeft';
import PicLeftRight from '../../components/Articles/PicLeftRight';
import LottieText from '../../components/LottieText';
//Lotties
import design from '../../lotties/design.json';
import { useState } from 'react';

//get the data for the current locale
export const getStaticProps = ({ locale }) => {
  const data = allDesigns.find((page) => page.lang === locale);
  return {
    props: {
      data,
    },
  };
};

function Design({ data }) {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center mt-14 md:mt-[9.75rem] lg:mt-[10.75rem]">
      <LottieText lottie={design} setIsEnd={setIsEnd} />
      <div
        className={`flex flex-col justify-center items-center gap-20 mb-20 transition-all duration-700 ${
          isEnd
            ? '-mt-[1.875rem] md:-mt-[6.625rem] lg:-mt-[12.625rem]'
            : 'lg:mt-20'
        }`}
      >
        <HeaderV2 {...data.headerProps} variant="v2" />
        <PicLeftRight {...data.picLeftProps} variant="v5" />
        <PicLeftRight {...data.picRightProps} variant="v6" />
        <PicTop {...data.picTopProps} variant="v1" />
        <PicLeftRight {...data.picLeftProps2} variant="v5" />
        <PicLeftRight {...data.picRightProps2} variant="v6" />
      </div>
    </div>
  );
}

export default Design;
