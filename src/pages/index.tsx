import TechStack from "../components/techStack";
import Intro from "../components/Intro";
import GeneralInfo from "../components/generalInfo";

import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="sm:w-full sm:items-center  sm:align-middle flex flex-col min-h-screen bg-blue-700 ">
      <section className="sm:w-3/5   pt-8">
        <Intro />
        <article className="flex l">
          <GeneralInfo />
        </article>
        <article className="">
          <TechStack />
        </article>
        <div className="bg-red-100">WHWUjk</div>
      </section>
      <Footer />
    </div>
  );
}
