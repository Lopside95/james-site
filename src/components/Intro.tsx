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
import NavItems from "./navItems";

const Intro = () => {
  return (
    <div className=" py-5 flex h-full bg-transparent ">
      <Card className="w-full bg-transparent border-none text-base-txtClr">
        <CardHeader>
          <CardTitle className="text-3xl">{`Hi, I'm James.`}</CardTitle>
        </CardHeader>
        <CardContent className="text-xl">
          {`I'm a frontend developer interning at Regulars, 
          where I'm helping to build the company's service through the development of mobile and web components.`}
        </CardContent>
      </Card>
    </div>
  );
};

export default Intro;
