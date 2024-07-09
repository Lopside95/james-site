import { ArrowBigRight } from "lucide-react";
import RegularsCard from "./regularsCard";
import {
  Variants,
  motion,
  transform,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Image from "next/image";
import { useRef } from "react";

const Regulars = () => {
  //   const cardVariants: Variants = {
  //     offScreen: {
  //       x: 300,
  //     },
  //     onscreen: {
  //       x: 50,
  //       //   rotate: -10,
  //       transition: {
  //         type: "spring",
  //         bounce: 0.4,
  //         duration: 0.8,
  //       },
  //     },
  //   };

  const contRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  const dlRef = useRef(null);
  const designRef = useRef(null);
  const backRef = useRef(null);

  const { scrollYProgress, scrollXProgress, scrollY } = useScroll({
    container: contRef,
  });
  //   const slideX = useTransform(scrollYProgress, [0, 0.5, 1]);

  //   const { scrollYProgress } = useScroll({
  //     target: contRef,
  //     offset: ["start start", "end end"],
  //   });

  const handleScroll = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0", "50%", "100%"]
  );

  const yVal = scrollYProgress.get();

  console.log("xVal", yVal);

  //   console.log("scrollYProgress", scrollYProgress);

  //   const {scrollXProgress} = useScroll

  // const handleX = useTransform(
  //   scrollYProgress,
  //   [0, 0.6, 1],
  //   ["100%", "80%", "-20%"]
  // );
  const handleX = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["0", "115%", "185%"]
  );

  // const handleY = useTransform(scrollY, [0, 1])

  // const dlInView = useInView(dlRef, {margin:  })

  // const handleY = useTransform(scrollXProgress, [0, 1], ["0", "0"]);
  return (
    <div
      className="flex relative w-full h-[400px] overflow-x-hidden gap-5  "
      ref={contRef}
    >
      {/* <ArrowBigRight className="w-20 h-auto " /> */}
      <div>
        <motion.div
          className="flex flex-row-reverse w-full pt-10 "
          style={{
            x: handleX,
            y: scrollY,
          }}

          // whileInView={{ opacity: 1 }}
          //   style={{
          //     transform: {
          //         x: handleScroll
          //     }
          //   }}
          // style={{
          //     transform:
          // }}

          // initial={{
          //   x: 0,
          // }}
          // animate={{
          //   scaleX: scrollYProgress,
          // }}
        >
          <Image
            alt=" "
            className="  p-5"
            height={600}
            src="/regulars/download.png"
            width={600}
          />
          <Image
            alt=" "
            className="p-5"
            height={600}
            src="/regulars/design.png"
            width={600}
          />
          <Image
            alt=" "
            className=" p-5"
            height={600}
            src="/regulars/backside.png"
            width={600}
          />
        </motion.div>
      </div>

      <div
        ref={cardRef}
        className="justify-self-end z-20 gap-10 bg-base-bg h-[200%] flex flex-col pb-5 "
      >
        {/* <OtherCard />
        <OtherCard />
        <OtherCard /> */}
      </div>
    </div>
  );
};

export default Regulars;

const DownloadCard = () => {
  return (
    <RegularsCard
      desc="This is the download page"
      image="/regulars/download.png"
      title="Download Page"
    />
  );
};

const DesignCard = () => {
  <RegularsCard
    desc="This is the design page"
    image="/regulars/design.png"
    title="Design Page"
  />;
};
export const OtherCard = () => {
  return (
    <div>
      <Card className="flex flex-col items-center w-80 h-[300px] border justify-between bg-green-100">
        <CardTitle>Card</CardTitle>
        <CardDescription></CardDescription>
        <CardContent>
          Here companies create cards
          {/* <Image width={500} height={500} src="" alt="" /> */}
        </CardContent>
      </Card>
    </div>
  );
};
