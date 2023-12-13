export const slideFromLeftAnimation = {
  initial: { left: "-100%" },
  animate: { left: 0 },
  exit: { left: "-100%" },
  transition: { duration: 0.225 },
};

export const appearAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.225 },
};

export const staggerChildrenAnimation = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
  item: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};
