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

const CaseStudy = () => {
  const [isDownload, setIsDownload] = useState<boolean>();
  const [isDesign, setIsDesign] = useState<boolean>();
  const [isBack, setIsBack] = useState<boolean>();
  const itemGroups: string[] = ["download", "design", "backside"];
  const [currentGroup, setCurrentGroup] = useState<ImageProps>("download");
  const imageControls = useAnimationControls();

  const dlRef = useRef(null);
  const designRef = useRef(null);
  const backRef = useRef(null);

  // const handleNext = async () => {
  //   if (currentGroup === "download") {
  //     await imageControls.start("downloadOut");
  //     await imageControls.start("designIn");
  //     setCurrentGroup("design");
  //     return;
  //   }

  //   // if (currentGroup === "design") {
  //   //   await imageControls.start("designOut");
  //   //   await imageControls.start("backIn");
  //   //   setCurrentGroup("backside");
  //   // }

  //   // imageControls.start("imageOut");
  // };

  const getGroup = () => {};

  const currentIndex = itemGroups.indexOf(currentGroup);
  const handleNext = async () => {
    const nextGroup = itemGroups.at(currentIndex + 1);
    await imageControls.start(`${currentGroup}In`);

    if (nextGroup !== undefined) {
      setCurrentGroup(nextGroup as ImageProps);
    }
  };

  // useEffect(() => {
  // if (nextGroup !== undefined) {
  //   setCurrentGroup(nextGroup);
  // }
  // })

  // useEffect(() => {
  //   console.log('currentIndex', currentIndex)
  //   handleNext();
  // }, []);

  const handleMiddle = () => {};

  const handleImageIn = () => {
    imageControls.start(`${currentGroup}In`);
  };

  useEffect(() => {
    handleImageIn();
  }, []);

  return (
    <div className="flex w-full relative h-[500px] bg-blue-100 overflow-x-hidden">
      <motion.div
        animate={imageControls}
        className="absolute top-10"
        initial="initial"
        ref={designRef}
        transition={{
          duration: 1,
        }}
        variants={{
          initial: imageInit,
          downloadOut: imageOut,
          downloadIn: imageIn,
        }}
      >
        <Image
          alt=" "
          className="w-96"
          height={600}
          src="/regulars/download.png"
          width={600}
        />
      </motion.div>
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
          <CardContent>Here companies create cards</CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="absolute top-10"
        initial="initial"
        ref={designRef}
        transition={{
          duration: 1,
        }}
        variants={{
          initial: imageInit,
          designIn: imageIn,
          designOut: imageOut,
        }}
        animate={imageControls}
        // initial={initImage}
        // animate={animateImage}
        // transition={{
        //   duration: 1,
        // }}
      >
        <Image
          alt=" "
          className="w-96"
          height={600}
          src="/regulars/design.png"
          width={600}
        />
      </motion.div>
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
          <CardTitle>Download Card</CardTitle>
          <CardDescription></CardDescription>
          <CardContent>
            Here companies create cards
            {/* <Image width={500} height={500} src="" alt="" /> */}
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="absolute top-10"
        initial="initial"
        ref={backRef}
        transition={{
          duration: 1,
        }}
        variants={{
          initial: imageInit,
          backsideIn: imageIn,
          backsideOut: imageOut,
        }}
        animate={imageControls}
        // initial={initImage}
        // animate={animateImage}
        // transition={{
        //   duration: 1,
        // }}
      >
        <Image
          alt=" "
          className="w-96"
          height={600}
          src="/regulars/backside.png"
          width={600}
        />
      </motion.div>
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
        ref={backRef}
        transition={{
          duration: 1,
        }}
      >
        <Card className="flex flex-col items-center w-80 h-[300px] border justify-between bg-green-100">
          <CardTitle>Backside</CardTitle>
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

export default CaseStudy;
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