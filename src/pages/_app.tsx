import type { AppProps } from "next/app";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hammer from "@/components/hammer";
import { useEffect, useState } from "react";

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
      <Navbar />
      <main className="pt-16 pb-5">
        {Boolean(isLaptop) && <Hammer />}
        {/* <Hammer /> */}
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
