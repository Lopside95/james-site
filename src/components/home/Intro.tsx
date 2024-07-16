import { Card, CardContent, CardTitle, CardHeader } from "@ui/card";
import Link from "next/link";
import Emoji from "../ui/emoji";
import { LucideArrowUpRightFromSquare } from "lucide-react";

const Intro = () => {
  return (
    <Card className="w-full bg-transparent border-none md:text-3xl ">
      <CardHeader>
        <CardTitle className="md:text-4xl">
          Hi, I'm James <Emoji label="engineer" symbol="🧑‍🔧" />
        </CardTitle>
      </CardHeader>
      <CardContent className="md:text-3xl flex gap-4 md:gap-2  flex-col">
        <p>
          I&apos;m a frontend developer at{" "}
          <Link
            className="underline underline-offset-4"
            href="https://www.getregulars.com/"
            target="_blank"
          >
            Regulars
          </Link>
          , where I&apos;m helping to build the company&apos;s service through
          the development of mobile and web components.
        </p>
        <p>
          I have always appreciated the challenges and satisfactions that come
          with making things.
        </p>
        <p>
          As a copywriter I created and told stories. For a while I made
          furniture – only as a hobby but the pieces were good enough for me and
          I still use them. Now, as a developer, I want to build websites and
          apps.
          <Link
            className=" font-[550] items-center pt-2 flex gap-[0.5rem]"
            href="https://herobuilder.vercel.app/"
            tabIndex={-1}
            target="_blank"
          >
            Hero builder
            <LucideArrowUpRightFromSquare className="w-4 pt-[0.2rem] max-sm:w-6" />
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default Intro;

{
  /* <Emoji label="construction-worker" symbol="🧑‍🔧" /> */
}
