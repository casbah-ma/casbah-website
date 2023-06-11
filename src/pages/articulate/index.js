import { allArticulates } from 'contentlayer/generated';
//components
import Header from '../../components/Header';
import PicTop from '../../components/Articles/PicTop';
import PicLeftRight from '../../components/Articles/PicLeftRight';
import Pic4Left from '../../components/Articles/Pic4Left';
import LottieText from '../../components/LottieText';
//Lotties
import articulate from '../../lotties/aticulate.json';

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
  return (
    <div className="flex flex-col justify-center items-center gap-[120px] mb-36">
      <LottieText lottie={articulate} />
      <Header {...data.headerProps} isSplited={true} />
      <PicTop {...data.picTopProps} variant="v1" />
      <PicLeftRight {...data.picLeftProps} variant="v1" />
      <Pic4Left {...data.pic4LeftProps} />
      <PicLeftRight {...data.picRightProps} variant="v3" />
      <PicLeftRight {...data.picLeftProps2} variant="v2" />
      <PicTop {...data.picTopProps2} variant="v1" />
    </div>
  );
}

export default Articulate;
