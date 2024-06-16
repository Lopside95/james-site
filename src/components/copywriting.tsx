/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "./ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useEffect, useState } from "react";

const Copywriting = () => {
  return (
    <div className="py-5 px-1 flex flex-col h-full bg-transparent">
      <div className="flex items-center w-full justify-between px-4  ">
        <Dialog>
          <DialogTrigger>
            <p className="text-xl sm:text-sm">
              <span className="underline underline-offset-8">Cycling</span> -
              DSV
            </p>
          </DialogTrigger>
          <DialogContent className="w-full max-w-3xl">
            <Image
              src="/bikeAdText.png"
              width={500}
              height={500}
              alt="Bicycle ad text"
              className="w-full"
            />
          </DialogContent>
        </Dialog>
        <Image
          src="/bikeAd.png"
          alt="DSV bicycle ad"
          className="w-80 sm:w-1/2 object-contain self-center py-8"
          width={500}
          height={500}
        />
      </div>
      <p className="sm:text-sm  text-2xl  px-2 py-10">
        The value of logistics lies in what it allows us to do with the
        equipment. DSV is actively involved in cycling and cycling projects,
        such as the DSV_SHIFT_ACADEMY, which is a youth program dedicate to
        developing up-and-coming riders with riding skills as well as life
        skills.
      </p>
      <div className="flex items-center w-full justify-evenly ">
        <Popover>
          <PopoverTrigger className="sm:text-sm max-sm:leading-loose text-xl pr-5 ">
            <p>
              <span className=" underline underline-offset-4">
                Copy editing
              </span>{" "}
              for Monkeyland Primate Sanctuary
            </p>
          </PopoverTrigger>
          <PopoverContent
            style={{ animationDuration: "3s" }}
            className="  w-[30rem] flex justify-evenly bg-base-bg shadow-none  text-lg text-base-txtClr -mt-12 border-none "
          >
            <Link
              className="pl-3 underline underline-offset-4"
              href="https://www.monkeyland.co.za/page/monkeyland-in-a-nutshell"
              target="_blank"
            >
              Monkeyland in a nutshell
            </Link>
            |
            <Link
              className="pr-3 underline underline-offset-4"
              href="https://www.monkeyland.co.za/page/our-vision"
              target="_blank"
            >
              Our vision
            </Link>
          </PopoverContent>
        </Popover>
        <Image
          width={500}
          height={500}
          src="/monkeyland.jpg"
          alt="Monkeyland iamge"
          className="w-80 sm:w-1/2 object-contain self-center py-8"
        />
      </div>

      <div className="flex flex-col h-full py-10 w-full ">
        <h1 className="sm:text-xs text-2xl  px-2">
          As a creative and perceptive person with an appreciation for
          well-developed concepts, as well as the finer details of writing, I
          write insightful work that remains true to an overarching narrative,
          however loosely defined or informal that narrative may be.
          <br />
          This is important because no story exists in isolation – they rely on
          past stories, needing to understand and engage with them in order to
          be effective as they act in concert with the narratives around them.
          Storytelling is one of my strengths I value most and as a copywriter
          it is an invaluable tool.
        </h1>
      </div>
      <div className="flex items-center w-full justify-between  ">
        <Dialog>
          <DialogTrigger>
            <h1 className="sm:text-xs max-sm:w-3/4 text-xl">
              <span className="underline underline-offset-4">
                Zero-error warehousing
              </span>{" "}
              - DSV
            </h1>
          </DialogTrigger>
          <DialogContent className="w-full max-w-xl">
            <Image
              src="/drones-writing.png"
              width={500}
              height={500}
              alt="Drones ad text"
              className="w-full"
            />
          </DialogContent>
        </Dialog>
        <Image
          src="/drones.png"
          alt="DSV drones ad"
          className="sm:w-1/2 w-80 object-contain self-center py-8"
          width={500}
          height={500}
        />
      </div>
      <h1 className="text-2xl sm:text-xs  px-2 py-10">
        As one of the top global transport and logistics companies, much of the
        work I’ve done for DSV, through Serious Moonlight Consulting, focusses
        on technology and innovation. This ad showcases their use of drones as
        they progress towards ‘zero-error warehousing’.
      </h1>

      <div className="flex items-center w-full justify-evenly sm:text-xs text-xl ">
        <p>There&apos;s Always Time For A Short Story</p>

        <img
          src="/shortStories.jpeg"
          alt=""
          className="w-80 object-contain self-center pt-10"
        />
      </div>
      <div>
        <h1 className="text-2xl px-2  sm:text-xs py-10" id="storyEl">
          This Red & Yellow project charged us with developing a promotional
          event for Exclusive Books. People often wish that they read more and
          one of the common issues faced is a shortage of time. We realised
          short stories – in truth these are vignettes – can be read quickly and
          in any setting. During the promotion, stories were placed around the
          mall - on receipts, in elevators, and on limited edition packets.
        </h1>
      </div>
    </div>
  );
};

export default Copywriting;
