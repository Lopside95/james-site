import Emoji from "@/components/ui/emoji";
import CardCreator from "@/components/work/cardCreator";
import CardPage from "@/components/work/cardPage";
import Settings from "@/components/work/settings";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import SeriousMoonlight from "@/components/work/seriousMoonlight";

type CardProps = {
  symbol: string;
  label: string;
  desc: string;
  onClick: (e: React.MouseEvent) => void;
};

export default function Work() {
  const creatorRef = useRef<HTMLDivElement>(null);
  const cardPageRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  const handleNav = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    e.preventDefault();

    if (ref.current) {
      const refPos = ref.current?.getBoundingClientRect().top + window.scrollY;
      // ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      // const offsetPos = refPos - 80
      window.scrollTo({
        top: refPos - 72,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className=" align-middle flex md:pl-5  flex-col min-h-screen">
      <section className=" pt-8 flex-col flex gap-5">
        <h1 className="">Regulars</h1>
        <h2 className="pt-1">Junior frontend developer</h2>

        <article className="flex max-md:flex-col items-center">
          <div className="flex flex-col">
            <p>
              The company helps cafes by building customer loyalty, turning
              guests into regulars.
            </p>
            <p>
              Built on the idea that retaining guests is cheaper and more
              effective than acquiring new ones, Regulars provides a seamless
              shift from traditional loyalty methods – cutting paper waste,
              elevating customer engagement and changing the loyalty game.
            </p>
            <p>
              I have helped to develop Regulars’ website and mobile components.
            </p>
          </div>
          <Image
            alt="Regulars home page"
            className="md:w-3/5 max-md:py-5"
            height={600}
            src="/regularsHome.png"
            width={600}
          />
        </article>
        <section className="flex flex-col bg-gray-200/75 relative pl-5 py-10 z-20 gap-5 w-[99%] pr-2 ">
          {/* <div className="bg-gray-200/75 h-[120%] absolute m -translate-y-[5%] overflow-hidden -z-10 pl-20 py-20 w-[100vw] border" /> */}
          <h3 className=" font-medium md:pl-[3.4rem]">
            Three things I loved working on at Regulars
          </h3>

          <article className="flex gap-4 items-center md:w-3/5">
            <Emoji className="text-3xl" label="spanner" symbol="🔧" />
            <h3>
              The{" "}
              <span
                className="underline cursor-pointer underline-offset-4"
                onClick={(e) => handleNav(e, creatorRef)}
              >
                card creator
              </span>{" "}
              which allows companies to build and customise the cards they’ll
              give to their customers.
            </h3>
          </article>
          <article className="flex gap-4 items-center md:w-3/5">
            <Emoji className="text-3xl" label="coffee" symbol="☕️" />
            <h3>
              The{" "}
              <span
                className="underline underline-offset-4 cursor-pointer"
                onClick={(e) => handleNav(e, cardPageRef)}
              >
                card page,
              </span>{" "}
              a dynamically generated form customers fill in in order to
              download digital loyalty cards.
            </h3>
          </article>
          <article className="flex gap-4 md:w-3/5 items-center">
            <Emoji className="text-3xl" label="notes" symbol="📝" />
            <h3>
              The{" "}
              <span
                className="underline cursor-pointer underline-offset-4"
                onClick={(e) => handleNav(e, settingsRef)}
              >
                account management
              </span>{" "}
              interface where companies and employees can update and delete
              their accounts.
            </h3>
          </article>
          {/* </div> */}
        </section>
        <div className="py-5" ref={creatorRef}>
          <CardCreator />
        </div>
        <div className="py-5" ref={cardPageRef}>
          <CardPage />
        </div>
        <div className="py-5" ref={settingsRef}>
          <Settings />
        </div>
      </section>
    </div>
  );
}

export const MenuItem = ({ label, symbol, desc, onClick }: CardProps) => {
  return (
    <article className="flex gap-4 items-center" onClick={onClick}>
      <Emoji className="text-3xl" label={label} symbol={symbol} />
      <p>{desc}</p>
    </article>
  );
};
