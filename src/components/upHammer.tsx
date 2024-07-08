import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const UpHammer = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const pullHammer = useTransform(scrollYProgress, [1, 0], [-45, 165]);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [isVisisble, setIsVisible] = useState<boolean>(false);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   // const current = scrollY.get();
  //   const scrollPrev = scrollY.getPrevious();

  //   console.log("scrollPrev", scrollPrev);

  //   if (latest) console.log("Page scroll: ", latest);
  //   // console.log("scrollY", scrollY);
  // });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollPrev = scrollY.getPrevious();

    if (latest < scrollPrev) {
      setIsVisible(true);
    } else if (latest > scrollPrev) {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      className="fixed right-36 top-24 w-32"
      style={{
        x: 49,
        y: -4,
        scale: 1,
        rotate: pullHammer,
        // opacity: isVisisble ? 1 : 0,
      }}
      //   style={{ rotateY: scrollYProgress }}
    >
      <Image
        alt=""
        className="-rotate-[120deg]"
        height={400}
        src="/hammer.png"
        style={{ visibility: isVisisble ? "visible" : "hidden" }}
        width={400}
      />
    </motion.div>
  );
};

export default UpHammer;
