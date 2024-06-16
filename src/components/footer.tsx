import Link from "next/link";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FooterToast } from "@/components/ui/toaster";
import Emoji from "./ui/emoji";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Footer = () => {
  const { toast } = useToast();

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      toast({
        title:
          text === "james.p.wallington@gmail.com"
            ? "Email copied to clipboard"
            : "Phone copied to clipboard",
      });
    } catch (error: unknown) {
      toast({
        title: "Failed to copy",
        description: <Emoji symbol="😶" label="silent" />,
      });
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col text-base-txtClr w-3/5 pt-10 pb-5 gap-5 pl-7 px-1 justify-end  ">
      <h1 className="text-xl">Contact</h1>
      <div className="flex">
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              className="pl-1 text-md underline "
              variant="smLine"
              onClick={() => handleCopy("james.p.wallington@gmail.com")}
            >
              james.p.wallington@gmail.com
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="border-none bg-base-bg text-base-txtClr">
            <p className="text-sm">Click to copy</p>
          </HoverCardContent>
        </HoverCard>
        <Button
          className="text-md underline"
          variant="smLine"
          onClick={() => handleCopy("+41 76 570 1553")}
        >
          +41 76 570 1553
        </Button>
        <Button className=" underline text-md" variant="smLine">
          <Link
            tabIndex={-1}
            target="_blank"
            href="https://www.linkedin.com/in/james-wallington-2a122bb6/"
          >
            LinkedIn
          </Link>
        </Button>
      </div>
      <FooterToast />
    </div>
  );
};

export default Footer;
