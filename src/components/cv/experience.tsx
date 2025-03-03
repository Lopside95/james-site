import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "@ui/card";

const Experience = () => {
  return (
    <div className="w-full flex pt-10 flex-col relative">
      <h2 className="">Experience</h2>
      <Card className="flex flex-col justify-between relative border-none">
        <CardHeader className="-mb-2 sm:-mb-4 pl-0">
          <CardTitle>Frontend Developer</CardTitle>
          <CardDescription>Regulars</CardDescription>
          <CardFooter>September 2023 - September 2024</CardFooter>
        </CardHeader>
        <CardContent className="pl-0">
          I have helped to develop the company’s website and mobile components.
          During this time I gained experience with TypeScript, Next.js and
          Tailwind CSS, as well as MongoDB, tRPC and Prisma. <br />
          Regulars is a company geared towards restaurants and cafes with
          digital solutions and strategies that offer a new way for businesses
          to engage with and retain customers.
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between border-none py-10">
        <CardHeader className=" -mb-2 sm:-mb-4 pl-0 -mt-12">
          <CardTitle>Freelance Strategist and Copywriter</CardTitle>
          <CardDescription>Serious Moonlight Consulting</CardDescription>
          <CardFooter>January 2020 – September 2024</CardFooter>
        </CardHeader>
        <CardContent className="pl-0">
          I have freelanced for Serious Moonlight Consulting, developing
          strategies, concepts and content for about three years. What often
          makes or breaks a strategy is the story it tells, and the uniqueness
          of this story. A brand’s identity can be complex, with many assets,
          aspects and asides. But, at the end of the day, it’s a story - one
          which should be simple and cohesive, finding meaning in empty spaces.
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
