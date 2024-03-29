import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useLocomotive = (threshold = 1, milliSeconds = 1000) => {
  const [visited, setVisited] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const { ref, inView } = useInView({
    threshold,
    onChange: (inView) => {
      if (inView) {
        setVisited(true);
        setIsFixed(false);
        setIsLeaving(false);
      } else if (!inView && visited) {
        setTimeout(() => {
          setIsLeaving(true);
        }, milliSeconds);
        setIsFixed(true);
        setVisited(false);
      }
    },
  });

  const getIsVisible = () => {
    if (inView) {
      return true;
    } else {
      if (isFixed) {
        return !isLeaving;
      }
    }
  };

  return { ref, getIsVisible, isFixed };
};
