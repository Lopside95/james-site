import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@ui/card";
import { Button } from "@ui/button";

const HeroBuilder = () => {
  return (
    <div className="flex flex-col gap-5 justify-between w-full items-center ">
      <Link
        className=" sm:text-4xl text-3xl text-center pb-7"
        href="https://herobuilder.vercel.app/"
        target="_blank"
      >
        Hero Builder
      </Link>
      <Card className=" border-none items-center flex w-full">
        <CardHeader className="sm:text-2xl text-2xl">
          <p>
            A full stack web app built with TypeScript, Next.js, tRPC and
            Prisma.
          </p>
          <p className="">
            I’ve used MongoDB as the database and the project also involves Zod
            and React Hook Form.
          </p>
        </CardHeader>
        <CardContent>
          <Link
            className="flex pr-10 gap-5 items-center flex-col cursor-pointer"
            href="https://herobuilder.vercel.app/"
            target="_blank"
          >
            <Image
              alt=""
              className="w-full"
              height={300}
              src="/snapHero.png"
              width={300}
            />
            <Button className="border hover:bg-white " variant="ghost">
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
