import Education from "@/components/cv/education";
import Experience from "@/components/cv/experience";
import Head from "next/head";

const CV = () => {
  return (
    <>
      <Head>
        <title>James Wallington - CV</title>
        <meta name="description" content="James Wallington's CV" />
        <meta lang="en" />
      </Head>

      <main className="sm:items-center w-full sm:align-middle flex flex-col min-h-screen ">
        <section className="items-center">
          <article className="">
            <Experience />
          </article>
          <article>
            <Education />
          </article>
        </section>
      </main>
    </>
  );
};

export default CV;
