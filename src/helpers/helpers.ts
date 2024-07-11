// import { useTransform } from "framer-motion";

// export const scrollAction = useTransform(scrollY, (val) => {
//     const swing = 600;
//     const progress = val % swing;
//     return progress < 300 ? 50 - progress * 0.5 : 50 - (600 - progress) * 0.5;
//   });

export const imageInit = {
  opacity: 0,
  left: -300,
};

export const imageIn = {
  opacity: 1,
  left: 15,
  transition: {
    duration: 0.4,
  },
};

export const imageOut = {
  opacity: 0,
  left: -300,
  transition: {
    duration: 0.2,
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
    duration: 0.2,
  },
};
