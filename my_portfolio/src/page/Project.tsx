import {
  deeghayuresort,
  grpc,
  keells,
  portfolio,
  schoolManagement,
  subtitle,
} from "../assets";
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
          <ProjectCard
            image={portfolio}
            onclickMore={() => {
              window.open(
                "https://github.com/RVPSA/my_portfolio_v.1.1",
                "_blank"
              );
            }}
            topic="Portfolio"
            description="My portfolio project"
            stack={["React", "Tailwind", "Docker"]}
          ></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard
            image={grpc}
            onclickMore={() => {
              window.open(
                "https://github.com/RVPSA/tic-tac-toe-grpc",
                "_blank"
              );
            }}
            topic="Tic Tac Toe"
            description="Real-time tic tac toe game"
            stack={["React", "GO", "Docker"]}
          ></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard
            image={subtitle}
            onclickMore={() => {
              window.open(
                "https://github.com/RVPSA/researchApplication",
                "_blank"
              );
            }}
            topic="Subtitle Generatoe"
            description="Realtime Subtitle Generator for Sinhala"
            stack={["Python", "OpenCv"]}
          ></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard
            image={keells}
            onclickMore={() => {
              window.open("https://www.keellssuper.com/", "_blank");
            }}
            topic="Client Project"
            description="Build features for e-commerce site"
            stack={["React", ".NET", "MSSQL"]}
          ></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard
            image={deeghayuresort}
            onclickMore={() => {
              window.open("https://deeghayutravel.netlify.app/", "_blank");
            }}
            topic="Client Project"
            description="Simple website for Resort (Freelance)"
            stack={["React", "Tailwind", "Netlify"]}
          ></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard
            image={schoolManagement}
            onclickMore={() => {
              window.open(
                "https://github.com/RVPSA/school_management_be",
                "_blank"
              );
            }}
            topic="School Management"
            description="School managemet system"
            stack={["React", ".NET", "MSSQL"]}
          ></ProjectCard>
        </div>
      </div>
    </>
  );
};

export default Project;
