import Image from "next/image";
import { OtherCard } from "./regulars";
import RegularsCard from "./regularsCard";
import { use, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useAnimationControls,
  AnimatePresence,
  backInOut,
} from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { imageIn, imageInit, imageOut } from "@/helpers/helpers";

type ImageProps = "download" | "design" | "backside";
// type AnimateProps = "opacity" | "left" | "transition" | "duration"

type AnimateProps = {
  opacity?: number;
  left?: number;
  transition?: {};
  duration?: number;
};
// opacity: 0,
// left: -100,
// transition: {
//   duration: 0.5,
// },
type ItemProps = ["download", "design", "backside"];
type ImageControls = "downloadIn" | "downloadOut" | "designIn" | "designOut";

const FixedScroll = () => {
  const [isDownload, setIsDownload] = useState<boolean>();
  const [isDesign, setIsDesign] = useState<boolean>();
  const [isBack, setIsBack] = useState<boolean>();
  const itemGroups: string[] = ["download", "design", "backside"];
  const [currentGroup, setCurrentGroup] = useState<ImageProps>("download");
  const imageControls = useAnimationControls();

  const dlRef = useRef(null);
  const designRef = useRef(null);
  const backRef = useRef(null);

  const getGroup = () => {};

  const currentIndex = itemGroups.indexOf(currentGroup);
  const nextGroup = itemGroups.at(currentIndex + 1);
  const handleNext = async () => {
    await imageControls.start(`${currentGroup}In`);
  };

  const handleMiddle = () => {};

  const handleImageIn = () => {
    imageControls.start(`${currentGroup}In`);
  };

  useEffect(() => {
    if (nextGroup !== undefined) {
      setCurrentGroup(nextGroup as ImageProps);
    }
  }, [currentGroup]);

  type Variants = {
    [key: string]: {};
  };

  const variants: Variants = itemGroups.reduce((acc, item) => {
    acc[item + "In"] = imageIn;
    acc[item + "Out"] = imageOut;

    return acc;
  }, {} as Variants);

  return (
    <div className="flex w-full relative h-[500px] bg-blue-100 overflow-x-hidden">
      {itemGroups.map((item) => {
        return (
          <motion.div
            key={item}
            animate={imageControls}
            className="absolute top-10"
            // initial="initial"
            initial={{
              opacity: 0,
              left: -100,
            }}
            variants={variants}
          >
            <Image
              alt=" "
              className="w-96"
              height={600}
              src={`/regulars/${item}.png`}
              width={600}
            />
          </motion.div>
        );
      })}

      <motion.div
        animate={{
          top: 10,
          opacity: 1,
          right: 10,
        }}
        className="absolute"
        initial={{
          opacity: 0,
          top: -100,
          right: 10,
        }}
        ref={designRef}
        transition={{
          duration: 1,
        }}
      >
        <Card className="flex flex-col items-center w-80 h-[300px] border justify-between bg-green-100">
          <CardTitle>Design card</CardTitle>
          <CardDescription></CardDescription>
          <CardContent>
            Here companies create cards
            {/* <Image width={500} height={500} src="" alt="" /> */}
          </CardContent>
        </Card>
      </motion.div>

      <Button onClick={handleNext}>Next</Button>
      <Button onClick={handleImageIn}>come back</Button>
    </div>
  );
};

export default FixedScroll;
{
  /* <motion.div>
        <Image
          alt=" "
          className=""
          height={600}
          src="/regulars/design.png"
          width={600}
        />
      </motion.div>
      <motion.div>
        <Image
          alt=" "
          className=""
          height={600}
          src="/regulars/backside.png"
          width={600}
        />
      </motion.div> */
}

//   const handleImage = () => {
//     // controls.start("animate");
//     //   controls.start({
//     //     initial: {
//     //         opacity: 0,
//     //         left: -100,
//     //       },
//     //       animate={{
//     //         opacity: 1,
//     //         left: 10,
//     //       }}
//     //       transition={{
//     //         duration: 1,
//     //       }}
//     //   })
//   };

//   const imageVariant = {
//     initial: {
//       opacity: 0,
//       left: -100,
//     },
//     animate: {
//       opacity: 1,
//       left: 10,
//     },
//     transition: {
//       duration: 1,
//     },
//   };

{
  /* <AnimatePresence>
        <motion.div
          className="absolute top-10"
          initial={{
            opacity: 0,
            left: -100,
          }}
          animate={{
            opacity: 1,
            left: 10,
          }}
          transition={{
            ease: backInOut,
            duration: 1,
          }}
          variants={{
            exit: {
              scale: 0,
            },
          }}
          controls={controls}
          //   exit={{
          //     scale: 0,
          //   }}
        >
          <Image
            alt=""
            className="w-96"
            height={600}
            src="/regulars/download.png"
            width={600}
          />
        </motion.div>
      </AnimatePresence> */
}

{
  /* <RegularsCard
desc="This is the download page"
image="/regulars/download.png"
title="Download Page"
/>
<RegularsCard
desc="This is the design page"
image="/regulars/design.png"
title="Design Page"
/>
<RegularsCard
desc="This is the back"
image="/regulars/backside.png"
title="Backside"
/> */
}
