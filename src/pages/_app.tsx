import type { AppProps } from "next/app";
import "../globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-5">
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
