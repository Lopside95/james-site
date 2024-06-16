import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "./ui/card";

const TechStack = () => {
  return (
    <div className="align-middle w-full py-5 text-3xl pl-10 sm:pl-0 sm:text-xl max-sm:flex-col flex ">
      <Card className="w-full  bg-transparent border-none ">
        <CardHeader>
          <CardTitle className="text-4xl sm:text-3xl pl-3 -mb-4">
            Stack
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-10">
          <dl>
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>tRPC</li>
            <li>Prisma ORM</li>
            <li>MongoDB</li>
            <li>Git</li>
          </dl>
        </CardContent>
      </Card>
      <Card className="w-full  bg-transparent border-none ">
        <CardHeader>
          <CardTitle className="text-4xl sm:text-3xl pl-3 -mb-4">
            Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-10">
          <dl>
            <li>Information architecture</li>
            <li>Brand and campaign strategy</li>
            <li>Problem solving</li>
            <li>Writing</li>
            <li>Holistic design</li>
            <li>Creativity</li>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechStack;
