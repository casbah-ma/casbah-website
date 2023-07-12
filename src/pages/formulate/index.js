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

function Formulate({ data }) {
  return (
    <div className="flex flex-col justify-center items-center gap-20 mb-36">
      <LottieText lottie={formulate} />
      <Header {...data.headerProps} isVertical={true} />
      <PicThreeLeft
        {...data.pic3LeftProps}
        className="max-w-[71.8rem] ml-auto"
      />
      <PicTop
        {...data.picTopProps}
        variant="v3"
        className="pl-14 md:pl-[13.188rem] lg:pl-[24.625rem]"
      />
      <PicLeftRight
        {...data.picLeftProps}
        variant="v4"
        className="md:pl-[13.188rem] lg:pl-0"
      />
      <PicTop
        {...data.picTopProps2}
        variant="v3"
        className="pl-14 md:pl-[13.188rem] lg:pl-[24.625rem]"
      />
    </div>
  );
}

export default Formulate;
