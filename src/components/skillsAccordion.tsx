import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { v4 as uuidv4 } from "uuid";

type SkillGroup = {
  type: string;
  items: string[];
  group: string;
};

const SkillsAccordion = ({ type, items, group }: SkillGroup) => {
  return (
    <Accordion
      className="lg:w-40"
      collapsible
      type="single"
      defaultValue={group}
    >
      <AccordionItem value={group}>
        <AccordionTrigger className="text-3xl">{type}</AccordionTrigger>
        <AccordionContent className="">
          <ul className="flex sm:flex-col flex-wrap gap-2">
            {items.map((item) => {
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
