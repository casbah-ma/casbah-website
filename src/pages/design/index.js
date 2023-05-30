import { allDesigns } from 'contentlayer/generated';
//components
import Header from '@/components/Header';
import PicTop from '@/components/Articles/PicTop';
import Pic3Right from '@/components/Articles/Pic3Right';
import Pic4Left from '@/components/Articles/Pic4Left';
import PicLeftRight from '@/components/Articles/PicLeftRight';
import LottieText from '@/components/LottieText';
//Lotties
import design from '@/lotties/design.json';

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
    <div className="flex flex-col justify-center items-center gap-[120px] mb-36">
      <LottieText lottie={design} />
      <PicLeftRight {...data.picLeftProps} variant="v5" />
      <Pic3Right
        {...data.pic3RightProps}
        className="pl-[3.563rem] md:pl-[13.188rem] lg:(max-w-[65.125rem] mx-auto pl-0)"
      />
      <PicTop {...data.picTopProps} variant="v1" />
      <Pic4Left {...data.pic4LeftProps} />
      <PicLeftRight {...data.picRightProps} variant="v6" />
    </div>
  );
}

export default Design;
