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
      className="lg:w-32"
      collapsible
      type="single"
      defaultValue={group}
    >
      <AccordionItem value={group}>
        <AccordionTrigger>{type}</AccordionTrigger>
        <AccordionContent>
          <ul>
            {items.map((item) => {
              return (
                <li className="text-lg" key={uuidv4()}>
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
