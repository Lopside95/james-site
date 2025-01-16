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
  isOpen?: string;
};

const SkillsAccordion = ({ type, items, isOpen }: SkillGroup) => {
  // const {type, items} = skills;

  return (
    <Accordion collapsible type="single" defaultValue={isOpen}>
      <AccordionItem value="item-1">
        <AccordionTrigger>{type}</AccordionTrigger>
        <AccordionContent>
          <dl>
            {items.map((item) => {
              return (
                <li className="text-lg" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </dl>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SkillsAccordion;
