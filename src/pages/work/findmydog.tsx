import CreatePost from "@/components/work/findmydog/sections/CreatePost";
import SignUp from "@/components/work/findmydog/sections/Signup";
import ViewPost from "@/components/work/findmydog/sections/ViewPost";
import Image from "next/image";
import Link from "next/link";

const FindMyDog = () => {
  return (
    <section className="flex-col w-full py-10 pb-5 md:pb-0 flex gap-5">
      <article className="max-md:py-5 items-center pl-2 gap-16">
        <h2>
          <Link
            href="https://findmydog.vercel.app/"
            className=" md:pb-0 md:pl-8 underline"
            target="_blank"
          >
            Find My Dog
          </Link>
        </h2>
        <h3 className="md:hidden font-normal pt-1">
          Capstone for the BrainStation software engineering bootcamp.
        </h3>
      </article>
      <section className="flex justify-between items-center ">
        <Image
          alt="Find my dog homepage screenshot"
          className="w-72"
          height={600}
          src="/findmydog/home.png"
          width={400}
        />
        <article className="flex md:flex-col flex-col-reverse gap-5 max-md:pl-3 lg:w-3/5">
          <p className="hidden md:inline-block">
            Capstone project for the BrainStation software engineering bootcamp.
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
          <article className="flex items-center justify-between ">
            <div className="flex gap-3 max-xl:max-w-52 flex-wrap">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                width={60}
                height={60}
                alt="TypeScript Icon"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                width={60}
                height={60}
                alt="React Icon"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                width={60}
                height={60}
                alt="Sass Icon"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                width={60}
                height={60}
                alt="Node.js Icon"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                width={60}
                height={60}
                alt="Express Icon"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg"
                width={60}
                height={60}
                alt="MySQL Icon"
              />
            </div>
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
      <SignUp />
      <CreatePost />
      <ViewPost />
    </section>
  );
};

export default FindMyDog;
