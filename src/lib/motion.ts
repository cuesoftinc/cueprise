export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number,
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideInLeft = (delay: number, duration: number) => {
  return {
    hidden: {
      x: "-100%",
    },
    show: {
      x: 0,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideInRight = (delay: number, duration: number) => {
  return {
    hidden: {
      x: "100%",
    },
    show: {
      x: 0,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
