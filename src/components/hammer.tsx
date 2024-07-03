import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hammer = () => {
  const { scrollYProgress, scrollY } = useScroll();

  //   const swingHammer = useTransform(scrollYProgress, [0, 1], [-45, 45]);
  //   const swingHammer = useTransform(scrollYProgress, [0, 1], [60, -45]);
  //   const swingHammer = useTransform(scrollY, [0, 500], [60, -45]);

  const swingHammer = useTransform(scrollY, (val) => {
    const swing = 600;
    const progress = val % swing;
    return progress < 300 ? 50 - progress * 0.5 : 50 - (600 - progress) * 0.5;
  });

  return (
    <motion.div
      style={{
        x: 49,
        y: -4,
        scale: 1,
        rotate: swingHammer,
      }}
      className="fixed right-20 top-20 w-32"
      //   style={{ rotateY: scrollYProgress }}
    >
      <Image alt="" className="" height={400} src="/hammer.png" width={400} />
    </motion.div>
  );
};

export default Hammer;
