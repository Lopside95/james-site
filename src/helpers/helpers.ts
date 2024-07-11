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

export const cardInit = {
  opacity: 0,
  top: -100,
  right: 10,
};

export const imageIn = {
  opacity: 1,
  left: 15,
  transition: {
    duration: 0.4,
  },
};

export const cardIn = {
  top: 80,
  opacity: 1,
  right: 20,
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

export const cardOut = {
  opacity: 0,
  top: -200,
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
export const cardShow = {
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
export const cardHide = {
  opacity: 0,
  transition: {
    duration: 0.2,
  },
};

export const designCardVariants = {
  initial: cardInit,
  designIn: cardIn,
  designOut: cardOut,
  designShow: cardShow,
  designHide: cardHide,
};
export const downloadCardVariants = {
  initial: cardInit,
  downloadIn: cardIn,
  downloadOut: cardOut,
  downloadShow: cardShow,
  downloadHide: cardHide,
};
export const backsideCardVariants = {
  initial: cardInit,
  backsideIn: cardIn,
  backsideOut: cardOut,
  backsideShow: cardShow,
  backsideHide: cardHide,
};

export const designVariants = {
  initial: imageInit,
  designIn: imageIn,
  designOut: imageOut,
  designShow: imageShow,
  designHide: imageHide,
};

export const donwloadVariants = {
  initial: imageInit,
  downloadOut: imageOut,
  downloadIn: imageIn,
  downloadShow: imageShow,
  downloadHide: imageHide,
};

export const backsideVariants = {
  initial: imageInit,
  backsideIn: imageIn,
  backsideOut: imageOut,
  backsideShow: imageShow,
  backsideHide: imageHide,
};
