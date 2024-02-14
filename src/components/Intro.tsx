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
          {`I'm a frontend developer and have just finished a six month internship at Regulars, 
          where I helped to develop web and mobile components.`}
        </CardContent>
      </Card>
    </div>
  );
};

export default Intro;

{
  /* <NavItems /> */
}
{
  /* <article className="w-3/5 h-52">
          <h1 className="text-3xl">{`Hi, I'm James`}</h1>
          <h2 className="text-2xl">{`I'm a frontend developer and have just finished a six month internship at Regulars, 
            where I helped to develop web and mobile components. `}</h2>
        </article>
        <article className=""></article> */
}
