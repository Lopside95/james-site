import Link from "next/link";
import { Button } from "@ui/button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const activePage = (path: string) => router.pathname === path;

  const navItemStyle = (page: string) =>
    ` hover:underline-offset-[6px] max-sm:mt-3 sm:text-xl text-2xl ${
      activePage(page) ? "underline underline-offset-[6px] " : ""
    }`;

  return (
    <div className="flex w-full sm:w-3/5 py-2 mb-3 sm:h-14 h-[4.5rem] justify-self-center inset-0   bg-base-bg  justify-between fixed  top-0  z-50  ">
      <Button className={navItemStyle("/")} variant="link">
        <Link href="/" tabIndex={-1}>
          Home
        </Link>
      </Button>
      <div className="flex ">
        <Button className={navItemStyle("/cv")} variant="link">
          <Link href="/cv" tabIndex={-1}>
            CV
          </Link>
        </Button>
        <Button className={navItemStyle("/work")} variant="link">
          <Link className="" href="/work" tabIndex={-1}>
            Work
          </Link>
        </Button>
        {/* Empty string because opens new tab so github will never be underlined */}
        <Button className={navItemStyle("")} variant="link">
          <Link
            href="https://github.com/Lopside95"
            tabIndex={-1}
            target="_blank"
          >
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
