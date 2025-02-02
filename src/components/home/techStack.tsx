import { use, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SkillsAccordion from "../skillsAccordion";
import { title } from "process";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
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
  const frontendMobile = [
    "TypeScript,",
    "React,",
    "Next.js,",
    "TailwindCSS,",
    "Sass",
  ];
  const backendMobile = [
    "Node.js,",
    "MySQL,",
    "MongoDB,",
    "Prisma ORM,",
    "tRPC,",
    "Express.js,",
    "Knex.js",
  ];
  const toolsMobile = [
    "Vitest,",
    "Heroku,",
    "Zod,",
    "React Hook Form,",
    "Git,",
    "Jira",
  ]; // Git always needs to be last because of how the ',' is rendered

  // const stackMobile = [...frontend, ...backend, ...tools];

  // const stackMobile = [
  //   {
  //     frontend: {
  //       title: "Frontend",
  //       val: frontend,
  //     },
  //   },
  //   {
  //     backend: {
  //       title: "Backend",
  //       val: backend,
  //     },
  //   },
  //   {
  //     tools: {
  //       title: "Tools",
  //       val: tools,
  //     },
  //   },
  // ];
  const stackMobile = [
    {
      title: "Frontend",
      val: frontend,
    },
    {
      title: "Backend",
      val: backend,
    },
    {
      title: "Tools",
      val: tools,
    },
  ];

  const handleAccordion = (group: string) => {
    if (isAccordionOpen) {
      setIsAccordionOpen(false);
    } else {
      setIsAccordionOpen(true);
    }
  };

  setTimeout(() => {
    setIsAccordionOpen(true);
  }, 1000);
  // useEffect(() => {}, []);

  useEffect(() => {
    const handleSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleSize();
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });

  return (
    <section>
      <article className="align-middle w-full px-0 py-5 sm:text-xl justify-between xl:justify-between max-sm:flex-col flex">
        {/* <div className="sm:hidden">
          <SkillsAccordion
            isAccordionOpen={isAccordionOpen}
            // setIsAccordionOpen={setIsAccordionOpen}
            group="frontend"
            items={frontendMobile}
            type="Frontend"
          />
          <SkillsAccordion
            isAccordionOpen={isAccordionOpen}
            // setIsAccordionOpen={setIsAccordionOpen}
            group="backend"
            items={backendMobile}
            type="Backend"
          />
          <SkillsAccordion
            group="tools"
            items={toolsMobile}
            type="Tools"
            isAccordionOpen={isAccordionOpen}
            // setIsAccordionOpen={setIsAccordionOpen}
          />
        </div> */}
        <div className="hidden sm:flex justify-between w-full md:pr-4 lg:pr-0 ">
          {stackMobile.map((stack) => {
            return (
              <SkillsAccordion
                isAccordionOpen={isAccordionOpen}
                setIsAccordionOpen={setIsAccordionOpen}
                key={uuidv4()}
                title={stack.title}
                val={stack.val}
              />
            );
          })}
          {/* <SkillsAccordion
            group="frontend"
            items={frontend}
            type="Frontend"
            isAccordionOpen={isAccordionOpen}
            // setIsAccordionOpen={setIsAccordionOpen}
          />

          <SkillsAccordion
            group="backend"
            items={backend}
            type="Backend"
            isAccordionOpen={isAccordionOpen}
            // setIsAccordionOpen={setIsAccordionOpen}
          />
          <SkillsAccordion
            group="tools"
            items={tools}
            type="Tools"
            isAccordionOpen={isAccordionOpen}
            // setIsAccordionOpen={setIsAccordionOpen}
          /> */}
        </div>
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
