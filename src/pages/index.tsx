import TechStack from "@home/techStack";
import Intro from "@/components/home/Intro";
import FindMyDog from "@/components/work/findmydog/findmydog";

export default function Home() {
  return (
    <main className="sm:items-center w-full sm:align-middle flex flex-col min-h-screen">
      <section className="items-center">
        <Intro />
        <TechStack />
        <FindMyDog />
      </section>
    </main>
  );
}
