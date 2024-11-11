import { useEffect, useState } from "react";

const TechStack = () => {
  // const sepStyle = (list: string) => {
  //   list.replace(/|\g, "<span className='text-muted-foreground'> | </span>")
  // }

  // const stack = [
  //   "React",
  //   "TypeScript",
  //   "Next.js",
  //   "Tailwind CSS",
  //   "tRPC",
  //   "Prisma ORM",
  //   "MongoDB",
  //   "Git",
  // ];
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
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Sass</li>
            <li>Node</li>
            <li>MySQL</li>

            {/* <li>tRPC</li>
          <li>Prisma ORM</li>
          <li>MongoDB</li> */}
            <li>Git</li>
          </dl>
        ) : (
          <p>
            {stack.map((skill) => {
              return (
                <span key="">
                  {skill}{" "}
                  {skill !== "Git" && (
                    <span className="text-muted-foreground">|</span>
                  )}{" "}
                </span>
              );
            })}
          </p>
          // <p>
          //   React | TypeScript | Next.js | Tailwind CSS | tRPC | Prisma ORM |
          //   MongoDB | Git
          // </p>
        )}

        {/* <Card className="w-full bg-transparent border-none ">
        <CardHeader>
          <CardTitle className="pl-3 -mb-4">Stack</CardTitle>
        </CardHeader>
        <CardContent className="">
          <dl>
            <li>React</li>
            <li>TypeScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>tRPC</li>
            <li>Prisma ORM</li>
            <li>MongoDB</li>
            <li>Git</li>
          </dl>
        </CardContent>
      </Card> */}
      </div>
    </>
  );
};

export default TechStack;
