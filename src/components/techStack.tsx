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
    <div className="align-middle w-full py-5 ">
      <Card className="w-full  bg-transparent border-none text-base-txtClr">
        <CardHeader>
          <CardTitle className="text-3xl pl-3 -mb-4">{`Tech stack`}</CardTitle>
        </CardHeader>
        <CardContent className="pl-10">
          <dl>
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Git</li> {/* <li>JavaScript</li> */}
            {/* <li>CSS</li>
            <li>HTML</li>` */}
          </dl>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechStack;
