export const wrapperVariant = {
  visible: {
    transition: {
      delay: 0.2,
      staggerChildren: 1,
    },
  },
};

export const imageVariant = {
  hidden: {
    scale: 0.5,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeIn',
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
      staggerChildren: 0.1,
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
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};
