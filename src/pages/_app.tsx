import type { AppProps } from "next/app";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hammer from "@/components/hammer";
import { useEffect, useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLaptop, setIsLaptop] = useState<boolean>();

  useEffect(() => {
    const handleSize = () => {
      setIsLaptop(window.innerWidth > 1000);
    };

    handleSize();
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </Head>
      <Navbar />
      <main className="pt-16 pb-5 max-md:px-5 flex flex-col items-center">
        {Boolean(isLaptop) && <Hammer />}
        <div className="xl:max-w-[1150px] max-xl:-ml-0 md:pl-5 max-w-[900px] lg:-ml-24 md:max-w-[800px]">
          <Component {...pageProps} />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default MyApp;
