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
      <h2 className="pt-4 ">Education</h2>
      <Card className="flex flex-col justify-between border-none ">
        <div className="flex  ">
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
          <CardHeader className="self-start -mb-2 sm:-mb-4 lg:pt-0">
            <CardTitle>
              Certificate in Design Techniques, <br /> User-centred Design
            </CardTitle>
            <CardDescription>
              Red & Yellow, Creative School of Business
            </CardDescription>
            <CardFooter>January 2021 - January 2022</CardFooter>
          </CardHeader>
        </div>
        <CardContent className="w-full self-center">
          Red & Yellow’s certificate in user-centred explored the design
          thinking process in subjects ranging from colour theory to UX
          research, information architecture and design.
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between border-none">
        <div className="flex">
          <CardHeader className="-mb-2 sm:-mb-4 lg:pt-0">
            <CardTitle className="">Diploma in Copywriting</CardTitle>
            <CardDescription className="">
              Red & Yellow, Creative School of Business
            </CardDescription>
            <CardFooter className="">January 2015 - November 2016</CardFooter>
          </CardHeader>
        </div>
        <CardContent className=" w-full">
          With a focus on hands-on learning, collaboration with graphic
          designers and marketers and practical experience, the two-year diploma
          was an incredibly valuable experience and honed my ability to
          communicate, empathise, and tell stories.
        </CardContent>
      </Card>
    </div>
  );
};

export default Education;
