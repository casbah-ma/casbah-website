import HomeSection from '@/components/HomeSection';
import { allHomes } from 'contentlayer/generated';
//lotties

import Lottie_01 from '@/lotties/Lottie_01.json';
import Lottie_02 from '@/lotties/Lottie_02.json';
import Lottie_03 from '@/lotties/Lottie_03.json';
import Lottie_04 from '@/lotties/Lottie_04.json';
import Lottie_05 from '@/lotties/Lottie_05.json';
// import Lottie_06 from '@/lotties/Lottie_06.json';
import Lottie_07 from '@/lotties/dna.json';
import Hero from '../components/Hero';
import { Container, LottieWrapper } from '../styles/Home.styles';
import { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { Player } from '@lottiefiles/react-lottie-player';
import { useInView } from 'react-intersection-observer';
import HomeFooter from '../components/HomeFooter';

export const getStaticProps = async ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const { ref, inView: footerInView } = useInView({ threshold: 0.3 });

  const lotties = [
    Lottie_01,
    Lottie_02,
    Lottie_03,
    Lottie_04,
    Lottie_05,
    Lottie_07,
  ];

  return (
    <Container>
      {currentStepIndex !== -1 && !footerInView && (
        <LottieWrapper>
          <Player
            keepLastFrame
            autoplay
            loop={false}
            src={lotties[currentStepIndex]}
          />
        </LottieWrapper>
      )}
      <Scrollama offset={0.5} onStepEnter={onStepEnter}>
        <Step data={-1}>
          <div>
            <Hero {...data.heroProps} />
          </div>
        </Step>
        <Step data={0}>
          <div>
            <HomeSection {...data.sectionProps} lottie={Lottie_01} />
          </div>
        </Step>
        <Step data={1}>
          <div>
            <HomeSection {...data.sectionProps1} lottie={Lottie_02} />
          </div>
        </Step>

        <Step data={2}>
          <div>
            <HomeSection {...data.sectionProps2} lottie={Lottie_03} />
          </div>
        </Step>
        <Step data={2}>
          <div>
            <HomeSection {...data.sectionProps3} lottie={Lottie_04} />
          </div>
        </Step>
        <Step data={4}>
          <div>
            <HomeSection {...data.sectionProps4} lottie={Lottie_05} />
          </div>
        </Step>

        <Step data={5}>
          <div>
            <HomeSection {...data.sectionProps5} />
          </div>
        </Step>
        <Step data={6}>
          <div>
            <HomeSection {...data.sectionProps6} lottie={Lottie_07} />
          </div>
        </Step>
      </Scrollama>
      <HomeFooter ref={ref} {...data.footerProps} />
    </Container>
  );
}
