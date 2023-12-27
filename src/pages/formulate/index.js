import { allFormulates } from 'contentlayer/generated';
//components
import Header from '../../components/Header';
import PicTop from '../../components/Articles/PicTop';
import PicThreeLeft from '../../components/Articles/PicThreeLeft';
import PicLeftRight from '../../components/Articles/PicLeftRight';
import LottieText from '../../components/LottieText';
//Lotties
import formulate from '../../lotties/formulate.json';

//get the data for the current locale
export const getStaticProps = ({ locale }) => {
  const data = allFormulates.find((page) => page.lang === locale);
  return {
    props: {
      data,
    },
  };
};

export const metadata = {
  title:
    "Casbah's Creative Content Creation - Connecting Brands with Audiences",
  description:
    "Join Casbah in shaping compelling brand stories. Our expertise in content production, from copywriting to multimedia content, is tailored to engage diverse audiences and articulate your brand's unique identity.",
};

function Formulate({ data }) {
  return (
    <div className="flex flex-col justify-center items-center mt-[3.25rem] md:mt-[9.375rem] lg:mt-[10rem]">
      <LottieText lottie={formulate} />
      <div className="flex flex-col justify-center items-center gap-20 mb-20 mt-8 md:mt-[2.625rem]  lg:mt-14">
        <Header {...data.headerProps} isVertical={true} level="h2" />

        <PicLeftRight {...data.picProps} variant="v1" />
        <PicLeftRight {...data.picProps2} variant="v2" />
        <PicLeftRight {...data.picProps3} variant="v1" />
        <PicLeftRight {...data.picProps4} variant="v2" />
      </div>
    </div>
  );
}

export default Formulate;
