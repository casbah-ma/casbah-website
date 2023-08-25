import { useMotionValue, useSpring } from 'framer-motion';
import { ReadMore } from './CursorTracker.styles';
import { useContext, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { CursorContext } from '../../store/CursorContext';
import { variants } from './variants';

const CursorTracker = ({ text }) => {
  const { state } = useContext(CursorContext);

  const { t } = useTranslation();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updatePosition = (e) => {
      const { clientX, clientY } = e;

      cursorX.set(state.isExpanded ? clientX - 80 : clientX - 5);
      cursorY.set(state.isExpanded ? clientY - 80 : clientY - 5);
    };
    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isExpanded]);
  return (
    state.isVisible && (
      <ReadMore
        variants={variants}
        className="circle"
        animate={state.isExpanded ? 'expanded' : 'default'}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        {state.isExpanded && t(text)}
      </ReadMore>
    )
  );
};

export default CursorTracker;
