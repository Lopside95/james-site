import Image from "next/image";
import { OtherCard } from "./regulars";
import RegularsCard from "./regularsCard";
import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useAnimationControls,
  AnimatePresence,
  backInOut,
} from "framer-motion";
import { Button } from "../ui/button";

const CaseStudy = () => {
  const [isDownload, setIsDownload] = useState<boolean>();
  const [isDesign, setIsDesign] = useState<boolean>();
  const [isBack, setIsBack] = useState<boolean>();
  const imageControls = useAnimationControls();

  const handleImageOut = () => {
    imageControls.start("slideOut");
  };

  const handleImageIn = () => {
    imageControls.start("slideIn");
  };

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

  const initImage = {
    opacity: 0,
    left: -100,
  };

  const animateImage = {
    opacity: 1,
    left: 10,
  };

  useEffect(() => {
    handleImageIn();
  }, []);

  return (
    <div className="flex w-full relative h-[500px] bg-blue-100 overflow-x-hidden">
      {/* <AnimatePresence>
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
      </AnimatePresence> */}

      <motion.div
        className="absolute top-10"
        variants={{
          initial: {
            opacity: 0,
            left: -100,
          },
          slideIn: {
            opacity: 1,
            left: 10,
          },
          slideOut: {
            opacity: 0,
            left: -100,
          },
        }}
        initial="initial"
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
        className="absolute"
        initial={{
          opacity: 0,
          top: -100,
          right: 10,
        }}
        animate={{
          top: 10,
          opacity: 1,
          right: 10,
        }}
        transition={{
          duration: 1,
        }}
      >
        <OtherCard />
      </motion.div>
      <Button onClick={handleImageOut}>Next</Button>
      <Button onClick={handleImageIn}>come back</Button>
      {/* <motion.div>
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
      </motion.div> */}
    </div>
  );
};

export default CaseStudy;

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
