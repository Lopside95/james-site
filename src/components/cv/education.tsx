import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@ui/card";

const Education = () => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="py-4 ">Education</h2>
      <Card className="flex flex-col justify-between border-none ">
        <div className="flex">
          <CardHeader className="self-start -mb-2 sm:-mb-4">
            <CardTitle>Software Engineering</CardTitle>
            <CardDescription>BrainStation</CardDescription>
            <CardFooter>September - December 2024</CardFooter>
          </CardHeader>
        </div>
        <CardContent className="w-full self-center">
          An immersive twelve-week software engineering bootcamp. Covering
          everything from HTML to DevOps, BrainStation’s bootcamp is a
          comprehensive, hands-on approach to learning and the real-world
          application of the hard and soft skills required by developers.
        </CardContent>
      </Card>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
