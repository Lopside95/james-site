import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const activePage = (path: string) => router.pathname === path;

  const navItemStyle = (page: string) =>
    ` hover:underline-offset-[6px] max-sm:mt-3 sm:text-xs text-2xl ${
      activePage(page) ? "underline underline-offset-[6px] " : ""
    }`;

  // const navItemStyle = (page: string) => {

  // ` pr-10 hover:underline-offset-[6px] ${
  //   activePage(page) ? "underline underline-offset-[6px] " : ""
  //   }`;
  //   }

  return (
    <div className="flex w-full sm:w-3/5 py-2 mb-3 px-2 sm:h-12 h-[4.5rem] justify-self-center inset-0 bg-base-bg justify-between fixed  top-0  z-50  ">
      <Button
        className={navItemStyle("/")}
        // className={` pr-10 hover:underline-offset-[6px] ${
        //   activePage("/") ? "underline underline-offset-[6px] " : ""
        // }`}
        variant="link"
      >
        <Link tabIndex={-1} href="/">
          Home
        </Link>
      </Button>
      <div className="flex ">
        <Button
          className={navItemStyle("/cv")}
          // className={`text-lg  hover:underline-offset-[6px] ${
          //   activePage("/cv") ? "underline underline-offset-[6px]   " : ""
          // }`}
          variant="link"
        >
          <Link tabIndex={-1} href="/cv">
            CV
          </Link>
        </Button>
        <Button
          className={navItemStyle("/work")}
          // className={`text-lg  hover:underline-offset-[6px] focus:outline-none focus:disabled ${
          //   activePage("/work") ? "underline underline-offset-[6px]   " : ""
          // }`}
          variant="link"
        >
          <Link className="" tabIndex={-1} href="/work">
            Work
          </Link>
        </Button>
        {/* Empty string because opens new tab so github will never be underlined */}
        <Button className={navItemStyle("")} variant="link">
          <Link
            tabIndex={-1}
            target="_blank"
            href="https://github.com/Lopside95"
          >
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

// "text-lg hover:underline-offset-[6px] pr-5"
