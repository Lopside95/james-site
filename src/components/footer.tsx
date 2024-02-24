import Link from "next/link";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FooterToast } from "@/components/ui/toaster";
import Emoji from "./ui/emoji";

const Footer = () => {
  // const { toast } = useToast();
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
    } catch (error) {
      toast({
        title: "Copy failed",
        description: <Emoji symbol=":😶" label="silent" />,
      });
    }
  };

  return (
    <div className="flex flex-col text-base-txtClr w-3/5 pt-10 pb-5 gap-5 pl-9 px-1 justify-end bg-base-bg  ">
      <h1 className="text-xl">Contact</h1>
      <div className="flex">
        <Button
          className=" pl-1 text-md hover:underline "
          variant="smLine"
          onClick={() => handleCopy("james.p.wallington@gmail.com")}
        >
          james.p.wallington@gmail.com
        </Button>
        <Button
          className="text-md"
          variant="smLine"
          onClick={() => handleCopy("+41 76 570 1553")}
        >
          +41 76 570 1553
        </Button>
        <Button className=" hover:underline text-md" variant="smLine">
          <Link href="https://www.linkedin.com/in/james-wallington-2a122bb6/">
            LinkedIn
          </Link>
        </Button>
      </div>
      <FooterToast />
    </div>
  );
};

export default Footer;
