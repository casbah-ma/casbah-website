export const arrowVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const textAnimate = {
  initial: {
    y: '-100%',
  },
  open: {
    y: '0%',
    transition: {
      duration: 1.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  exit: {
    y: '-100%',
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export const ImageAnimation = {
  initial: {
    y: '100%',
    x: '-50%',
  },
  open: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  exit: {
    y: '100%',
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};
