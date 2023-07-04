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
import { AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';

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

  const debouncedScrollDirection = useDebounce(scrollDirection, 100);
  const debouncedScroll = useDebounce(scroll, 100);

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
      <div
        key={7}
        className="absolute left-0 top-[5.75rem] bottom-0 md:(top-none ) w-full flex-1 flex justify-center items-center bg-deepBlue [&>footer]:z-50"
      >
        <Footer />
      </div>,
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
    if (debouncedScrollDirection === 'up') {
      setActiveSections((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (debouncedScrollDirection === 'down') {
      setActiveSections((prev) =>
        prev + 1 < sections.length ? prev + 1 : prev
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const handleArrowKeys = (e) => {
      if (e.keyCode == '38') {
        setActiveSections((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.keyCode == '40') {
        setActiveSections((prev) =>
          prev + 1 < sections.length ? prev + 1 : prev
        );
      }
    };

    document.addEventListener('wheel', handleWheel);
    document.addEventListener('keydown', handleArrowKeys);

    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleArrowKeys);
    };
  }, [sections.length]);

  return (
    <AnimatePresence mode="sync">{sections[activeSection]}</AnimatePresence>
  );
}
