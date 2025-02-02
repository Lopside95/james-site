import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { v4 as uuidv4 } from "uuid";

type SkillGroup = {
  title: string;
  val: string[];
  // type: string;
  // items: string[];
  // group: string;
  isAccordionOpen: boolean;
  setIsAccordionOpen: (value: boolean) => void;
};

const SkillsAccordion = ({
  title,
  val,
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

  return (
    <Accordion
      className="lg:w-40"
      collapsible
      type="single"
      defaultValue={title.toLocaleLowerCase()}
    >
      <AccordionItem
        value={isAccordionOpen ? title.toLocaleLowerCase() : ""}
        onClick={() => {
          isAccordionOpen
            ? setIsAccordionOpen(false)
            : setIsAccordionOpen(true);
        }}
      >
        <AccordionTrigger className="text-3xl">{title} </AccordionTrigger>
        <AccordionContent className="">
          <ul className="flex sm:flex-col flex-wrap gap-2">
            {val.map((item) => {
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
