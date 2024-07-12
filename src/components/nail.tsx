import {
  motion,
  useScroll,
  useTransform,
  scroll,
  progress,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Nail = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  const { scrollYProgress, scrollY } = useScroll();

  const hammerUp = useTransform(scrollYProgress, [1, 0], [-45, 45]);

  const hammerVis = () => {
    if (scrollYProgress.get() < 1) {
      return "visible";
    }
  };

  return (
    <motion.div
      style={{ rotateY: scrollY }}
      className="fixed right-20 top-52 w-10"
    >
      <Image alt="" height={400} src="/screwdriver.svg" width={400} />
    </motion.div>
  );
};

export default Nail;
