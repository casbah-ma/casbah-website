import HomeSection from '@/components/HomeSection';
import { allHomes } from 'contentlayer/generated';
import { useEffect, useMemo, useState } from 'react';
//lotties
import straightLine from '@/lotties/straightLine.json';
import Lottie_02 from '@/lotties/Lottie_02.json';
import Lottie_03 from '@/lotties/Lottie_03.json';
import Lottie_04 from '@/lotties/Lottie_04.json';
import Lottie_05 from '@/lotties/Lottie_05.json';
import Lottie_06 from '@/lotties/Lottie_06.json';
import Lottie_07 from '@/lotties/Lottie_07.json';

import { AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Container, Section } from '../styles/Home.styles';

export const getStaticProps = ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const sections = [
    <HomeSection
      key={2}
      {...data.sectionProps2}
      lottie={Lottie_03}
      variant="left"
    />,
    <HomeSection
      key={3}
      {...data.sectionProps3}
      lottie={Lottie_04}
      variant="right"
    />,
    <HomeSection
      key={4}
      {...data.sectionProps4}
      lottie={Lottie_05}
      variant="left"
    />,
    <HomeSection
      key={5}
      {...data.sectionProps5}
      lottie={Lottie_06}
      variant="left"
    />,

    <HomeSection
      key={6}
      {...data.sectionProps6}
      lottie={Lottie_07}
      variant="centre"
    />,
    <div
      key={7}
      className="absolute left-0 top-[5.75rem] bottom-0 md:(top-none ) w-full flex-1 flex justify-center items-center bg-deepBlue [&>footer]:z-50"
    >
      <Footer />
    </div>,
  ];

  return (
    <AnimatePresence mode="sync">
      <Container>
        <Hero key="hero" {...data.heroProps} />,
        <HomeSection
          key={0}
          {...data.sectionProps}
          lottie={straightLine}
          variant="left"
        />
        ,
        <HomeSection
          key={1}
          {...data.sectionProps1}
          lottie={Lottie_02}
          variant="right"
        />
      </Container>
    </AnimatePresence>
  );
}
