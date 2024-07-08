import TechStack from "@home/techStack";
import Intro from "@home/Intro";
import GeneralInfo from "@home/generalInfo";
import Experience from "@/components/cv/experience";
import Education from "@/components/cv/education";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import Hammer from "@/components/hammer";
import Nail from "@/components/nail";
import UpHammer from "@/components/upHammer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  return (
    <div className="sm:w-full sm:items-center sm:align-middle flex flex-col min-h-screen ">
      <section className="sm:w-3/5">
        <Intro />
        {/* <article className="flex ">
          <GeneralInfo />
        </article> */}
        <TechStack />
        {/* <p className="pl-6 text-xl py-3 ">
          React | TypeScript | Next.js | Tailwind CSS | tRPC | Prisma ORM |
          Mongo DB | Git
        </p> */}
        <article className="flex">
          <Experience />
        </article>
        <article>
          <Education />
        </article>
      </section>
      <div className="flex flex-col justify-between h-[200px]">
        {/* <UpHammer /> */}
        {/* <Nail /> */}
      </div>
      <Hammer />
    </div>
  );
}
