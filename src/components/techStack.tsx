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
          <CardTitle className="text-3xl pl-3 -mb-4">Stack</CardTitle>
        </CardHeader>
        <CardContent className="pl-10">
          <dl>
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Git</li>
            <li>Responsive design</li>
          </dl>
        </CardContent>
      </Card>
      <Card className="w-full  bg-transparent border-none text-base-txtClr">
        <CardHeader>
          <CardTitle className="text-3xl pl-3 -mb-4">Skills</CardTitle>
        </CardHeader>
        <CardContent className="pl-10">
          <dl>
            <li>Brand and campaign strategy</li>
            <li>Writing</li>
            <li>Holistic design</li>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechStack;
