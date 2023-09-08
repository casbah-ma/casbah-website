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

function Build({ data }) {
  return (
    <div className="flex flex-col justify-center items-center mt-3.5 md:mt-[3.75rem] lg:mt-2">
      <LottieText lottie={build} />
      <div className="flex flex-col justify-center items-center gap-20 mt-2.5 md:-mt-1 lg:-mt-[2.125rem] mb-20">
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
        <PicTop
          {...data.picTopProps2}
          variant="v3"
          className="pl-14 md:pl-[13.188rem] lg:pl-[24.625rem]"
        />
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
          {...data.picTopProps3}
          variant="v3"
          className="pl-14 md:pl-[13.188rem] lg:pl-[24.625rem]"
        />
        <PicLeftRight
          {...data.picLeftProps2}
          variant="v2"
          className="md:pl-[13.188rem] lg:pl-0"
        />
        <PicLeftRight
          {...data.picRightProps3}
          variant="v3"
          className="md:pl-[13.188rem] lg:pl-0"
        />
      </div>
    </div>
  );
}

export default Build;
