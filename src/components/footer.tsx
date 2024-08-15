import Link from "next/link";
import { Button } from "@ui/button";
import { useToast } from "@ui/use-toast";
import { FooterToast } from "@ui/toaster";
import Emoji from "@ui/emoji";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui/hover-card";
import { ArrowUp } from "lucide-react";

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
        description: <Emoji label="silent" symbol="😶" />,
      });
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-full lg:pl-2 pt-10 items-left  md:pl-5  md:gap-4  px-1  ">
      <div className="flex md:w-4/5">
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              className="pl-1 underline sm:text-base text-lg"
              onClick={() => handleCopy("james.p.wallington@gmail.com")}
              variant="smLine"
            >
              james.p.wallington@gmail.com
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="border-none bg-base-bg text-base-txtClr">
            <p className="text-sm">Click to copy</p>
          </HoverCardContent>
        </HoverCard>
        <Button
          className="underline sm:text-base text-lg"
          onClick={() => handleCopy("+41 76 570 1553")}
          variant="smLine"
        >
          +41 76 570 1553
        </Button>
        <Button className=" underline sm:text-base text-lg " variant="smLine">
          <Link
            href="https://www.linkedin.com/in/james-wallington-2a122bb6/"
            tabIndex={-1}
            target="_blank"
          >
            LinkedIn
          </Link>
        </Button>
        <ArrowUp
          className="w-5 cursor-pointer font-normal mt-2"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      </div>
      <FooterToast />
    </div>
  );
};

export default Footer;
