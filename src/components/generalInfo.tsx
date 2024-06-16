import Image from "next/image";
import Navbar from "./Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardFooter,
  CardHeader,
} from "./ui/card";
import TechStack from "./techStack";
import { Button } from "./ui/button";
import Link from "next/link";
import { LinkButton } from "./ui/linkButton";

const GeneralInfo = () => {
  return (
    <div className=" py-5 pr-3 w-full flex h-full bg-transparent  ">
      <Card className=" w-full bg-transparent border-none ">
        <CardHeader>
          <CardTitle className="sm:text-base text-2xl -mb-4">
            I have always appreciated the challenges and satisfactions that come
            with making things.
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          As a{" "}
          <Link className="hover:underline" href="/writing">
            copywriter
          </Link>
          , I created and told stories. For a brief while I made furniture –
          only as a hobby but the pieces were good enough for me and I still use
          them. Now, as a developer, I want to build websites and apps.
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralInfo;
