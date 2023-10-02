import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const HeroSVG = forwardRef(function HeroSVG(
  { className, variants, initial, animate, exit, ...rest },
  ref
) {
  return (
    <motion.svg
      ref={ref}
      width="700"
      height="1068"
      viewBox="0 0 700 1068"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      {...rest}
    >
      <path d="M435.93 102L511.93 64L513 142L435.93 102Z" fill="#000F9F" />
      <path d="M582.93 155L637.93 120L641 197L582.93 155Z" fill="#000F9F" />
      <path
        d="M269.829 35.1951L355 0L353 1068H0V144.132L64 119L63.6864 169.272L118.93 154L118.993 94.6916L192 64L191.897 126.535L269.93 113L269.829 35.1951Z"
        fill="#000F9F"
      />
      <path
        d="M436.136 35.1951L355 0L353 1068H699.711L699.855 144.132L637.93 120L637.611 169.272L582.93 155L583.557 94.6916L511.93 64L512.303 126.535L435.93 102L436.136 35.1951Z"
        fill="#FF5100"
      />
      <path d="M118.93 154L64 119L62.5 174L118.93 154Z" fill="#FF5100" />
      <path d="M269.93 113L192 64L190 142L269.93 113Z" fill="#FF5100" />
    </motion.svg>
  );
});

export default HeroSVG;
