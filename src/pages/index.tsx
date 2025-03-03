import TechStack from "@home/techStack";
import Intro from "@/components/home/Intro";
import FindMyDog from "@/components/work/findmydog/findmydog";
import { ProjectCard } from "@/components/ProjectCard";
import { RegularsProjectCard } from "@/components/RegularsProjectCard";

export default function Home() {
  return (
    <main className="sm:items-center w-full sm:align-middle flex flex-col min-h-screen">
      <Intro />
      <TechStack />
      <section className="flex max-lg:flex-col gap-12 py-14">
        <ProjectCard
          title="Find My Dog"
          description="Capstone project for the BrainStation software engineering bootcamp."
          image="/findmydog/home.png"
          href="/work/findmydog"
          tags={["TypeScript", "React", "Sass", "MySQL", "Express.js"]}
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
  );
}
