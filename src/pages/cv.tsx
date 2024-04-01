import Navbar from "../components/Navbar";
import Education from "../components/cv/education";
import Experience from "../components/cv/experience";
import Footer from "../components/footer";

const CV = () => {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen bg-base-bg text-base-txtClr ">
      <Navbar />
      <section className="w-3/5 mt-10 pt-8">
        <article className="flex">
          <Experience />
        </article>
        <article>
          <Education />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default CV;
