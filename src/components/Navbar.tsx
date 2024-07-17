import Link from "next/link";
import { Button } from "@ui/button";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const activePage = (path: string) => router.pathname === path;

  const navItemStyle = (page: string) =>
    ` hover:underline-offset-[6px] max-md:mt-3 md:text-xl text-2xl ${
      activePage(page) ? "underline underline-offset-[6px] " : ""
    }`;

  return (
    <div className="flex w-full mb-3 md:h-14 h-[4.5rem] inset-0 items-center justify-center  text-base-txtClr  bg-base-bg  fixed  top-0  z-50">
      <div className="flex max-w-[1100px] md:w-[800px] xl:w-[1100px]  lg:w-[1000px] justify-between ">
        <Button
          className={`${navItemStyle("/")} xl:pl-0 md:-ml-5 lg:pl-28`}
          variant="link"
        >
          <Link href="/" tabIndex={-1}>
            Info
          </Link>
        </Button>
        <div className="flex md:pr-6 lg:pr-[7rem] ">
          {/* <Button className={navItemStyle("/cv")} variant="link">
          <Link href="/cv" tabIndex={-1}>
            CV
          </Link>
        </Button> */}
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
    </div>
  );
};

export default Navbar;
// import Link from "next/link";
// import { Button } from "@ui/button";
// import { useRouter } from "next/router";

// const Navbar = () => {
//   const router = useRouter();
//   const activePage = (path: string) => router.pathname === path;

//   const navItemStyle = (page: string) =>
//     ` hover:underline-offset-[6px] max-md:mt-3 md:text-xl text-2xl ${
//       activePage(page) ? "underline underline-offset-[6px] " : ""
//     }`;

//   return (
//     <div className="flex w-full py-2 mb-3 md:h-14 h-[4.5rem] px-3 lg:px-5 2xl:px-[16rem] xl:px-[7rem]  inset-0   text-base-txtClr  bg-base-bg justify-between fixed  top-0  z-50  ">
//       <Button className={navItemStyle("/")} variant="link">
//         <Link href="/" tabIndex={-1}>
//           Info
//         </Link>
//       </Button>
//       <div className="flex md:pr-6 ">
//         {/* <Button className={navItemStyle("/cv")} variant="link">
//           <Link href="/cv" tabIndex={-1}>
//             CV
//           </Link>
//         </Button> */}
//         <Button className={navItemStyle("/work")} variant="link">
//           <Link className="" href="/work" tabIndex={-1}>
//             Work
//           </Link>
//         </Button>
//         {/* Empty string because opens new tab so github will never be underlined */}
//         <Button className={navItemStyle("")} variant="link">
//           <Link
//             href="https://github.com/Lopside95"
//             tabIndex={-1}
//             target="_blank"
//           >
//             GitHub
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
