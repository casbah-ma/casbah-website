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
import { useDebounce } from '../hooks/useDebounce';

export const getStaticProps = ({ locale }) => {
  const data = allHomes.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const [activeSection, setActiveSections] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const [scroll, setScroll] = useState(0);

  const debouncedScrollDirection = useDebounce(scrollDirection, 500);
  const debouncedScroll = useDebounce(scroll, 500);

  const sections = useMemo(
    () => [
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
    ],
    [
      data.sectionProps,
      data.sectionProps1,
      data.sectionProps2,
      data.sectionProps3,
      data.sectionProps4,
      data.sectionProps5,
      data.sectionProps6,
    ]
  );

  useEffect(() => {
    console.log(activeSection);
    if (debouncedScrollDirection === 'up' && activeSection > 0) {
      setActiveSections((prev) => prev - 1);
    } else if (
      debouncedScrollDirection === 'down' &&
      activeSection < sections.length
    ) {
      setActiveSections((prev) => prev + 1);
    }
  }, [debouncedScroll, sections.length]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY < 0) {
        setScrollDirection('down');
        setScroll(e.deltaY);
      } else if (e.deltaY > 0) {
        setScrollDirection('up');
        setScroll(e.deltaY);
      }
    };
    document.addEventListener('wheel', handleWheel);
  }, []);

  return <>{sections[activeSection]}</>;
}
