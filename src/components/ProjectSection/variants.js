export const wrapperVariant = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
  exit: { transition: { when: 'afterChildren' } },
};

export const imageVariant = {
  hidden: {
    y: '100%',
    scale: 0.5,
  },
  visible: {
    y: [null, 0],
    scale: [0.5, 0.5, 1],
    transition: {
      duration: 1,
      ease: 'easeIn',
      y: {
        duration: 0.5,
      },
    },
  },
};

export const imageVariant2 = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
};

export const contentVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const tagsVariant = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const tagVariant = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
  exit: {
    y: '-100%',
  },
};

export const titleVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
};
