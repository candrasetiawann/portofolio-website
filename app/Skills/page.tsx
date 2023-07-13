import TabSkills from "../components/Skills/Tabs";
const Skills = () => {
  return (
    <div className="md:h-full flex flex-col px-8 md:px-0">
      <h1 className="text-neutral-700 text-3xl font-bold pt-16 dark:text-amber-500">
        Skills
      </h1>
      <div className="flex md:flex-row pb-8 dark:text-sky-600">
        <TabSkills />
      </div>
    </div>
  );
};

export default Skills;
