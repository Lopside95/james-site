import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const HeroBuilder = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-5 pt-16 justify-between w-full items-center ">
      <Link
        className="text-5xl text-center pb-7"
        href="https://herobuilder.vercel.app/"
        target="_blank"
      >
        Hero Builder
      </Link>
      <Card className=" border-none items-center flex w-full">
        <CardHeader>
          <p className="text-xl">
            A full stack web app built with TypeScript, Next.js, tRPC and
            Prisma.
          </p>
          <p className="text-xl">
            I’ve used MongoDB as the database and the project also involves Zod
            and React Hook Form.
          </p>
        </CardHeader>
        <CardContent>
          <Link
            href="https://herobuilder.vercel.app/"
            target="_blank"
            className="flex pr-10 gap-5 items-center flex-col cursor-pointer"
          >
            <Image
              width={300}
              height={300}
              alt=""
              className="w-full"
              src="/snapHero.png"
            />
            <Button variant="ghost" className="border hover:bg-white ">
              <span className="flex gap-1 text-xl pb-1">
                <h1 className="text-yellow-500 ">pnpm</h1> run dev
              </span>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
export default HeroBuilder;
