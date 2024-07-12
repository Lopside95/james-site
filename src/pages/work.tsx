import Emoji from "@/components/ui/emoji";
import CardCreator from "@/components/work/cardCreator";
import Image from "next/image";

type CardProps = {
  symbol?: string;
  label?: string;
  desc?: string;
};

export default function Work() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen">
      <section className="sm:w-3/5 pt-8 flex-col flex gap-5">
        <h1 className="">Regulars</h1>
        <h1 className="pt-1 pb-5">Junior frontend developer</h1>
        <article className="flex items-center">
          <div className="flex flex-col w-2/3 gap-4 text">
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
            className=""
            height={600}
            src="/regularsHome.png"
            width={600}
          />
        </article>
        <article className="flex flex-col gap-2">
          <h2 className="pl-[3.4rem]">
            Three things I loved working on at Regulars
          </h2>
          <MenuItem
            desc="The card creator which allows companies to build and customise the
              cards they’ll give to their customers."
            label="spanner"
            symbol="🔧"
          />
          <MenuItem
            desc=" The card page, a dynamically generated form customers fill in in
              order to download digital loyalty cards."
            label="coffee"
            symbol="☕️"
          />
          <MenuItem
            desc="Account management interface where companies and employees can
              update and delete their accounts."
            label="notepad"
            symbol="📝"
          />
        </article>
        <CardCreator />
        {/* <article className="">
          <CardCreator />
        </article> */}
      </section>
    </div>
  );
}

export const MenuItem = ({ label, symbol, desc }: CardProps) => {
  return (
    <article className="flex gap-4 items-center">
      <Emoji className="text-3xl" label={label} symbol={symbol} />
      <p>{desc}</p>
    </article>
  );
};
