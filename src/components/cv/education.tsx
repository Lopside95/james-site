import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { useRouter } from "next/router";
import ProjectLink from "./projectLink";

const Education = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl pl-5 py-5 ">Education</h1>

      <Card className="flex justify-between   border-none ">
        <div className="flex">
          <CardHeader className="self-start ">
            <CardTitle className="text-2xl ">
              Certificate in Design Techniques, <br /> User-centred Design
            </CardTitle>
            <CardDescription className="text-xl">
              Red & Yellow, Creative School of Business
            </CardDescription>
            <CardDescription className="text-base-txtClr text-md">
              February 2021 - January 2022
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="text-lg w-1/2 self-center">
          Red & Yellow focusses on practical experience and, alongside technical
          know-how, the school emphasises the development of distinctly human
          traits like creativity and empathy.
        </CardContent>
      </Card>

      <Card className="flex justify-between border-none py-10">
        <div className="flex">
          <CardHeader>
            <CardTitle className="text-2xl">Diploma in Copywriting</CardTitle>
            <CardDescription className="text-xl">
              Red & Yellow, Creative School of Business
            </CardDescription>
            <CardDescription className="text-base-txtClr text-md">
              January 2015 - December 2016
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="text-lg w-1/2">
          Passed with merit and two of my{" "}
          <ProjectLink href={"/writing"}>projects</ProjectLink> were finalists
          in the Loeries’ student competitions, which recognises and awards
          advertising agencies and campaigns.
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
