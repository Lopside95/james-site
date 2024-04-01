import Link from "next/link";
import NavItems from "./navItems";
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
} from "@/components/ui/popover";
import { useRef, useState } from "react";

const Copywriting = () => {
  return (
    <div className="py-5 px-1 flex flex-col h-full bg-transparent">
      <Card className="w-full bg-transparent border-none text-base-txtClr">
        <CardHeader>
          <CardTitle className="text-xl">
            <p>{`My feelings toward long walks on the beach are varied and inconclusive.`}</p>
            <p>{`It’s been several years since I watched a horror film and I don't like olives.`}</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-2xl">
          But I do like writing (copy as well as code)
        </CardContent>
      </Card>

      <div className="flex items-center  w-full justify-evenly ">
        <Popover>
          <PopoverTrigger className=" text-xl pr-5 ">
            <p>
              <span className=" underline underline-offset-8">
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
              {/* <a target="_blank" rel="noopener noreferrer">

              </a> */}
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
        <img
          src="/monkeyland.jpg"
          alt=""
          className="w-80 object-contain self-center py-8"
        />
      </div>

      <div className="flex flex-col h-full w-full ">
        <h1 className="text-xl w-11/12 pl-5">
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
      <div className="flex items-center w-full justify-evenly text-2xl ">
        <p>There&apos;s Always Time For A Short Story</p>

        <img
          src="/shortStories.jpeg"
          alt=""
          className="w-80 object-contain self-center pt-10"
        />
      </div>
      <div>
        <h1 className="text-xl w-11/12 pl-5 py-10" id="storyEl">
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
