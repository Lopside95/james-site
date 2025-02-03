import Education from "@/components/cv/education";
import Experience from "@/components/cv/experience";

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
