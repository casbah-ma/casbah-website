import HomeSection from '@/components/HomeSection';
import { allHomes } from 'contentlayer/generated';

//lotties
import Lottie_01 from '@/lotties/Lottie_01.json';
import Lottie_02 from '@/lotties/Lottie_02.json';
import Lottie_03 from '@/lotties/Lottie_03.json';
import Lottie_04 from '@/lotties/Lottie_04.json';
import Lottie_05 from '@/lotties/Lottie_05.json';
import Lottie_06 from '@/lotties/Lottie_06.json';
import Lottie_07 from '@/lotties/Lottie_07.json';
import Hero from '../components/Hero';
import { LottieWrapper, LottierContainer } from '../styles/Home.styles';
import { useMemo, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useInView } from 'react-intersection-observer';
import HomeFooter from '../components/HomeFooter';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from '../components/Navbar';

export const getStaticProps = async ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.2,
  });
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
  });

  const onLeave = (origin, destination, direction, trigger) => {
    if (destination.index === 0) {
      setCurrentIndex(null);
    } else {
      setCurrentIndex(destination.index - 1);
    }
  };

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
    <>
      <LottieWrapper className="lottie">
        <LottierContainer>
          <Player
            keepLastFrame
            autoplay
            loop={false}
            src={!heroInView && !footerInView && lotties[currentIndex]}
          />
        </LottierContainer>
      </LottieWrapper>
      <ReactFullpage
        scrollingSpeed={1300}
        onLeave={onLeave}
        verticalCentered={false}
        scrollOverflow={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Navbar />
              <Hero ref={heroRef} className="section" {...data.heroProps} />
              <HomeSection {...data.sectionProps} />
              <HomeSection {...data.sectionProps1} />
              <HomeSection {...data.sectionProps2} />
              <HomeSection {...data.sectionProps3} />
              <HomeSection {...data.sectionProps4} />
              <HomeSection {...data.sectionProps5} />
              <HomeSection {...data.sectionProps6} />
              <HomeFooter ref={footerRef} {...data.footerProps} />
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
    </>
  );
}
