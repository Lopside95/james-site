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
  backsideCardVariants,
  backsideVariants,
  designCardVariants,
  designVariants,
  donwloadVariants,
  downloadCardVariants,
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

const CaseStudy = () => {
  const [currentGroup, setCurrentGroup] = useState<ImageProps>("download");
  const itemGroups: string[] = ["download", "design", "backside"];
  const imageControls = useAnimationControls();
  const cardControls = useAnimationControls();
  const currentIndex = itemGroups.indexOf(currentGroup);

  const handleNext = async () => {
    const nextGroup = itemGroups.at(currentIndex + 1);

    if (nextGroup !== undefined) {
      imageControls.start(`${currentGroup}Hide`);
      cardControls.start(`${currentGroup}Hide`);
    }

    await imageControls.start(`${nextGroup}In`);
    await cardControls.start(`${nextGroup}In`);
    if (nextGroup !== undefined) {
      setCurrentGroup(nextGroup as ImageProps);
    }
  };

  const handlePrev = () => {
    const prevGroup = itemGroups.at(currentIndex - 1);

    if (currentIndex !== 0) {
      imageControls.start(`${currentGroup}Out`);
      cardControls.start(`${currentGroup}Out`);
      imageControls.start(`${prevGroup}Show`);
      cardControls.start(`${prevGroup}Show`);
    }

    if (prevGroup !== undefined && currentIndex !== 0) {
      setCurrentGroup(prevGroup as ImageProps);
    }
  };

  useEffect(() => {
    imageControls.start("downloadIn");
    cardControls.start("downloadIn");
  }, []);

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
        animate={cardControls}
        className="absolute"
        initial="initial"
        // animate={{
        // top: 10,
        // opacity: 1,
        // right: 10,
        // }}
        variants={downloadCardVariants}
        // initial={{
        //   opacity: 0,
        //   top: -100,
        //   right: 10,
        // }}
        transition={{
          duration: 1,
        }}
      >
        <RegularsCard desc="this is the download card" title="Download Card" />
      </motion.div>
      <motion.div
        animate={imageControls}
        className="absolute top-10"
        initial="initial"
        transition={{
          duration: 1,
        }}
        variants={designVariants}
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
        animate={cardControls}
        className="absolute"
        initial="initial"
        variants={designCardVariants}
        // animate={{
        //   top: 10,
        //   opacity: 1,
        //   right: 10,
        // }}
        // className="absolute"
        // initial={{
        //   opacity: 0,
        //   top: -100,
        //   right: 10,
        // }}
        transition={{
          duration: 1,
        }}
      >
        <RegularsCard desc="deisfifnsdin" title="Design card" />
        {/* <Card className="flex flex-col items-center w-80 h-[300px] border justify-between bg-green-100">
          <CardTitle>Download Card</CardTitle>
          <CardDescription></CardDescription>
          <CardContent>
            Here companies create cards
          </CardContent>
        </Card> */}
      </motion.div>
      <motion.div
        animate={imageControls}
        className="absolute top-10"
        initial="initial"
        transition={{
          duration: 1,
        }}
        variants={backsideVariants}
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
        // animate={{
        //   top: 10,
        //   opacity: 1,
        //   right: 10,
        // }}
        animate={cardControls}
        className="absolute"
        initial="initial"
        // initial={{
        //   opacity: 0,
        //   top: -100,
        //   right: 10,
        // }}
        variants={backsideCardVariants}
        transition={{
          duration: 1,
        }}
      >
        <RegularsCard desc="Backside" title="this is the backside" />
        {/* <Card className="flex flex-col items-center w-80 h-[300px] border justify-between bg-green-100">
          <CardTitle>Backside</CardTitle>
          <CardDescription></CardDescription>
          <CardContent>
            Here companies create cards
          </CardContent>
        </Card> */}
      </motion.div>
      <Button onClick={handleNext}>Next</Button>
      <Button onClick={handlePrev}>Back</Button>
      {/* <Button onClick={handleImageIn}>come back</Button> */}
      {/* <Button onClick={handleImageHide}>Hide</Button>
      <Button onClick={handleImageShow}>Show</Button> */}
    </div>
  );
};

export default CaseStudy;

// const handleImageHide = () => {
//   imageControls.start(`${currentGroup}Hide`);
//   console.log("hiding image, group:", currentGroup);
// };

// const handleImageShow = () => {
//   imageControls.start(`${currentGroup}Show`);
//   console.log("showing image, group:", currentGroup);
// };
