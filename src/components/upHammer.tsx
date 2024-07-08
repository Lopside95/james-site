import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const UpHammer = () => {
  const x = useMotionValue(10);

  return <motion.div style={{ x }} />;
};

export default UpHammer;
