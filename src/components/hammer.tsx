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

  const [rotation, setrotation] = useState();

  // const swingHammer = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const swingHammer = useTransform(scrollYProgress, [0, 1], [60, -45]);
  //   const swingHammer = useTransform(scrollY, [0, 500], [60, -45]);
  const hammerUp = useTransform(scrollYProgress, [1, 0], [-45, 45]);
  // const swingHammer = useTransform(scrollY, (val) => {
  //   const swing = 600;
  //   const progress = val % swing;
  //   // console.log("val", val);
  //   console.log("progress", progress);

  //   return progress < 300 ? 45 - progress * 0.5 : 45 - (600 - progress) * 0.5;
  // });

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return (
    <motion.div
      className="fixed right-36 top-24 w-32"
      style={{
        x: 49,
        y: -4,
        scale: 1,
        rotate: hammerUp,
      }}
      //   style={{ rotateY: scrollYProgress }}
    >
      <Image alt="" className="" height={400} src="/hammer.png" width={400} />
    </motion.div>
  );
};

export default Hammer;
