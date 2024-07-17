import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Hammer = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const [isVisisble, setIsVisible] = useState<boolean>(true);

  const [rotation, setrotation] = useState();

  const swingHammer = useTransform(scrollYProgress, [0, 1], [50, -45]);

  return (
    <motion.div
      className="fixed right-24 top-24 w-20 lg2:w-32 lg:w-22"
      style={{
        x: 49,
        y: -4,
        scale: 1,
        rotate: swingHammer,
      }}
    >
      <Image alt="" className="" height={400} src="/hammer.png" width={400} />
    </motion.div>
  );
};

export default Hammer;
