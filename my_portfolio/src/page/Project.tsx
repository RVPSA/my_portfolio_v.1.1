import React from "react";
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
          <div className="col-span-4 Laptop:col-span-2 text-white"><div className="w-full">#Projects</div></div>
          <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
          <div className="col-span-3 Laptop:col-span-4 grid justify-end Laptop:pr-11">
            <div className="text-white">Viewing </div>
          </div>
        </div>
            {/* //<> Project card section */}
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-center">
            <ProjectCard></ProjectCard>
          </div>
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-center">
            <ProjectCard></ProjectCard>
          </div>
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-center">
            <ProjectCard></ProjectCard>
          </div>
      </div>
    </>
  );
};

export default Project;
