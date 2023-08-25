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

function Articulate({ data }) {
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div
      className={`flex flex-col justify-center items-center transition-all duration-700 ease-in ${
        isEnd ? '-mt-[4rem]' : ''
      }`}
    >
      <LottieText lottie={articulate} setIsEnd={setIsEnd} />
      <div
        className={`flex flex-col justify-center items-center gap-20 mb-20 transition-all duration-700 ease-in ${
          isEnd ? '-mt-32' : ''
        }`}
      >
        <Header {...data.headerProps} isSplited={true} level="h2" />
        <PicTop {...data.picTopProps} variant="v1" />
        <PicLeftRight {...data.picLeftProps} variant="v1" />
        <PicFourLeft {...data.pic4LeftProps} />
        <PicLeftRight {...data.picRightProps} variant="v3" />
        <PicLeftRight {...data.picLeftProps2} variant="v2" />
        <PicTop {...data.picTopProps2} variant="v1" />
      </div>
    </div>
  );
}

export default Articulate;
