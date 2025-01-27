import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SkillsAccordion from "../skillsAccordion";

const TechStack = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  const stack = [
    "TypeScript",
    "React",
    "Next",
    "Tailwind CSS",
    "Sass",
    "Node",
    "MySQL",
    "MongoDB",
    "Jest",
    "Heroku",
    "Express",
    "Knex",
    "Git", // Git always needs to be last because of how the ' | ' is rendered
  ];
  // const frontend = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Sass"];
  // const backend = [
  //   "Node",
  //   "MySQL",
  //   "MongoDB",
  //   "Prisma ORM",
  //   "tRPC",
  //   "Express.js",
  //   "Knex.js",
  // ];
  // const tools = ["Vitest", "Heroku", "Zod", "React Hook Form", "Jira", "Git"]; // Git always needs to be last because of how the ' | ' is rendered

  // const stack = [...frontend, ...backend, ...tools];

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
    <>
      <div className="align-middle w-full py-5 pl-5 sm:text-xl max-sm:flex-col flex">
        {isMobile ? (
          <dl className="max-md:text-pBase">
            {stack.map((skill) => {
              return <li key={uuidv4()}>{skill}</li>;
            })}
          </dl>
        ) : (
          <p>
            {stack.map((skill) => {
              return (
                <span key={uuidv4()}>
                  {skill}{" "}
                  {skill !== "Git" && (
                    <span className="text-muted-foreground">|</span>
                  )}{" "}
                </span>
              );
            })}
          </p>
        )}
      </div>
    </>
  );
};

export default TechStack;
