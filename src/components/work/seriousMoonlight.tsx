import Image from "next/image";
import React from "react";

const SeriousMoonlight = () => {
  const sway = "text-[4rem] my-5";

  return (
    <div className="flex justify-between">
      <p className="w-96 text-2xl ">
        Serious Moonlight Consulting develops strategies, concepts – doing the
        simple things right and the complicated things simply – to tell
        compelling stories which take customers out of crowded marketplaces to
        an ‘empty space’, where they can be seen and understood.
      </p>

      <h1 className=" text-2xl  opacity-70">TS</h1>
      <h1 className=" text-2xl  opacity-70">Next.js</h1>

      {/* <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
        alt=""
        width={100}
        height={100}
        className="absolute bottom-8 left-10 w-16 opacity-50"
      /> */}

      <section className="text-right self-center text-blue-800/80 ">
        <h1 className={sway}>
          <span className="" style={{ fontStyle: "italic" }}>
            Sway{" "}
          </span>{" "}
          through
        </h1>
        <h1 className={sway}>the crowd</h1>
        <h1 className={sway}>to an empty</h1>
        <h1 className={sway} style={{ fontStyle: "italic" }}>
          space
        </h1>
      </section>
    </div>
  );
};

export default SeriousMoonlight;
// import Image from "next/image";
// import React from "react";

// const SeriousMoonlight = () => {
//   return (
//     <div className="relative">
//       <p className="absolute left-10 top-16 w-96 text-2xl text-white/70">
//         Serious Moonlight Consulting develops strategies, concepts – doing the
//         simple things right and the complicated things simply – to tell
//         compelling stories which take customers out of crowded marketplaces to
//         an ‘empty space’, where they can be seen and understood.
//       </p>

//       <h1 className="absolute bottom-8 left-10 text-2xl text-white opacity-70">
//         TS
//       </h1>
//       <h1 className="absolute bottom-8 left-20 text-2xl text-white opacity-70">
//         Next.js
//       </h1>

//       {/* <Image
//         src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
//         alt=""
//         width={100}
//         height={100}
//         className="absolute bottom-8 left-10 w-16 opacity-50"
//       /> */}

//       <Image
//         alt="Serious Moonlight home page"
//         className="w-full"
//         height={1000}
//         src="/seriousML.png"
//         width={2000}
//       />
//     </div>
//   );
// };

// export default SeriousMoonlight;
