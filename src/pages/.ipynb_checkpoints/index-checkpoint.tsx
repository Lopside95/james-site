import TechStack from "@home/techStack";
import Experience from "@/components/cv/experience";
import Education from "@/components/cv/education";
import Intro from "@/components/home/Intro";



export default function Home() {


console.log("Hello")
    
  return (
    <div className="sm:items-center w-full sm:align-middle flex flex-col min-h-screen ">
      <section className="items-center">
        <Intro />
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

