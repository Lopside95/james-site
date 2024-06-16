import Image from "next/image";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "./ui/card";
import TechStack from "./techStack";
import { Button } from "./ui/button";
import Link from "next/link";
import { LinkButton } from "./ui/linkButton";

const Intro = () => {
  return (
    <Card className="w-full bg-transparent border-none  ">
      <CardHeader>
        <CardTitle className="">{`Hi, I'm James.`}</CardTitle>
      </CardHeader>
      <CardContent className="">
        I&apos;m a frontend developer at{" "}
        <Link
          href="https://www.getregulars.com/"
          className="underline underline-offset-4"
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
