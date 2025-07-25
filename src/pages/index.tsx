import TechStack from "@home/techStack";
import Intro from "@/components/home/Intro";
import { ProjectCard } from "@/components/ProjectCard";
import { RegularsProjectCard } from "@/components/RegularsProjectCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>James Wallington - Home</title>
        <meta
          name="description"
          lang="en"
          content="Welcome to my portfolio website."
        />
      </Head>
      <main className="sm:items-center w-full sm:align-middle flex flex-col min-h-screen">
        <Intro />
        <TechStack />
        <section className="flex max-lg:flex-col gap-12 py-14">
          <ProjectCard
            title="Find My Dog"
            description="Capstone project for the BrainStation software engineering bootcamp."
            image="/findmydog/home-2.png"
            href="/work/findmydog"
            tags={["TypeScript", "React", "TailwindCSS", "MySQL", "Express.js"]}
          />
          <RegularsProjectCard
            title="Regulars"
            description="Innovative digital solutions for the hospitality industry."
            image="/regulars/regularsHome.png"
            href="/work/regulars"
            tags={["TypeScript", "Next.js", "TailwindCSS", "MongoDB", "tRPC"]}
          />
        </section>
      </main>
    </>
  );
}
