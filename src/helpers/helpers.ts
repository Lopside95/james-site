// import { useTransform } from "framer-motion";

// export const scrollAction = useTransform(scrollY, (val) => {
//     const swing = 600;
//     const progress = val % swing;
//     return progress < 300 ? 50 - progress * 0.5 : 50 - (600 - progress) * 0.5;
//   });

export const imageInit = {
  opacity: 0,
  left: -100,
};

export const imageIn = {
  opacity: 1,
  left: 10,
};

export const imageOut = {
  opacity: 0,
  left: -100,
  transition: {
    duration: 0.5,
  },
};

export const imageShow = {
  opacity: 1,
  transition: {
    duration: 0.5,
  },
};

export const imageHide = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};
