import { use, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SkillsAccordion from "../skillsAccordion";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  // const [isOpen, setOpenGroup] = useState<string>("item-1");
  // const [openGroup, setOpenGroup] = useState<string>("");

  // const stack = [
  //   "React",
  //   "TypeScript",
  //   "Next",
  //   "Tailwind CSS",
  //   "Sass",
  //   "Node",
  //   "MySQL",
  //   "MongoDB",
  //   "Vitest",
  //   "Heroku",
  //   "Express",
  //   "Knex",
  //   "Git", // Git always needs to be last because of how the ' | ' is rendered
  // ];
  const frontend = ["TypeScript", "React", "Next.js", "TailwindCSS", "Sass"];
  const backend = [
    "Node",
    "MySQL",
    "MongoDB",
    "Prisma ORM",
    "tRPC",
    "Express.js",
    "Knex.js",
  ];
  const tools = ["Vitest", "Heroku", "Zod", "React Hook Form", "Jira", "Git"]; // Git always needs to be last because of how the ' | ' is rendered

  const stack = [...frontend, ...backend, ...tools];

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleSize();
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });

  return (
    <section>
      <article className="align-middle w-full py-5 pl-5 sm:text-xl justify-between xl:justify-around max-sm:flex-col flex">
        <SkillsAccordion group="frontend" items={frontend} type="Frontend" />
        <SkillsAccordion group="backend" items={backend} type="Backend" />
        <SkillsAccordion group="tools" items={tools} type="Tools" />
      </article>
    </section>
  );
};

export default TechStack;

// <p>
//   {stack.map((skill) => {
//     return (
//       <span key={uuidv4()}>
//         {skill}{" "}
//         {skill !== "Git" && (
//           <span className="text-muted-foreground">|</span>
//         )}{" "}
//       </span>
//     );
//   })}
// </p>

// return (
//   <div>
//     <section className="align-middle w-full py-5 pl-5 sm:text-xl max-sm:flex-col flex">
//       {isMobile ? (
//         <dl className="max-md:text-pBase">
//           {stack.map((skill) => {
//             return <li key={uuidv4()}>{skill}</li>;
//           })}
//         </dl>
//       ) : (
//         <article className="flex justify-around w-full">
//           <SkillsAccordion
//             group="frontend"
//             items={frontend}
//             type="Frontend"
//           />
//           <SkillsAccordion group="backend" items={backend} type="Backend" />
//           <SkillsAccordion group="tools" items={tools} type="Tools" />
//         </article>
//       )}
//     </section>
//   </div>
// );
