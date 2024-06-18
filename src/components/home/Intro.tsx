import { Card, CardContent, CardTitle, CardHeader } from "@ui/card";
import Link from "next/link";

const Intro = () => {
  return (
    <Card className="w-full bg-transparent border-none  ">
      <CardHeader>
        <CardTitle className="sm:text-3xl">{`Hi, I'm James.`}</CardTitle>
      </CardHeader>
      <CardContent className="">
        I&apos;m a frontend developer at{" "}
        <Link
          className="underline underline-offset-4"
          href="https://www.getregulars.com/"
          target="_blank"
        >
          Regulars
        </Link>
        , where I&apos;m helping to build the company&apos;s service through the
        development of mobile and web components.
      </CardContent>
    </Card>
  );
};

export default Intro;
