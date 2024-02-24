/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "../components/ui/card";
import TechStack from "../components/techStack";
import Intro from "../components/Intro";
import RootLayout from "../layout";
import NavItems from "../components/navItems";
import GeneralInfo from "../components/generalInfo";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";

export default function Home() {
  const router = useRouter();

  const [isHover, setIsHover] = useState<boolean>();

  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen bg-base-bg text-base-txtClr ">
      <Navbar />
      <section className="w-3/5 pt-8">
        <Intro />
        <article className="flex">
          <GeneralInfo />
          <div className="relative flex text-transparent items-center justify-center hover:text-base-txtClr hover:ease-in-out duration-500 h-3/4   ">
            <Link
              href="/cv"
              className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 text-2xl brightness-125 -translate-y-1/2  "
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Hero Builder
              <br />
              <span className="text-sm">*In progress</span>
            </Link>
            <img
              src="/boots.jpg"
              className={`cursor-pointer object-contain w-full h-full hover:ease-in-out transition-all duration-500 hover:brightness-[.2] ${
                isHover && "brightness-[.2]"
              } `}
              alt=""
              onClick={() => router.push("/cv")}
            />
          </div>
        </article>
        <TechStack />
      </section>
      <Footer />
    </div>
  );
}
