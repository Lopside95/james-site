import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TechStack = () => {
  const stack = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Sass",
    "Node",
    "MySQL",
    "Jest",
    "Heroku",
    "Loom",
    "Express.js",
    "Knex.js",
    "Git", // Git always needs to be last because of how the ' | ' is rendered
  ];

  const [isMobile, setIsMobile] = useState<boolean>();

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
