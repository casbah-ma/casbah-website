import HomeSection from '@/components/HomeSection';
import { allHomes } from 'contentlayer/generated';
import { useEffect, useState } from 'react';
//lotties
import straightLine from '@/lotties/straightLine.json';
import Lottie_02 from '@/lotties/Lottie_02.json';
import Lottie_03 from '@/lotties/Lottie_03.json';
import Lottie_04 from '@/lotties/Lottie_04.json';
import Lottie_05 from '@/lotties/Lottie_05.json';
import Lottie_06 from '@/lotties/Lottie_06.json';
import Lottie_07 from '@/lotties/Lottie_07.json';

export const getStaticProps = ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

const deltaToTriggerSwitch = 50;
export default function Home({ data }) {
  const [activeSection, setActiveSections] = useState(0);
  const [scrollDown, setScrollDwon] = useState(0);
  console.log(activeSection);

  const sections = [
    <HomeSection
      key={0}
      {...data.sectionProps}
      lottie={straightLine}
      variant="left"
    />,
    <HomeSection
      key={1}
      {...data.sectionProps1}
      lottie={Lottie_02}
      variant="right"
    />,
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
  ];

  useEffect(() => {
    let id;
    const handleWheel = (e) => {
      console.log(activeSection < sections.length);
      if (
        e.deltaY < 0 &&
        e.deltaY - scrollDown < -50 &&
        activeSection < sections.length - 1
      ) {
        setActiveSections((prev) => prev + 1);
        setScrollDwon(e.deltaY);
      } else if (e.deltaY > 0) {
        console.log('up');
      }
    };

    document.addEventListener('wheel', handleWheel);

    return () => clearTimeout(id);
  }, [scrollDown, activeSection, sections.length]);

  return <>{sections[activeSection]}</>;
}
