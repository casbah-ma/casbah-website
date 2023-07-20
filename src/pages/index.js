import HomeSection from '@/components/HomeSection';
import { allHomes } from 'contentlayer/generated';
//lotties
import Lottie_01 from '@/lotties/Lottie_01.json';
import Lottie_02 from '@/lotties/Lottie_02.json';
import Lottie_03 from '@/lotties/Lottie_03.json';
import Lottie_04 from '@/lotties/Lottie_04.json';
import Lottie_05 from '@/lotties/Lottie_05.json';
import Lottie_06 from '@/lotties/Lottie_06.json';
import Lottie_07 from '@/lotties/dna.json';
import Hero from '../components/Hero';
import { Container, LottieWrapper } from '../styles/Home.styles';
import { useMemo, useState } from 'react';
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

  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.2,
  });
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
  });

  const lotties = useMemo(
    () => [
      Lottie_01,
      Lottie_02,
      Lottie_03,
      Lottie_04,
      Lottie_05,
      Lottie_06,
      Lottie_07,
    ],
    []
  );

  return (
    <Container hasGradient={!heroInView && !footerInView}>
      <LottieWrapper>
        <Player
          keepLastFrame
          autoplay
          loop={false}
          src={!heroInView && !footerInView && lotties[currentStepIndex]}
        />
      </LottieWrapper>
      <Hero {...data.heroProps} ref={heroRef} />
      <Scrollama offset={0.5} onStepEnter={onStepEnter}>
        <Step data={0}>
          <div style={{ zIndex: -20 }}>
            <HomeSection
              {...data.sectionProps}
              lottie={Lottie_01}
              isFirst={true}
            />
          </div>
        </Step>
        <Step data={1}>
          <div style={{ zIndex: -20 }}>
            <HomeSection {...data.sectionProps1} lottie={Lottie_02} />
          </div>
        </Step>
        <Step data={2}>
          <div style={{ zIndex: -20 }}>
            <HomeSection {...data.sectionProps2} lottie={Lottie_03} />
          </div>
        </Step>
        <Step data={3}>
          <div style={{ zIndex: -20 }}>
            <HomeSection {...data.sectionProps3} lottie={Lottie_04} />
          </div>
        </Step>
        <Step data={4}>
          <div style={{ zIndex: -20 }}>
            <HomeSection {...data.sectionProps4} lottie={Lottie_05} />
          </div>
        </Step>
        <Step data={5}>
          <div style={{ zIndex: -20 }}>
            <HomeSection {...data.sectionProps5} />
          </div>
        </Step>
        <Step data={6}>
          <div style={{ zIndex: -20 }}>
            <HomeSection {...data.sectionProps6} lottie={Lottie_07} />
          </div>
        </Step>
      </Scrollama>
      <HomeFooter ref={footerRef} {...data.footerProps} />
    </Container>
  );
}
