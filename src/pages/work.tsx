import { Separator } from "@/src/components/ui/separator";
import Navbar from "../components/Navbar";
import Copywriting from "../components/copywriting";
import Footer from "../components/footer";
import HeroBuilder from "../components/heroBuilder";

export default function Work() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen ">
      <div className="sm:w-3/5 pt-8">
        <HeroBuilder />
        <Separator className="my-10 bg-base-txtClr/40 w-full justify-self-center self-center" />
        <Copywriting />
      </div>
    </div>
  );
}
