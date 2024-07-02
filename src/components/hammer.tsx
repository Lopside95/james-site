import { motion, useScroll } from "framer-motion";
import Image from "next/image";

const Hammer = () => {
  const scrollProgress = useScroll();

  return (
    <motion.div
    //   animate={{
    //     x: 49,
    //     y: -4,
    //     scale: 1,
    //     rotate: 0,
    //   }}
    >
      <Image
        alt=""
        className="fixed right-16 top-20 w-40"
        height={400}
        src="/hammer.png"
        width={400}
      />
    </motion.div>
  );
};

export default Hammer;
