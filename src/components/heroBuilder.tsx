import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const HeroBuilder = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>();

  return (
    <div className="flex-col gap-5 flex pt-10 w-full">
      <div className="flex  items-center justify-evenly">
        <Card className=" border-none w-1/2">
          <CardHeader>
            {" "}
            <Link
              className="text-3xl text-center"
              href="https://herobuilder.vercel.app/"
              target="_blank"
            >
              Hero Builder
            </Link>
          </CardHeader>
          <CardContent>
            <p className="text-xl">
              A full stack web app built with TypeScript, Next.js, tRPC and
              Prisma.
            </p>
            <p className="text-xl">
              I’ve used MongoDB as the database and the project also involves
              Zod and React Hook Form.
            </p>
          </CardContent>
        </Card>
        <Image
          width={500}
          height={500}
          alt=""
          className="w-1/3"
          src="/snapHero.png"
        />
      </div>

      <div className="items-center justify-evenly flex">
        <h1 className="text-3xl">Regulars Work (?)</h1>
        <div className="w-80 h-80 bg-gray-800"></div>
      </div>
    </div>
  );
};
export default HeroBuilder;

{
  /* <img
          src="/hero-builder.png"
          className={`cursor-pointer object-contain w-80 pr-2 h-full hover:ease-in-out transition-all duration-300 hover:brightness-[.2] ${
            isHover && "brightness-[.2]"
          } `}
          alt=""
          onClick={() => router.push("https://herobuilder.vercel.app/")}
        /> */
}
