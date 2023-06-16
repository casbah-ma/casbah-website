export const wrapperVariant = {
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
  exit: { opacity: 1 },
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

export const titleVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delayChildren: 0.2, // Delay before animating children
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};
