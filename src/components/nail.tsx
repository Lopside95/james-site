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

  // const fullPage = scrollYProgress  / 4
  const hammerUp = useTransform(scrollYProgress, [1, 0], [-45, 45]);

  const hammerVis = () => {
    if (scrollYProgress.get() < 1) {
      return "visible";
    }
  };

  return (
    <motion.div
      // style={{ rotateX: scrollY }}

      style={{
        x: -49,
        y: -4,
        scale: 1,
        rotate: hammerUp,
      }}
      // animate={{ x, y, rotate }}
      // transition={{ type: rotate }}
      className="fixed right-20 top-52 w-32"
    >
      <Image
        alt=""
        className="-rotate-[120deg]"
        height={400}
        src="/hammer.png"
        width={400}
      />
    </motion.div>
  );
};

export default Nail;
