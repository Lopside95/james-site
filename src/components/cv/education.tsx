import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@ui/card";
import ProjectLink from "./projectLink";

const Education = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl pl-6 py-4 ">Education</h1>
      <Card className="flex flex-col justify-between   border-none ">
        <div className="flex">
          <CardHeader className="self-start -mb-2 sm:-mb-4">
            <CardTitle>
              Certificate in Design Techniques, <br /> User-centred Design
            </CardTitle>
            <CardDescription>
              Red & Yellow, Creative School of Business
            </CardDescription>
            <CardFooter>February 2021 - January 2022</CardFooter>
          </CardHeader>
        </div>
        <CardContent className="w-full self-center">
          Red & Yellow focusses on practical experience and, alongside technical
          know-how, the school emphasises the development of distinctly human
          traits like creativity and empathy.
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-between border-none py-7">
        <div className="flex">
          <CardHeader className="-mb-2 sm:-mb-4 -mt-12">
            <CardTitle className="">Diploma in Copywriting</CardTitle>
            <CardDescription className="">
              Red & Yellow, Creative School of Business
            </CardDescription>
            <CardFooter className="">January 2015 - December 2016</CardFooter>
          </CardHeader>
        </div>
        <CardContent className=" w-full">
          Passed with merit and two of my projects were finalists in the
          Loeries’ student competitions, which recognises and awards advertising
          agencies and campaigns.
          {/* <ProjectLink href={"/work"}>projects</ProjectLink>  */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
