import Education from "../components/cv/education";
import Experience from "../components/cv/experience";
import Footer from "../components/footer";

export default function CV() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen  ">
      <section className="sm:w-3/5 ">
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
