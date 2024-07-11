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
import {
  imageHide,
  imageIn,
  imageInit,
  imageOut,
  imageShow,
} from "@/helpers/helpers";

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
  const [currentGroup, setCurrentGroup] = useState<ImageProps>("download");

  const itemGroups: string[] = ["download", "design", "backside"];

  const imageControls = useAnimationControls();

  const getGroup = () => {};

  const currentIndex = itemGroups.indexOf(currentGroup);
  const handleNext = async () => {
    const nextGroup = itemGroups.at(currentIndex + 1);
    await imageControls.start(`${nextGroup}In`);

    console.log("nextGroup", nextGroup);

    if (nextGroup !== undefined) {
      setCurrentGroup(nextGroup as ImageProps);
    }
  };

  const handleMiddle = () => {};

  const handleImageIn = () => {
    imageControls.start("downloadIn");
  };

  const handleImageOut = () => {
    const prevGroup = itemGroups.at(currentIndex - 1);

    if (currentIndex !== 0) {
      imageControls.start(`${currentGroup}Out`);
      imageControls.start(`${prevGroup}Show`);
    }

    // console.log("prevGroup", prevGroup);
    console.log("currentIndex", currentIndex);

    if (prevGroup !== undefined && currentIndex !== 0) {
      setCurrentGroup(prevGroup as ImageProps);
    }
    console.log("currentGroup", currentGroup);
  };

  const handleImageHide = () => {
    imageControls.start(`${currentGroup}Hide`);
    console.log("hiding image, group:", currentGroup);
  };

  const handleImageShow = () => {
    imageControls.start(`${currentGroup}Show`);
    console.log("showing image, group:", currentGroup);
  };

  useEffect(() => {
    handleImageIn();

    console.log("currentGroup", currentGroup);
  }, []);

  const designVariants = {
    initial: imageInit,
    designIn: imageIn,
    designOut: imageOut,
    designShow: imageShow,
    designHide: imageHide,
  };

  const donwloadVariants = {
    initial: imageInit,
    downloadOut: imageOut,
    downloadIn: imageIn,
    downloadShow: imageShow,
    downloadHide: imageHide,
  };

  const backsideVariants = {
    initial: imageInit,
    backsideIn: imageIn,
    backsideOut: imageOut,
    backsideShow: imageShow,
    backsideHide: imageHide,
  };

  return (
    <div className="flex w-full relative h-[500px] bg-blue-100 overflow-x-hidden">
      <motion.div
        animate={imageControls}
        className="absolute top-10"
        initial="initial"
        transition={{
          duration: 1,
        }}
        variants={donwloadVariants}
      >
        <Image
          alt=" "
          className="w-full"
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
        transition={{
          duration: 1,
        }}
      >
        <RegularsCard />
      </motion.div>
      <motion.div
        className="absolute top-10"
        initial="initial"
        transition={{
          duration: 1,
        }}
        variants={designVariants}
        // variants={{
        //   initial: imageInit,
        //   designIn: imageIn,
        //   designOut: imageOut,
        //   designShow: imageShow,
        //   designHide: imageHide,
        // }}
        animate={imageControls}
        // initial={initImage}
        // animate={animateImage}
        // transition={{
        //   duration: 1,
        // }}
      >
        <Image
          alt=" "
          className="w-full"
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
        transition={{
          duration: 1,
        }}
        variants={backsideVariants}
        animate={imageControls}
        // initial={initImage}
        // animate={animateImage}
        // transition={{
        //   duration: 1,
        // }}
      >
        <Image
          alt=" "
          className="w-full"
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
      <Button onClick={handleImageOut}>Back</Button>
      {/* <Button onClick={handleImageIn}>come back</Button> */}
      <Button onClick={handleImageHide}>Hide</Button>
      <Button onClick={handleImageShow}>Show</Button>
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
