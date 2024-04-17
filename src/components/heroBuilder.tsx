/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const HeroBuilder = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState<boolean>();

  return (
    <div className="flex-col gap-5 flex pt-10 w-full">
      <div className="flex  items-center justify-evenly">
        <Link href="/">
          <h1 className="text-3xl">Hero Builder</h1>
        </Link>
        <img
          src="/hero-builder.png"
          className={`cursor-pointer object-contain w-80 pr-2 h-full hover:ease-in-out transition-all duration-300 hover:brightness-[.2] ${
            isHover && "brightness-[.2]"
          } `}
          alt=""
          onClick={() => router.push("/cv")}
        />
      </div>
      <div className="items-center justify-evenly flex">
        <h1 className="text-3xl">Regulars Work (?)</h1>
        <div className="w-80 h-80 bg-gray-800"></div>
      </div>
    </div>
  );
};
export default HeroBuilder;
// <div className="relative flex text-transparent items-center justify-center   focus-within:text-base-txtClr hover:text-base-txtClr hover:ease-in-out duration-300 h-3/4   ">
//     <Link
//       href="/cv"
//       className="absolute left-1/2 z-10 -translate-x-1/2 top-1/2 text-2xl brightness-125 focus-within:outline-none -translate-y-1/2  "
//       onMouseEnter={() => setIsHover(true)}
//       onMouseLeave={() => setIsHover(false)}
//     >
//       Hero Builder
//       <br />
//       <span className="text-sm">*Fix typos</span>
//     </Link>
// <img
//   src="/hero-builder.png"
//   className={`cursor-pointer object-contain w-11/12 pr-2 h-full hover:ease-in-out transition-all duration-300 hover:brightness-[.2] ${
//     isHover && "brightness-[.2]"
//   } `}
//   alt=""
//   onClick={() => router.push("/cv")}
// />
//   </div>
