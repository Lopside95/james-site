import Navbar from "../components/Navbar";
import TechStack from "../components/techStack";
import Intro from "../components/Intro";
import GeneralInfo from "../components/generalInfo";
import { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-full items-center align-middle flex flex-col min-h-screen bg-base-bg text-base-txtClr ">
      <Navbar />
      <section className="w-3/5 pt-8">
        <Intro />
        <article className="flex">
          <GeneralInfo />
        </article>
        <article className="flex items-center">
          <TechStack />
        </article>
      </section>
      <Footer />
    </div>
  );
}
