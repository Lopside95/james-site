import FixedScroll from "@/components/work/fixedScroll";
import Education from "@cv/education";
import Experience from "@cv/experience";

export default function CV() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen  ">
      <section className="sm:w-3/5 ">
        <FixedScroll />
        {/* <article className="flex">
          <Experience />
        </article>
        <article>
          <Education />
        </article> */}
      </section>
    </div>
  );
}
