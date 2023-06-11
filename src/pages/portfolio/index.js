import PortfolioHeader from '@/components/PortfolioHeader';
import ProjecSection from '@/components/ProjecSection';
import { allPortfolios } from 'contentlayer/generated';
import { useEffect, useMemo, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';

export const getStaticProps = ({ locale }) => {
  const data = allPortfolios.find((home) => home.lang === locale);
  return {
    props: { data },
  };
};

export default function Portfolio({ data }) {
  const [activeSection, setActiveSections] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const [scroll, setScroll] = useState(0);

  const debouncedScrollDirection = useDebounce(scrollDirection, 500);
  const debouncedScroll = useDebounce(scroll, 500);

  const sections = useMemo(
    () => [
      <PortfolioHeader key={0} {...data.headerProps} />,
      <ProjecSection key={1} {...data.projectProps} />,
    ],
    [data.headerProps]
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

  return <>{sections[activeSection]}</>;
}
