import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/src/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "../ui/card";

const Experience = () => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="text-2xl pl-5 py-5 ">Experience</h1>
      <Card className="flex flex-col justify-between border-none">
        <CardHeader>
          <CardTitle className="">Junior frontend developer</CardTitle>
          <CardDescription className="">Regulars</CardDescription>
          <CardDescription className="text-base-txtClr text-md">
            September 2023 - present
          </CardDescription>
        </CardHeader>
        <CardContent className="text-lg ">
          I have helped to develop the company’s website and mobile components.
          During this time I gained experience with TypeScript, Next.js and
          Tailwind CSS. The ongoing project also involves collaboration with
          other developers and using git for version control.
        </CardContent>
        <CardContent className="text-lg">
          Regulars is a company geared towards restaurants with B2B and B2C
          digital solutions and strategies that offer a new way for businesses
          to engage with and retain customers.
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between border-none py-10">
        <div className="">
          <CardHeader>
            <CardTitle className="text-2xl">
              Freelance strategist and copywriter
            </CardTitle>
            <CardDescription className="text-xl">
              Serious Moonlight Consulting
            </CardDescription>
            <CardDescription className=" text-base-txtClr text-md">
              July 2020 – present
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="text-lg">
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
