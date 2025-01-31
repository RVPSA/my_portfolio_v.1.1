import { useTranslation } from "react-i18next";
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

    const [t, i18n] = useTranslation("work");

  return (
    <>
      <div className="grid grid-cols-12 pt-12 gap-5">
        {/* //<> Header section */}
        <div className="col-span-12 grid grid-cols-12 items-center pb-9">
          <div className="col-span-12 text-white">
            <div className="w-full text-xl font-semibold">
              <span className="text-[#775288] text-2xl font-bold">/</span>
              {t("project.title")}
            </div>
          </div>
          <div className="col-span-12">
            <div className="text-slate-400">{t("project.subtitle")}</div>
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
            topic={t("project.firstCard.topic")}
            description={t("project.firstCard.description")}
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
            topic={t("project.secondCard.topic")}
            description={t("project.secondCard.description")}
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
            topic={t("project.thirdCard.topic")}
            description={t("project.thirdCard.description")}
            stack={["Python", "OpenCv"]}
          ></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard
            image={keells}
            onclickMore={() => {
              window.open("https://www.keellssuper.com/", "_blank");
            }}
            topic={t("project.forthCard.topic")}
            description={t("project.forthCard.description")}
            stack={["React", ".NET", "MSSQL"]}
          ></ProjectCard>
        </div>
        <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-start">
          <ProjectCard
            image={deeghayuresort}
            onclickMore={() => {
              window.open("https://deeghayutravel.netlify.app/", "_blank");
            }}
            topic={t("project.fifthCard.topic")}
            description={t("project.fifthCard.description")}
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
            topic={t("project.sixthCard.topic")}
            description={t("project.sixthCard.description")}
            stack={["React", ".NET", "MSSQL"]}
          ></ProjectCard>
        </div>
      </div>
    </>
  );
};

export default Project;
