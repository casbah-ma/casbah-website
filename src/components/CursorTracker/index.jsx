import { useMotionValue, useSpring } from 'framer-motion';
import { ReadMore } from './CursorTracker.styles';
import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

const CursorTracker = ({ text }) => {
  const { t } = useTranslation();
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updatePosition = (e) => {
      const { clientX, clientY } = e;
      cursorX.set(clientX - 80);
      cursorY.set(clientY - 80);
    };
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ReadMore
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      {t(text)}
    </ReadMore>
  );
};

export default CursorTracker;
