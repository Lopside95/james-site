import type { AppProps } from "next/app";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hammer from "@/components/hammer";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function MyApp({ Component, pageProps }: AppProps) {
  // const isLaptop = useMediaQuery({
  //   query: "(min-width: 1200px)",
  // });

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
      <main className="pt-16 pb-5 max-md:px-5  flex flex-col items-center">
        {Boolean(isLaptop) && <Hammer />}
        <div className="max-w-[1200px]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
