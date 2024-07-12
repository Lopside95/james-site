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
  useScroll,
} from "framer-motion";
import { Button } from "../ui/button";
import {
  backsideCardVariants,
  backsideVariants,
  designCardVariants,
  designVariants,
  donwloadVariants,
  downloadCardVariants,
} from "@/helpers/helpers";
import { Milestone } from "lucide-react";

type ImageProps = "download" | "design" | "backside";

export type AnimateProps = {
  opacity?: number;
  top?: number;
  left?: number;
  transition?: {};
  duration?: number;
  right?: number;
};

const CaseStudy = () => {
  const [currentGroup, setCurrentGroup] = useState<ImageProps>("download");
  const itemGroups: string[] = ["download", "design", "backside"];
  const imageControls = useAnimationControls();
  const cardControls = useAnimationControls();
  const tapControls = useAnimationControls();
  const currentIndex = itemGroups.indexOf(currentGroup);

  const contRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  console.log("scrollY", scrollY);

  const handleNext = async () => {
    const nextGroup = itemGroups.at(currentIndex + 1);

    if (nextGroup !== undefined) {
      imageControls.start(`${currentGroup}Hide`);
      cardControls.start(`${currentGroup}Hide`);
    }

    imageControls.start(`${nextGroup}In`);
    cardControls.start(`${nextGroup}In`);

    if (nextGroup !== undefined) {
      setCurrentGroup(nextGroup as ImageProps);
    }
  };

  const imageFunc = (img: string) => {
    return imageControls.start(currentGroup + img);
  };

  const handlePrev = () => {
    const prevGroup = itemGroups.at(currentIndex - 1);

    if (currentIndex !== 0) {
      imageFunc("Out");
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
    <div className="flex w-full relative h-[500px] bg-blue-100 " ref={contRef}>
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
        variants={downloadCardVariants}
        transition={{
          duration: 1,
        }}
      >
        <RegularsCard
          desc="Card creation is a 3-step process, beggining with the form, or 'Card Page', which visitors will use to download their cards. "
          title="Download Card"
        />
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
        transition={{
          duration: 1,
        }}
      >
        <RegularsCard desc="deisfifnsdin" title="Design card" />
      </motion.div>
      <motion.div
        animate={imageControls}
        className="absolute top-10"
        initial="initial"
        transition={{
          duration: 1,
        }}
        variants={backsideVariants}
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
        animate={cardControls}
        className="absolute"
        initial="initial"
        variants={backsideCardVariants}
        transition={{
          duration: 1,
        }}
      >
        <RegularsCard desc="Backside" title="this is the backside" />
      </motion.div>
      <motion.div
        initial={{ rotateY: "180deg" }}
        className="absolute bottom-10 cursor-pointer right-20"
        // whileTap={{
        //   rotateY: "360deg",
        //   transition: {
        //     duration: 0.8,
        //   },
        // }}
        onClick={() => {
          handlePrev();
          tapControls.start("spinPrev");
        }}
        variants={{
          spinPrev: {
            rotateY: "540deg",
            transition: {
              duration: 0.8,
            },
          },
          // spinAgain: {
          //   rotateY: "720deg",
          //   transition: {
          //     duration: 0.8,
          //   },
          // },
          // spinBack: {
          //   rotateY: "0deg",
          //   transition: {
          //     duration: 0.8,
          //   },
          // },
        }}
        animate={tapControls}
        // onClick={tapControls.start({
        //   rotateY: "360deg",
        //   transition: {
        //     duration: 0.8
        //   }
        // })}
      >
        <Milestone className=" w-10 h-10" fill="brown" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 cursor-pointer right-10"
        // whileTap={{
        //   rotateY: "360deg",
        //   transition: {
        //     duration: 0.8,
        //   },
        // }}
        onClick={() => {
          handleNext();
          tapControls.start("spin");
        }}
        variants={{
          spin: {
            rotateY: "360deg",
            transition: {
              duration: 0.8,
            },
          },
          spinAgain: {
            rotateY: "720deg",
            transition: {
              duration: 0.8,
            },
          },
          spinBack: {
            rotateY: "0deg",
            transition: {
              duration: 0.8,
            },
          },
        }}
        animate={tapControls}
        // onClick={tapControls.start({
        //   rotateY: "360deg",
        //   transition: {
        //     duration: 0.8
        //   }
        // })}
      >
        <Milestone className=" w-10 h-10" fill="brown" />
      </motion.div>
      <Button onClick={() => tapControls.start("spinBack")}>SpinBackS</Button>
      <Button onClick={() => tapControls.start("spinAgain")}>Spin1</Button>
      <Button onClick={handleNext}>Next</Button>
      <Button onClick={handlePrev}>Back</Button>
    </div>
  );
};

export default CaseStudy;
