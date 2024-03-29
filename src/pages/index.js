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
import {
  LottieWrapper,
  LottierContainer,
  ScrollTopBtn,
} from '../styles/Home.styles';
import { Fragment, useMemo, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useInView } from 'react-intersection-observer';
import HomeFooter from '../components/HomeFooter';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from '../components/Navbar';
import TopIcon from '../icons/TopIcon';
import { NextSeo } from 'next-seo';

export const getStaticProps = async ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

const metadata = {
  title: 'CASBAH - Be Ahead of the Future',
  description:
    'Unlock the potential of your projects with Casbah. Our dedicated team offers guidance, support, and innovative solutions to bring your vision to life',
};

export default function Home({ data }) {
  const [fullPageapi, setFullPageapi] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [init, setInit] = useState(false);
  const { ref: footerRef, inView: footerInView } = useInView({
    threshold: 0.2,
  });
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
  });

  const onLeave = (_, destination, direction) => {
    if (destination.index === 0 && direction === 'up') {
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
      <NextSeo {...metadata} />
      {init && (
        <Fragment>
          <Navbar hiddenFromHome={!heroInView} />
          <ScrollTopBtn
            $isHidden={heroInView}
            onClick={() => {
              fullPageapi?.moveTo(1, 0);
            }}
          >
            <TopIcon />
          </ScrollTopBtn>
          <LottieWrapper className="lottie">
            <LottierContainer>
              <Player
                keepLastFrame
                autoplay
                loop={false}
                src={!heroInView && !footerInView && lotties[currentIndex]}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate3d(-50%, -50%, 0)',
                }}
              />
            </LottierContainer>
          </LottieWrapper>
        </Fragment>
      )}
      <ReactFullpage
        licenseKey="gplv3-license"
        credits={{
          enabled: false,
        }}
        scrollingSpeed={1300}
        responsiveWidth={640}
        onLeave={onLeave}
        verticalCentered={false}
        scrollOverflow={false}
        render={({ state, fullpageApi }) => {
          let activeSectionId;
          if (state.initialized) {
            setInit(true);
            setFullPageapi(fullpageApi);
            activeSectionId = fullpageApi.getActiveSection().item.id;
          }

          return (
            <ReactFullpage.Wrapper>
              <Hero ref={heroRef} className="section" {...data.heroProps} />
              <HomeSection
                id="1"
                activeSectionId={activeSectionId}
                {...data.sectionProps}
                lottie={Lottie_01}
              />
              <HomeSection
                id="2"
                activeSectionId={activeSectionId}
                {...data.sectionProps1}
                lottie={Lottie_02}
              />
              <HomeSection
                id="3"
                activeSectionId={activeSectionId}
                {...data.sectionProps2}
                lottie={Lottie_03}
              />
              <HomeSection
                id="4"
                activeSectionId={activeSectionId}
                {...data.sectionProps3}
                lottie={Lottie_04}
              />
              <HomeSection
                id="5"
                activeSectionId={activeSectionId}
                {...data.sectionProps4}
                lottie={Lottie_05}
              />
              <HomeSection
                id="6"
                activeSectionId={activeSectionId}
                {...data.sectionProps5}
                lottie={Lottie_06}
              />
              <HomeSection
                id="7"
                activeSectionId={activeSectionId}
                {...data.sectionProps6}
                lottie={Lottie_07}
              />
              <HomeFooter ref={footerRef} {...data.footerProps} />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}
