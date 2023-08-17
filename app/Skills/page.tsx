// import TabSkills from "../components/Skills/Tabs";
import TechStack from "../components/Skills/TechStack";
const Skills = () => {
  return (
    <div className="md:h-full flex flex-col px-8 md:px-0 lg:pb-14 ">
      <h1 className="text-neutral-700 text-3xl font-bold pt-16 pb-3 lg:pt-2 dark:text-textgray">
        Skills
      </h1>
      <div className="flex md:flex-row dark:text-textgray">
        {/* <TabSkills /> */}
        <TechStack />
      </div>
    </div>
  );
};

export default Skills;
