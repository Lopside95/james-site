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
          <CardTitle>Fullstack Engineer</CardTitle>
          <CardDescription>Freelance</CardDescription>
          <CardFooter>April 2025 - present</CardFooter>
        </CardHeader>
        <CardContent className="pl-0">
          I’m working as a freelance engineer and the sole person responsible
          for the product lifecycle in both instances. <br />
          <li className="pt-1">
            For one client I’m building a web app made to centralise and enhance
            internal communications for businesses.
          </li>
          <li>
            In another project I’m creating an AI agent and orchestrating
            Retrieval Augmented Generation (RAG) and AI workflows with Firebase
            and Google Genkit.
          </li>
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between relative border-none">
        <CardHeader className="-mb-2 sm:-mb-4 pl-0">
          <CardTitle>Frontend Developer</CardTitle>
          <CardDescription>Regulars</CardDescription>
          <CardFooter>September 2023 - September 2024</CardFooter>
        </CardHeader>
        <CardContent className="pl-0">
          I had some self-taught experience of frontend development, and had
          taken an initial step into React. Once I joined the company as a
          frontend developer, I was introduced to a wide range of new and
          exciting technologies, some notable examples being TypeScript, Next.js
          and TailwindCSS. <br />
          Over the course of my time there I formed part of a remote team of
          developers, using agile methodologies and working with designers and
          marketing experts to deliver innovative digital solutions and
          strategies for increased customer engagement and retention in the
          hospitality industry.
        </CardContent>
      </Card>
      <Card className="flex flex-col justify-between border-none py-10">
        <CardHeader className=" -mb-2 sm:-mb-4 pl-0 -mt-12">
          <CardTitle>Freelance Strategist and Copywriter</CardTitle>
          <CardDescription>Serious Moonlight Consulting</CardDescription>
          <CardFooter>January 2020 – September 2024</CardFooter>
        </CardHeader>
        <CardContent className="pl-0">
          What often makes or breaks a strategy is the story it tells, and the
          uniqueness of this story. A brand’s identity can be complex, with many
          assets, aspects and asides. But, at the end of the day, it’s a story -
          one which should be simple and cohesive, finding meaning in empty
          spaces. For over four years, my job was to find this space and fill it
          with stand-out strategies, concepts and content.
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;
