import ProjectCard from "../components/ProjectCard";
/**
 * Projec page, That shows the completed project
 */
const Project = () => {
  return (
    <>
      <div className="grid grid-cols-12 pt-12 gap-5">
        {/* //<> Header section */}
        <div className="col-span-12 grid grid-cols-12 items-center pb-9">
          <div className="col-span-12 text-white">
            <div className="w-full text-xl font-semibold">
              <span className="text-[#775288] text-2xl font-bold">/</span>
              Projects
            </div>
          </div>
          <div className="col-span-12">
            <div className="text-slate-400">List of my projects </div>
          </div>
        </div>
        {/* //<> Project card section */}
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard></ProjectCard>
        </div>
      </div>
    </>
  );
};

export default Project;
