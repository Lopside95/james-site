import TechStack from "@home/techStack";
import Experience from "@/components/cv/experience";
import Education from "@/components/cv/education";

export default function Home() {
  return (
    <div className="sm:w-full sm:items-center sm:align-middle flex flex-col min-h-screen ">
      <section className="sm:w-3/5">
        <TechStack />
        <article className="flex">
          <Experience />
        </article>
        <article>
          <Education />
        </article>
      </section>
    </div>
  );
}
