import Link from "next/link";
import NavItems from "./navItems";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "./ui/card";

const Copywriting = () => {
  return (
    <div className="py-5 flex h-full bg-transparent">
      <Card className="w-full bg-transparent border-none text-base-txtClr">
        <CardHeader>
          <CardTitle className="text-xl">
            <p>{`My feelings toward long walks on the beach are varied and inconclusive.`}</p>
            <p>{`It’s been several years since I watched a horror film and I don't like olives.`}</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-2xl">
          {`But I do like writing (code included)`}
        </CardContent>
      </Card>
    </div>
  );
};

export default Copywriting;
