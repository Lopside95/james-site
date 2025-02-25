import Link from "next/link";
import { Button } from "@ui/button";
import { useRouter } from "next/router";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const activePage = (path: string) => router.pathname === path;

  const [isOpen, setIsOpen] = useState<boolean>();

  const navItemStyle = (page: string) =>
    ` hover:underline-offset-[6px] max-md:mt-3 md:text-xl text-2xl ${
      activePage(page) ? "underline underline-offset-[6px] " : ""
    }`;

  return (
    <div className="flex w-full mb-3 md:h-14 h-[4.5rem] inset-0 items-center justify-center  text-base-txtClr  bg-base-bg  fixed  top-0  z-50">
      <div className="flex max-w-[1100px] md:w-[800px] 2xl:pl-10 xl:w-[1100px] xl:ml-16 lg:w-[1000px] max-md:w-full max-md:px-10 justify-between">
        <Button
          className={`${navItemStyle(
            "/"
          )} 2xl:-ml-40 xl:ml-[-7.6rem] md:pl-6 lg:pl-[4.2rem] xl:pl-9 pl-0 `}
          variant="link"
        >
          <Link href="/" tabIndex={-1}>
            JW
          </Link>
        </Button>
        <div className="flex md:pr-6 lg:pr-[7rem] ">
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <Button
                className={`${navItemStyle("/work")} ${
                  (router.pathname === "/work/findmydog" ||
                    router.pathname === "/work/regulars") &&
                  "underline"
                } `}
                variant="link"
              >
                Work
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-base-bg w-full">
              <div className="flex flex-col w-full gap-2">
                <p
                  className=""
                  onClick={() => {
                    router.push("/work/findmydog");
                  }}
                >
                  Find My Dog
                </p>
                <p className="" onClick={() => router.push("/work/regulars")}>
                  Regulars
                </p>
              </div>
            </PopoverContent>
          </Popover>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className={navItemStyle("/work/findmydog")}>
              Work
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Find My Dog</DropdownMenuItem>
              <DropdownMenuItem>Regulars</DropdownMenuItem>
          
            </DropdownMenuContent>
          </DropdownMenu> */}
          {/* <Button className={navItemStyle("/work/findmydog")} variant="link">
            <Link className="" href="/work/findmydog" tabIndex={-1}>
              Find My Dog
            </Link>
          </Button>
          <Button className={navItemStyle("/work/regulars")} variant="link">
            <Link className="" href="/work/regulars" tabIndex={-1}>
              Regulars
            </Link>
          </Button> */}
          <Button className={navItemStyle("/cv")} variant="link">
            <Link className="" href="/cv" tabIndex={-1}>
              CV
            </Link>
          </Button>
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
