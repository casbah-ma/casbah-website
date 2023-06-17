export const paragraphVarinat = {
  hidden: {
    opacity: 0,
    y: '150%',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    y: '-50%',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
