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
  return (
    <div className="flex flex-col justify-center items-center gap-20 mb-36">
      <LottieText lottie={design} />
      <HeaderV2 {...data.headerProps} variant="v2" />
      <PicLeftRight {...data.picLeftProps} variant="v5" />
      <PicThreeRight
        {...data.pic3RightProps}
        className="pl-[3.563rem] md:pl-[13.188rem] lg:(max-w-[65.125rem] mx-auto pl-0)"
      />
      <PicTop {...data.picTopProps} variant="v1" />
      <PicFourLeft {...data.pic4LeftProps} />
      <PicLeftRight {...data.picRightProps} variant="v6" />
    </div>
  );
}

export default Design;
