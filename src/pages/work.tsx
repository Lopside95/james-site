import Hammer from "@/components/hammer";
import Nail from "@/components/nail";
import CaseStudy from "@/components/work/caseStudy";
import FixedScroll from "@/components/work/fixedScroll";
import Regulars from "@/components/work/regulars";
import { Separator } from "@ui/separator";
import Copywriting from "@work/copywriting";
import HeroBuilder from "@work/heroBuilder";

export default function Work() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen">
      <div className="sm:w-3/5 pt-8">
        <div>
          <h1>Regulars</h1>
          <h2>The card creator</h2>
        </div>
        {/* <FixedScroll /> */}
        {/* <CaseStudy /> */}
        {/* <Regulars /> */}
        <HeroBuilder />
        <Separator className="my-10 bg-base-txtClr/40 w-full justify-self-center self-center" />
        <Copywriting />
      </div>
      <Hammer />
      {/* <Nail /> */}
    </div>
  );
}
