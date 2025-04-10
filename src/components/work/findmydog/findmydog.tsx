import Image from "next/image";
import Link from "next/link";
import ViewPost from "./sections/ViewPost";
import SignUp from "./sections/Signup";
import CreatePost from "./sections/CreatePost";

const FindMyDog = () => {
  return (
    <section className="flex-col w-full py-10 pb-5 md:pb-0 flex gap-5">
      <article className="max-md:py-5 items-center pl-2 gap-16">
        <h2>
          <Link
            href="https://findmydog.vercel.app/"
            className=" md:pb-0 max-sm:mb-10 md:pl-8 underline"
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
          src="/findmydog/home-2.png"
          width={400}
        />
        <h3>
          Find my dog is a fullstack web app developed as my BrainStation
          capstone. Britain is a nation of dog lovers with 13 million people
          having them as pets. However, 40% of dog owners have a dog go missing
          at some point, and 60% of people never find their dog. Find My Dog
          aims to be the central meeting point for people who have lost their
          dog, or people who have found or identified a missing or stray dog.
          Users can quickly create a post, upload information and images, and
          drop a pin on a map. By creating a digital community notice board,
          Find My Dog aims to help dogs and owners find home.
        </h3>
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
      <SignUp />
      <CreatePost />
      <ViewPost />
    </section>
  );
};

export default FindMyDog;
