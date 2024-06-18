import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@ui/dialog";
import { useState } from "react";

const Copywriting = () => {
  const [popIsOpen, setPopIsOpen] = useState<boolean>(false);

  // On different screen sizes the underlying text of the monkeyland
  // popover was visible. This makes sure it's invisibleif the popover is open
  const handleClose = () => {
    if (popIsOpen) {
      setPopIsOpen(false);
    }
  };

  return (
    <div
      className="py-5 px-1 flex flex-col h-full bg-transparent"
      onClick={() => handleClose()}
    >
      <div className="flex items-center w-full justify-between px-4  ">
        <Dialog>
          <DialogTrigger>
            <p className="text-2xl ">
              <span className="underline underline-offset-8 sm:pl-20">
                Cycling
              </span>{" "}
              - DSV
            </p>
          </DialogTrigger>
          <DialogContent className="w-full max-w-3xl">
            <Image
              alt="Bicycle ad text"
              className="w-full"
              height={1000}
              src="/bikeAdText.png"
              width={1000}
            />
          </DialogContent>
        </Dialog>
        <Image
          alt="DSV bicycle ad"
          className="w-80 sm:w-[23rem] object-contain self-center py-8"
          height={500}
          src="/bikeAd.png"
          width={500}
        />
      </div>
      <p className="text-2xl sm:text-xl  px-2 py-10">
        The value of logistics lies in what it allows us to do with the
        equipment. DSV is actively involved in cycling and cycling projects,
        such as the DSV_SHIFT_ACADEMY, which is a youth program dedicate to
        developing up-and-coming riders with riding skills as well as life
        skills.
      </p>
      <div className="flex items-center w-full justify-evenly ">
        <Popover>
          <PopoverTrigger className="sm:text-2xl max-sm:leading-loose text-xl pr-5 ">
            <p
              className={popIsOpen ? "text-transparent" : ""}
              onClick={() => setPopIsOpen(true)}
            >
              <span className=" underline underline-offset-8">
                Copy editing
              </span>{" "}
              - Monkeyland Primate Sanctuary
            </p>
          </PopoverTrigger>
          <PopoverContent
            className="  w-[30rem] flex justify-evenly bg-base-bg shadow-none  text-xl text-base-txtClr -mt-12 mr-5 border-none "
            style={{ animationDuration: "3s" }}
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
          alt="Monkeyland iamge"
          className="w-80 sm:w-2/5 object-contain self-center py-8"
          height={500}
          src="/monkeyland.jpg"
          width={500}
        />
      </div>

      <div className="flex flex-col h-full py-10 w-full ">
        <p className=" text-2xl sm:text-xl px-2">
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
        </p>
      </div>
      <div className="flex items-center w-full justify-between  ">
        <Dialog>
          <DialogTrigger>
            <h1 className=" max-sm:w-3/4 sm:pl-10  text-2xl">
              <span className="underline underline-offset-4">
                Zero-error warehousing
              </span>{" "}
              - DSV
            </h1>
          </DialogTrigger>
          <DialogContent className="w-full max-w-xl">
            <Image
              alt="Drones ad text"
              className="w-full"
              height={1000}
              src="/drones-writing.png"
              width={1000}
            />
          </DialogContent>
        </Dialog>
        <Image
          alt="DSV drones ad"
          className="sm:w-1/2 w-80 object-contain self-center py-8"
          height={500}
          src="/drones.png"
          width={500}
        />
      </div>
      <h1 className="text-2xl sm:text-xl   px-2 py-10">
        As one of the top global transport and logistics companies, much of the
        work I’ve done for DSV, through Serious Moonlight Consulting, focusses
        on technology and innovation. This ad showcases their use of drones as
        they progress towards ‘zero-error warehousing’.
      </h1>

      <div className="flex items-center w-full max-sm:pr-5 justify-evenly text-2xl ">
        <p className="max-sm:text-center pr-2">
          There&apos;s Always Time For A Short Story
        </p>

        <Image
          alt=""
          className="w-80 object-contain self-center pt-10"
          height={500}
          src="/shortStories.jpeg"
          width={500}
        />
      </div>
      <div>
        <p className="text-2xl sm:text-xl px-2 py-10" id="storyEl">
          This Red & Yellow project charged us with developing a promotional
          event for Exclusive Books. People often wish that they read more and
          one of the common issues faced is a shortage of time. We realised
          short stories – in truth these are vignettes – can be read quickly and
          in any setting. During the promotion, stories were placed around the
          mall - on receipts, in elevators, and on limited edition packets.
        </p>
      </div>
    </div>
  );
};

export default Copywriting;
