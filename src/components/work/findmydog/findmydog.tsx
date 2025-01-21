import Image from "next/image";
import Link from "next/link";

const FindMyDog = () => {
  return (
    <main className="flex-col py-5 flex gap-5 px-5">
      <h1>BrainStation</h1>
      <Link href="https://findmydog.vercel.app/" target="_blank">
        <h3 className="underline underline-offset-3">Find My Dog</h3>
      </Link>
      <section className="flex justify-between items-center">
        <Image
          alt="Find my dog homepage screenshot"
          className="w-72 lg:-ml-9"
          height={200}
          src="/findmydog/home.png"
          width={200}
        />
        <article className="flex flex-col gap-2 w-96 lg:w-3/5">
          <p>
            Fullstack project for the BrainStation software engineering
            bootcamp. Primarily designed for mobile.
          </p>
          <div className="flex gap-3">
            <Link
              className="underline"
              href="https://github.com/Lopside95/findmydog-client"
              target="_blank"
            >
              Client Repo
            </Link>
            <Link
              className="underline"
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
    </main>
  );
};

export default FindMyDog;
