import HomeSection from '@/components/HomeSection';
import { allHomes } from 'contentlayer/generated';
//lotties
import straightLine from '@/lotties/straightLine.json';
import Lottie_02 from '@/lotties/Lottie_02.json';
import Lottie_03 from '@/lotties/Lottie_03.json';
import Lottie_04 from '@/lotties/Lottie_04.json';
import Lottie_05 from '@/lotties/Lottie_05.json';
import Lottie_06 from '@/lotties/Lottie_06.json';
import Lottie_07 from '@/lotties/dna.json';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Container } from '../styles/Home.styles';
import { useEffect, useRef, useState } from 'react';

export const getStaticProps = async ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  return (
    <Container>
      <Hero {...data.heroProps} isScrolling={isScrolling} />
      <HomeSection
        {...data.sectionProps}
        lottie={straightLine}
        variant="left"
        isScrolling={isScrolling}
      />
      <HomeSection
        {...data.sectionProps1}
        lottie={Lottie_02}
        variant="right"
        isScrolling={isScrolling}
      />
      <HomeSection
        {...data.sectionProps2}
        lottie={Lottie_03}
        variant="left"
        isScrolling={isScrolling}
      />
      <HomeSection
        {...data.sectionProps3}
        lottie={Lottie_04}
        variant="right"
        isScrolling={isScrolling}
      />
      <HomeSection
        {...data.sectionProps4}
        lottie={Lottie_05}
        variant="left"
        isScrolling={isScrolling}
      />
      <HomeSection
        {...data.sectionProps5}
        lottie={Lottie_06}
        variant="left"
        isScrolling={isScrolling}
      />
      <HomeSection
        {...data.sectionProps6}
        lottie={Lottie_07}
        variant="centre"
        isScrolling={isScrolling}
      />
      <Footer />
    </Container>
  );
}
