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
    <div className="w-full flex flex-col">
      <h1 className="pl-6 pt-5">Experience</h1>
      <Card className="flex flex-col justify-between border-none">
        <CardHeader className="-mb-2 sm:-mb-4">
          <CardTitle>Junior frontend developer</CardTitle>
          <CardDescription>Regulars</CardDescription>
          <CardFooter>September 2023 - present</CardFooter>
        </CardHeader>
        <CardContent className="">
          I have helped to develop the company’s website and mobile components.
          During this time I gained experience with TypeScript, Next.js and
          Tailwind CSS. The ongoing project also involves collaboration with
          other developers and using git for version control. <br />
          Regulars is a company geared towards restaurants with B2B and B2C
          digital solutions and strategies that offer a new way for businesses
          to engage with and retain customers.
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between border-none py-10">
        <CardHeader className=" -mb-2 sm:-mb-4 -mt-12">
          <CardTitle>Freelance strategist and copywriter</CardTitle>
          <CardDescription>Serious Moonlight Consulting</CardDescription>
          <CardFooter>July 2020 – present</CardFooter>
        </CardHeader>
        <CardContent>
          I have freelanced for Serious Moonlight Consulting, developing
          strategies, concepts and content for about three years. What often
          makes or breaks a strategy is the story it tells, and the uniqueness
          of this story. A brand’s identity can be complex, with many assets,
          aspects and asides. But at the end of the day, it’s a story, one which
          should be simple and cohesive and finds meaning in empty spaces.
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
