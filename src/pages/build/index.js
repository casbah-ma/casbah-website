import { allBuilds } from 'contentlayer/generated';
//components
import HeaderV2 from '../../components/HeaderV2';
import PicTop from '../../components/Articles/PicTop';
import PicTwoLeft from '../../components/Articles/PicTwoLeft';
import PicLeftRight from '../../components/Articles/PicLeftRight';
import LottieText from '../../components/LottieText';
//Lotties
import build from '../../lotties/build.json';

//get the data for the current locale
export const getStaticProps = ({ locale }) => {
  const data = allBuilds.find((page) => page.lang === locale);
  return {
    props: {
      data,
    },
  };
};

export const meta = {
  title: 'Advanced Digital Solutions by Casbah - Web, App, IoT Solutions',
  description:
    "Discover Casbah's expertise in building advanced digital solutions including web and app development, IoT implementations, and augmented reality technologies. We focus on creating interconnected, smart digital environments.",
};

function Build({ data }) {
  return (
    <div className="flex flex-col justify-center items-center mt-3.5 md:mt-[3.75rem] lg:mt-2">
      <LottieText lottie={build} />
      <div className="flex flex-col justify-center items-center gap-20 mt-2.5 md:-mt-1 lg:-mt-[2.125rem] mb-20">
        <HeaderV2 {...data.headerProps} />
        <PicTop {...data.picTopProps} variant="v1" />
        <PicLeftRight {...data.picProps} variant="v2" />
        <PicLeftRight {...data.picProps1} variant="v1" />
        <PicLeftRight {...data.picProps2} variant="v2" />
        <PicLeftRight {...data.picProps3} variant="v1" />
        <PicTop {...data.picTopProps3} variant="v1" />
        <PicLeftRight {...data.picProps4} variant="v2" />
        <PicTop {...data.picTopProps2} variant="v1" />
      </div>
    </div>
  );
}

export default Build;
