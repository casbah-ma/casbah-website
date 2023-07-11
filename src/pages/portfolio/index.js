import PortfolioHeader from '@/components/PortfolioHeader';
import ProjectSection from '@/components/ProjectSection';
import { allPortfolios, allBlogs } from 'contentlayer/generated';
import { useEffect, useMemo, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { AnimatePresence } from 'framer-motion';

export const getStaticProps = ({ locale }) => {
  const data = allPortfolios.find((home) => home.lang === locale);
  const blogs = allBlogs.filter(
    (page) => page.lang === locale && page.parent === 'portfolio'
  );
  return {
    props: { data: { ...data, blogs } },
  };
};

export default function Portfolio({ data }) {
  const [activeSection, setActiveSections] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const [scroll, setScroll] = useState(0);

  const debouncedScrollDirection = useDebounce(scrollDirection, 300);
  const debouncedScroll = useDebounce(scroll, 300);

  const sections = useMemo(
    () => [
      <PortfolioHeader key={0} {...data.headerProps} />,
      ...data.blogs.map((blog, key) => (
        <ProjectSection key={key} isFirst={key === 0} {...blog} />
      )),
    ],
    [data]
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
        setScroll((prev) => e.deltaY - prev);
      } else if (e.deltaY > 0) {
        setScrollDirection('up');
        setScroll((prev) => e.deltaY + prev);
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
    <AnimatePresence mode="wait"> {sections[activeSection]}</AnimatePresence>
  );
}
