import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { v4 as uuidv4 } from "uuid";

type SkillGroup = {
  // title: string;
  // val: string[];
  // type: string;
  // items: string[];
  // group: string;
  isAccordionOpen: boolean;
  setIsAccordionOpen: (value: boolean) => void;
};

const SkillsAccordion = ({
  // title,
  // val,
  isAccordionOpen,
  setIsAccordionOpen,
}: // type,
// items,
// group,
// isAccordionOpen,
SkillGroup) => {
  // const handleAccordion = () => {
  //   isAccordionOpen ? setIsAccordionOpen(false) : setIsAccordionOpen(true);
  // };

  // const dataState = isAccordionOpen ? "open" : "closed";
  // const stackMobile = [
  //   {
  //     title: "Frontend",
  //     val: frontend,
  //   },
  //   {
  //     title: "Backend",
  //     val: backend,
  //   },
  //   {
  //     title: "Tools",
  //     val: tools,
  //   },
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
  const [dataState, setDataState] = useState<string>("closed");

  useEffect(() => {
    setTimeout(() => {});
  });

  return (
    <Accordion className="lg:w-40 gap-10 flex" collapsible type="single">
      <AccordionItem
        value={"data"}
        // value={"frontend backend tools"}
        // value={isAccordionOpen ? title.toLocaleLowerCase() : ""}
        // onClick={() => {
        //   isAccordionOpen
        //     ? setIsAccordionOpen(false)
        //     : setIsAccordionOpen(true);
        // }}
      >
        <AccordionTrigger className="text-3xl">Frontend</AccordionTrigger>
        <AccordionContent
        // className={`transition-all duration-1000 ${!isAccordionOpen}:animate-accordion-up ${isAccordionOpen}:animate-accordion-down`}
        >
          <ul className="flex sm:flex-col flex-wrap gap-2">
            {frontend.map((item) => {
              return (
                <li className="text-2xl sm:text-xl" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value={"data"}
        // value={"frontend backend tools"}
        // value={isAccordionOpen ? title.toLocaleLowerCase() : ""}
        // onClick={() => {
        //   isAccordionOpen
        //     ? setIsAccordionOpen(false)
        //     : setIsAccordionOpen(true);
        // }}
      >
        <AccordionTrigger className="text-3xl">Backend</AccordionTrigger>
        <AccordionContent
        // className={`transition-all duration-1000 ${!isAccordionOpen}:animate-accordion-up ${isAccordionOpen}:animate-accordion-down`}
        >
          <ul className="flex sm:flex-col flex-wrap gap-2">
            {backend.map((item) => {
              return (
                <li className="text-2xl sm:text-xl" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value={"data"}
        // value={"frontend backend tools"}
        // value={isAccordionOpen ? title.toLocaleLowerCase() : ""}
        // onClick={() => {
        //   isAccordionOpen
        //     ? setIsAccordionOpen(false)
        //     : setIsAccordionOpen(true);
        // }}
      >
        <AccordionTrigger className="text-3xl">Tools</AccordionTrigger>
        <AccordionContent
        // className={`transition-all duration-1000 ${!isAccordionOpen}:animate-accordion-up ${isAccordionOpen}:animate-accordion-down`}
        >
          <ul className="flex sm:flex-col flex-wrap gap-2">
            {tools.map((item) => {
              return (
                <li className="text-2xl sm:text-xl" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SkillsAccordion;
// import { useEffect, useState } from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import { v4 as uuidv4 } from "uuid";

// type SkillGroup = {
//   type: string;
//   items: string[];
//   group: string;
//   isAccordionOpen: boolean;
//   // setIsAccordionOpen: (value: boolean) => void;
// };

// const SkillsAccordion = ({
//   type,
//   items,
//   group,
//   isAccordionOpen,
// }: // setIsAccordionOpen,
// SkillGroup) => {
//   // const handleAccordion = () => {
//   //   isAccordionOpen ? setIsAccordionOpen(false) : setIsAccordionOpen(true);
//   // };

//   return (
//     <Accordion
//       className="lg:w-34"
//       collapsible
//       type="single"
//       defaultValue={group}
//     >
//       <AccordionItem value={isAccordionOpen ? group : ""}>
//         <AccordionTrigger className="text-3xl">{type} </AccordionTrigger>
//         <AccordionContent className="">
//           <ul className="flex sm:flex-col flex-wrap gap-2">
//             {items.map((item) => {
//               return (
//                 <li className="text-2xl sm:text-xl" key={uuidv4()}>
//                   {item}
//                 </li>
//               );
//             })}
//           </ul>
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// };

// export default SkillsAccordion;
