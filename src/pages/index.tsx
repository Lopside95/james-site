import TechStack from "../components/techStack";
import Intro from "../components/Intro";
import GeneralInfo from "../components/generalInfo";

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
