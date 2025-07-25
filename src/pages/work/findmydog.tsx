import Emoji from "@/components/ui/emoji";
import CreatePost from "@/components/work/findmydog/sections/CreatePost";
import SignUp from "@/components/work/findmydog/sections/Signup";
import ViewPost from "@/components/work/findmydog/sections/ViewPost";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Head from "next/head";

const FindMyDog = () => {
  const signupRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const interactionRef = useRef<HTMLDivElement>(null);

  const handleNav = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    e.preventDefault();

    if (ref.current) {
      const refPos = ref.current?.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: refPos - 72,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Find My Dog</title>
        <meta
          name="description"
          content="Find My Dog is a fullstack web app capstone project for BrainStation, helping dog owners and finders connect quickly and easily."
          lang="en"
        />
      </Head>
      <section className="flex-col w-full py-10 pb-5 md:pb-0 flex gap-5">
        <article className="max-md:py-5 items-center pl-2 gap-16">
          <h2>
            <Link
              href="https://findmydog.vercel.app/"
              className="pb-10 md:pb-0  underline"
              target="_blank"
            >
              Find My Dog
            </Link>
          </h2>
          <h3 className="md:hidden font-normal pt-1">
            Capstone for the BrainStation software engineering bootcamp.
          </h3>
        </article>
        <section className="flex max-sm:flex-col px-2 justify-between gap-10 items-center ">
          <div className="sm:w-1/2">
            <h3>
              Find my dog is a fullstack web app developed as my BrainStation
              capstone.
              <br />
              <br />
              Britain is a nation of dog lovers with 13 million people having
              them as pets.
              {/* Britain is a nation of dog lovers with 13 million people having them
              as pets. However, 40% of dog owners have a dog go missing at some
              point, and 60% of people never find their dog. */}
              <br />
              {/* <br /> */}
              Find My Dog aims to be the central meeting point for people who
              have lost their dog, or people who have found or identified a
              missing or stray dog.
              <br />
              <br />
              Users can quickly create a post, upload information and images,
              and drop a pin on a map. By creating a digital community notice
              board, Find My Dog aims to help dogs and owners find home.
            </h3>
            <div className="flex gap-5 mt-5 text-2xl">
              <Link
                className="underline underline-offset-2"
                href="https://github.com/Lopside95/findmydog-server"
                target="_blank"
              >
                Server Repo
              </Link>
              <Link
                className="underline underline-offset-2"
                href="https://github.com/Lopside95/findmydog-client"
                target="_blank"
              >
                Client Repo
              </Link>
            </div>
          </div>

          <Image
            alt="Find my dog homepage screenshot"
            className="w-72 max-sm:hidden"
            height={600}
            src="/findmydog/home-2.png"
            width={400}
          />

          {/* <article className="flex md:flex-col flex-col-reverse gap-5 max-md:pl-3 lg:w-3/5">
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
        </article> */}
        </section>

        <section className="flex flex-col bg-gray-200/75 relative pl-5 py-10 z-20 gap-5 w-[99%] pr-2 ">
          <h3 className=" font-medium md:pl-[3.4rem]">
            Three things I enjoyed making:
          </h3>
          <article className="flex gap-4 items-center md:w-3/5">
            <Emoji className="text-3xl" label="spanner" symbol="✏️" />
            <h3>
              The{" "}
              <span
                className="underline cursor-pointer underline-offset-4"
                onClick={(e) => handleNav(e, signupRef)}
              >
                sign up
              </span>{" "}
              process which lets users create profiles
            </h3>
          </article>
          <article className="flex gap-4 items-center md:w-3/5">
            <Emoji className="text-3xl" label="coffee" symbol="📍" />
            <h3>
              The{" "}
              <span
                className="underline underline-offset-4 cursor-pointer"
                onClick={(e) => handleNav(e, mapRef)}
              >
                map feature,
              </span>{" "}
              which allows users to search for locations as well as drop pins
              and markers
            </h3>
          </article>
          <article className="flex gap-4 md:w-3/5 items-center">
            <Emoji className="text-3xl" label="notes" symbol="👍" />
            <h3>
              Users can{" "}
              <span
                className="underline cursor-pointer underline-offset-4"
                onClick={(e) => handleNav(e, interactionRef)}
              >
                interact with posts
              </span>{" "}
              by adding comments and by out to the location pinned by the author
            </h3>
          </article>
        </section>
        <div className="py-10" ref={signupRef}>
          <SignUp />
        </div>
        <div className="py-10" ref={mapRef}>
          <CreatePost />
        </div>
        <div className="py-10" ref={interactionRef}>
          <ViewPost />
        </div>
      </section>
    </>
  );
};

export default FindMyDog;
