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

  // const swingHammer = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  const swingHammer = useTransform(scrollYProgress, [0, 1], [45, -45]);
  //   const swingHammer = useTransform(scrollY, [0, 500], [60, -45]);
  // const hammerUp = useTransform(scrollYProgress, [1, 0], [-45, 45]);

  const [is0, setIs0] = useState<boolean>(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollPrev = scrollY.getPrevious();

    console.log("scrollYProgress", scrollYProgress);

    if (latest < scrollPrev) {
      setIsVisible(false);
    } else if (latest > scrollPrev) {
      setIsVisible(true);
    }
  });

  return (
    <motion.div
      className="fixed right-36 top-24 w-32"
      style={{
        x: 49,
        y: -4,
        scale: 1,
        rotate: swingHammer,
      }}
      //   style={{ rotateY: scrollYProgress }}
    >
      <Image
        alt=""
        className=""
        height={400}
        src="/hammer.png"
        width={400}
        style={{ visibility: isVisisble ? "visible" : "hidden" }}
      />
    </motion.div>
  );
};

export default Hammer;
