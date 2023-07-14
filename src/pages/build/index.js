import { allBuilds } from 'contentlayer/generated';
//components
import HeaderV2 from '../../components/HeaderV2';
import PicTop from '../../components/Articles/PicTop';
import PicTwoLeft from '../../components/Articles/PicTwoLeft';
import PicLeftRight from '../../components/Articles/PicLeftRight';
import LottieText from '../../components/LottieText';
//Lotties
import build from '../../lotties/build.json';
import { useEffect, useState } from 'react';

//get the data for the current locale
export const getStaticProps = ({ locale }) => {
  const data = allBuilds.find((page) => page.lang === locale);
  return {
    props: {
      data,
    },
  };
};

function Build({ data }) {
  const [lottieLoader, setLottieLoader] = useState(false);

  // useEffect(() => {
  //   // after 1 sec set lottieLoader true
  //   setTimeout(() => {
  //     setLottieLoader(true);
  //   }, 1905);
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-20 mb-36">
      <LottieText lottie={build} />
      <HeaderV2 {...data.headerProps} />
      <PicTop
        {...data.picTopProps}
        variant="v3"
        className="pl-14 md:pl-[13.188rem] lg:pl-[24.625rem]"
      />
      <PicLeftRight
        {...data.picRightProps}
        variant="v3"
        className="md:pr-[13.188rem] lg:pr-0"
      />
      <PicTwoLeft {...data.pic2LeftProps} className="max-w-[65rem] mx-auto" />
      <PicLeftRight
        {...data.picLeftProps}
        variant="v2"
        className="md:pl-[13.188rem] lg:pl-0"
      />
      <PicLeftRight
        {...data.picRightProps2}
        variant="v3"
        className="md:pr-[13.188rem] lg:pr-0"
      />
      <PicTop
        {...data.picTopProps2}
        variant="v3"
        className="pl-14 md:pl-[13.188rem] lg:pl-[24.625rem]"
      />
      <PicLeftRight
        {...data.picLeftProps2}
        variant="v2"
        className="md:pl-[13.188rem] lg:pl-0"
      />
      <PicTwoLeft {...data.pic2LeftProps2} className="max-w-[65rem] mx-auto" />
    </div>
  );
}

export default Build;
