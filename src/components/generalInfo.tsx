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
import NavItems from "./navItems";

const GeneralInfo = () => {
  return (
    <div className=" py-5 pr-3  flex h-full bg-transparent  ">
      <Card className=" bg-transparent border-none text-base-txtClr">
        <CardHeader>
          <CardTitle className="text-xl -mb-4">
            I have always appreciated the challenges and satisfactions that come
            with making things.
          </CardTitle>
        </CardHeader>
        <CardContent className="text-lg">
          As a{" "}
          <Link className="hover:underline" href="/writing">
            copywriter
          </Link>
          , I created and told stories. For a brief while I made furniture –
          only as a hobby but the pieces were good enough for me and I still use
          them. Now, as a developer, I want to build websites and apps. But
          unlike my furniture, I want other people to use them.
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralInfo;
