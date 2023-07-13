import CardProjects from "../components/Projects/CardProjects";
const Project = () => {
  return (
    <div className="h-full flex-col md:flex-row px-8 md:px-0">
      <h1 className="text-neutral-700 font-bold text-3xl pt-16 dark:text-amber-500">
        Projects
      </h1>
      <CardProjects />
    </div>
  );
};

export default Project;
