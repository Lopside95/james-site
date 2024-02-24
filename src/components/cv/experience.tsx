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
      <Card className="flex justify-between border-none">
        <div className="flex">
          <CardHeader>
            <CardTitle className="text-2xl">
              Frontend developer intern
            </CardTitle>
            <CardDescription className="text-xl">Regulars</CardDescription>
            <CardDescription className="text-base-txtClr text-md">
              September 2023 - current
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="text-lg w-1/2">
          I have helped to develop the company’s website and mobile components.
          During this time I gained experience with TypeScript, Next.js,
          Tailwind CSS. The ongoing project also involved collaboration with
          other developers and using git for version control.
        </CardContent>
      </Card>
      <Card className="flex justify-between border-none py-10">
        <div className="flex">
          <CardHeader>
            <CardTitle className="text-2xl">
              Consulting strategist and copywriter
            </CardTitle>

            <CardDescription className="text-xl">
              Serious Moonlight Consulting
            </CardDescription>
            <CardDescription className="text-base-txtClr text-md">
              July 2020 – December 2023
            </CardDescription>
          </CardHeader>
        </div>

        <CardContent className="text-lg w-1/2">
          Generated campaign strategies, concepts and adverts. Creating social
          media posts, writing and editing copy for websites and intra-business
          communication. Transcribing and proofreading.
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
