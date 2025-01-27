import Education from "@/components/cv/education";
import Experience from "@/components/cv/experience";
import Intro from "@/components/home/Intro";
import TechStack from "@/components/home/techStack";
import Wheel from "@/components/home/wheel";

const CV = () => {
  return (
    <main className="sm:items-center w-full sm:align-middle flex flex-col min-h-screen ">
      <section className="items-center">
        <article className="flex">
          <Experience />
        </article>
        <article>
          <Education />
        </article>
      </section>
    </main>
  );
};
export default CV;
