import Image from "next/image";
import Link from "next/link";

const FindMyDog = () => {
  return (
    <section className="flex-col py-10 pb-5 flex gap-5">
      <article className="py-5 w-full max-md:flex items-center gap-16">
        <div>
          <h2 className="pb-2">BrainStation</h2>
          <Link
            className="w-fit"
            href="https://findmydog.vercel.app/"
            target="_blank"
          >
            <h3 className="underline underline-offset-3">Find My Dog</h3>
          </Link>
        </div>
        <p className="md:hidden">
          Fullstack project for the BrainStation software engineering bootcamp.
        </p>
      </article>
      <section className="flex justify-between items-center">
        <Image
          alt="Find my dog homepage screenshot"
          className="w-72"
          height={200}
          src="/findmydog/home.png"
          width={200}
        />
        <article className="flex md:flex-col flex-col-reverse gap-5 max-md:pl-3 sm:gap-2 w-96 lg:w-3/5">
          <p className="hidden md:inline-block">
            Fullstack project for the BrainStation software engineering
            bootcamp.
          </p>
          <div className="flex gap-3">
            <Link
              className="underline text-xl"
              href="https://github.com/Lopside95/findmydog-client"
              target="_blank"
            >
              Client Repo
            </Link>
            <Link
              className="underline text-xl"
              href="https://github.com/Lopside95/findmydog-server"
              target="_blank"
            >
              Server Repo
            </Link>
          </div>
          <article className="flex items-center justify-between">
            <p>TypeScript | React | Node | MySQL | Express</p>
            <Image
              alt="QR code for Find My Dog"
              className="mr-10 max-md:hidden"
              height={140}
              src="/qr-code.svg"
              width={140}
            />
          </article>
        </article>
      </section>
    </section>
  );
};

export default FindMyDog;
