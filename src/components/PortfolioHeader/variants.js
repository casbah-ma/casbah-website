export const wrapperVariant = {
  visible: {
    transition: {
      delay: 0.2,
      staggerChildren: 0.2,
      ease: 'easeOut',
    },
  },

  exit: {
    y: '-200%',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const letterVariant = {
  hidden: {
    y: '150%',
    color: 'white',
  },
  visible: {
    y: 0,
    color: '#000219',
    transition: { duration: 0.5 },
  },
};
