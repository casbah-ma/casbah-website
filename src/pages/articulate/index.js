import { allArticulates } from 'contentlayer/generated';
//components
import Header from '../../components/Header';
import PicTop from '../../components/Articles/PicTop';
import PicLeftRight from '../../components/Articles/PicLeftRight';
import PicFourLeft from '../../components/Articles/PicFourLeft';
import LottieText from '../../components/LottieText';
//Lotties
import articulate from '../../lotties/aticulate.json';
import { useEffect, useState } from 'react';

//get the data for the current locale
export const getStaticProps = ({ locale }) => {
  const data = allArticulates.find((page) => page.lang === locale);
  return {
    props: {
      data,
    },
  };
};

export const meta = {
  title: 'Articulate Your Marketing and Digital Strategy with Casbah',
  description: "Discover Casbah's strategic approach to digital transformation. We focus on aligning teams, resources, and operations with long-term goals, prioritizing end-user experience and effective digital frameworks.",
};

function Articulate({ data }) {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center items-center transition-all duration-700 ease-in ${
        isEnd ? 'md:mt-5 lg:-mt-[4rem]' : 'md:mt-[10.125rem] lg:mt-[unset]'
      }`}
    >
      <LottieText lottie={articulate} setIsEnd={setIsEnd} />
      <div
        className={`flex flex-col justify-center items-center gap-20 mb-20 transition-all duration-700 ease-in ${
          isEnd ? '-mt-2.5 md:-mt-[3.875rem] lg:-mt-32' : ''
        }`}
      >
        <Header {...data.headerProps} isSplited={true} level="h2" />
        <PicTop {...data.picTopProps} variant="v1" />
        <PicLeftRight {...data.picProps} variant="v2" />
        <PicLeftRight {...data.picProps1} variant="v1" />
        <PicTop {...data.picTopProps2} variant="v1" />
        <PicLeftRight {...data.picProps2} variant="v2" />
        <PicLeftRight {...data.picProps3} variant="v1" />
      </div>
    </div>
  );
}

export default Articulate;
