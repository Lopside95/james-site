import TechStack from "@home/techStack";
import Intro from "@home/Intro";
import GeneralInfo from "@home/generalInfo";

export default function Home() {
  return (
    <div className="sm:w-full sm:items-center sm:align-middle flex flex-col min-h-screen ">
      <section className="sm:w-3/5   ">
        <Intro />
        <article className="flex ">
          <GeneralInfo />
        </article>
        <article className="">
          <TechStack />
        </article>
      </section>
    </div>
  );
}
