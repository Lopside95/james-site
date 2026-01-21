import { useState, useEffect } from "react";
import {
  backend,
  backendMobile,
  frontend,
  frontendMobile,
  tools,
  toolsMobile,
} from "@/helpers/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { v4 as uuidv4 } from "uuid";

const SkillsAccordion = () => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(["frontend", "backend", "tools"]);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Accordion
      className="justify-between w-full max-md:flex-col flex  "
      type="multiple"
      value={value}
      onValueChange={setValue}
    >
      <AccordionItem className="md:w-40 md:border-b-0 " value="frontend">
        <AccordionTrigger className="text-3xl no-underline">
          Frontend
        </AccordionTrigger>
        <AccordionContent className="">
          <ul className="flex md:hidden flex-wrap gap-2">
            {frontendMobile.map((item) => {
              return (
                <li className="text-2xl sm:text-xl" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="hidden md:flex md:flex-col flex-wrap gap-2">
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
      <AccordionItem className="md:w-40 md:border-b-0 " value="backend">
        <AccordionTrigger className="text-3xl">Backend</AccordionTrigger>
        <AccordionContent>
          <ul className="flex md:hidden flex-wrap gap-2">
            {backendMobile.map((item) => {
              return (
                <li className="text-2xl md:text-xl" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="hidden md:flex md:flex-col flex-wrap gap-2">
            {backend.map((item) => {
              return (
                <li className="text-2xl md:text-xl" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem className="md:w-40 md:border-b-0" value="tools">
        <AccordionTrigger className="text-3xl">Tools</AccordionTrigger>
        <AccordionContent>
          <ul className="flex md:hidden flex-wrap gap-2">
            {toolsMobile.map((item) => {
              return (
                <li className="text-2xl md:text-xl" key={uuidv4()}>
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="hidden md:flex md:flex-col flex-wrap gap-2">
            {tools.map((item) => {
              return (
                <li className="text-2xl md:text-xl" key={uuidv4()}>
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
