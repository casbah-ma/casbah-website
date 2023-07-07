export const arrowsVariant = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const arrowVariant = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
