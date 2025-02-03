import SkillsAccordion from "../skillsAccordion";

const TechStack = () => {
  return (
    <section className="align-middle w-full px-0 py-5 sm:text-xl justify-between xl:justify-between max-sm:flex-col flex">
      <div className="sm:hidden w-full">
        <SkillsAccordion />
      </div>
      <div className="hidden sm:flex justify-between w-full md:pr-4 lg:pr-0 ">
        <SkillsAccordion />
      </div>
    </section>
  );
};

export default TechStack;
