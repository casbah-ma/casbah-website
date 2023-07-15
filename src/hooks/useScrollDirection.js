const { useState, useEffect, useRef } = require('react');

const useScrollDirection = () => {
  const ref = useRef(null);
  const [y, setY] = useState(null);
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    const scrollWrapper = ref.current;
    setY(scrollWrapper?.scrollTop);
    const handleScroll = () => {
      if (y > scrollWrapper?.scrollTop) {
        setScrollDirection('up');
      } else if (y < scrollWrapper?.scrollTop) {
        setScrollDirection('down');
      }
      setY(scrollWrapper?.scrollTop);
    };
    scrollWrapper?.addEventListener('scroll', handleScroll);

    return () => scrollWrapper?.removeEventListener('scroll', handleScroll);
  }, [y]);
  return { ref, scrollDirection };
};

export default useScrollDirection;
