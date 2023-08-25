import { useMotionValue, useSpring } from 'framer-motion';
import { ReadMore } from './CursorTracker.styles';
import { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import useMouse from '@react-hook/mouse-position';

const CursorTracker = ({ text, containerRef }) => {
  const { t } = useTranslation();

  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let cursorX = 0;
  let cursorY = 0;

  if (mouse.clientX !== null) {
    cursorX = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    cursorY = mouse.clientY;
  }

  console.log(cursorX);
  // const springConfig = { mass: 0.6 };
  // const cursorXSpring = useSpring(cursorX, springConfig);
  // const cursorYSpring = useSpring(cursorY, springConfig);

  return (
    <ReadMore
      animate={{
        opcacity: 1,
        height: 10,
        width: 10,
        x: cursorX,
        y: cursorY,
        transition: {
          type: 'spring',
          mass: 0.6,
        },
      }}
    >
      {t(text)}
    </ReadMore>
  );
};

export default CursorTracker;
