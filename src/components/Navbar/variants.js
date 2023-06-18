export const container = {
  hidden: {},
  visible: (i = 1) => ({
    transition: { staggerChildren: 0.05, delayChildren: i * 0 },
  }),
  click: (i = 1) => ({
    transition: { staggerChildren: 0.05, delayChildren: i * 0 },
  }),
  scroll: (i = 1) => ({
    transition: { staggerChildren: 0.05, delayChildren: i * 0 },
  }),
  
};

export const child = {
  visible: {
    y: [6, 0],
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 200,
    },
  },
  scroll: {
    x: '100vw',
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 200,
    }
  },
  click: {
    y: [6, 0],
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 200,
    },
  },
  hidden: {
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 200,
    },
  },
};
