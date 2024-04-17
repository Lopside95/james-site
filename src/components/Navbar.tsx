import Link from "next/link";
import { Button, ButtonProps } from "./ui/button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const activePage = (path: string) => router.pathname === path;

  return (
    <div className="flex w-3/5 py-2 px-1 justify-between fixed top-0 bg-base-bg z-50  ">
      <div>
        <Button
          className={`text-lg pr-10 hover:underline-offset-[6px] ${
            activePage("/") ? "underline underline-offset-[6px] " : ""
          }`}
          variant="link"
        >
          <Link tabIndex={-1} href="/" prefetch={true}>
            Home
          </Link>
        </Button>
      </div>
      <div>
        <Button
          className={`text-lg  hover:underline-offset-[6px] ${
            activePage("/cv") ? "underline underline-offset-[6px]   " : ""
          }`}
          variant="link"
        >
          <Link tabIndex={-1} href="/cv">
            CV
          </Link>
        </Button>
        <Button
          className={`text-lg  hover:underline-offset-[6px] focus:outline-none focus:disabled ${
            activePage("/work") ? "underline underline-offset-[6px]   " : ""
          }`}
          variant="link"
        >
          <Link className="" tabIndex={-1} href="/work">
            Work
          </Link>
        </Button>
        <Button
          className="text-lg hover:underline-offset-[6px] pr-5"
          variant="link"
        >
          <Link
            tabIndex={-1}
            target="_blank"
            href="https://github.com/Lopside95"
          >
            GitHub
          </Link>
        </Button>
        {/* <Button
          className="text-lg hover:underline-offset-[6px] pr-5"
          variant="link"
        >
          <Link href="https://www.linkedin.com/in/james-wallington-2a122bb6/">
            LinkedIn
          </Link>
        </Button> */}
      </div>
    </div>
  );
};

export default Navbar;
// import Link from "next/link";
// import { Button, ButtonProps } from "./ui/button";

// const Navbar = () => {
//   return (
//     <div className="flex mb-5 border bg-black border-black w-full justify-center gap-3">
//       <Button>
//         <Link href="/">Home</Link>
//       </Button>
//       <Button>
//         <Link href="/writing">Writing</Link>
//       </Button>
//     </div>
//   );
// };

// export default Navbar;
