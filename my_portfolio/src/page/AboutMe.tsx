import { akeshImage, design, dots } from "../assets";
import SkillCard from "../components/SkillCard";
import FunFact from "../components/FunFact";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [t] = useTranslation("about");
  return (
    <>
      <div className="grid grid-cols-12 pt-12 gap-5">
        {/* //<> Header section */}
        <div className="col-span-12 grid grid-cols-12 items-center pb-9">
          <div className="col-span-12 text-white">
            <div className="w-full text-xl font-semibold">
              <span className="text-[#775288] text-2xl font-bold">/</span>
              {t("aboutme.title")}
            </div>
          </div>
          <div className="col-span-12">
            <div className="text-slate-400">{t("aboutme.subtitle")}</div>
          </div>
        </div>
        {/* //<> Description section */}
        <div className="col-span-12 Laptop:col-span-6 text-slate-400">
          <h1 className="pb-2">{t("aboutme.heading")}</h1>
          <p className="hidden Laptop:flex pb-5">{t("aboutme.longText")}</p>
          <p className="Laptop:hidden pb-5">{t("aboutme.shortText")}</p>
        </div>
        {/* //<> Image section */}
        <div
          className="col-span-12 Laptop:col-span-6 grid grid-cols-12
          relative"
        >
          <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 top-20 left-10">
            <img src={dots} className="w-full h-full object-fill" />
          </div>
          <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 bottom-20 right-20">
            <img src={dots} className="w-full h-full object-fill" />
          </div>
          <div></div>
          <div className="col-span-12 Laptop:pl-3 relative z-10">
            <img src={akeshImage} className="w-full h-full object-contain" />
          </div>
          <div className="col-span-12 grid justify-center">
            <div className="bg-[#775288] w-72 h-1"></div>
          </div>
        </div>
        {/* //<> Skill card section */}
        <div className="col-span-12 items-center pb-9 text-white">
          <div className="w-full text-xl font-semibold">
            <span className="text-[#775288] text-2xl font-bold">#</span>
            {t("aboutme.secondTitle")}
          </div>
        </div>
        {/* //TODO Need to develop horizontol screen feature on mobile screen */}
        <div className="col-span-6 Laptop:col-span-3">
          <SkillCard
            skillType={t("aboutme.skill.firstCard.skillType")}
            skills={["JavaScript", "TypeScript", "C#", "HTML", "CSS"]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-3">
          <SkillCard
            skillType={t("aboutme.skill.secondCard.skillType")}
            skills={["MSSQL"]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-2">
          <SkillCard
            skillType={t("aboutme.skill.thirdCard.skillType")}
            skills={[
              "React",
              ".Net",
              "Asp.Net",
              "Tailwind",
              "Redux",
              "React-router",
            ]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-2">
          <SkillCard
            skillType={t("aboutme.skill.forthCard.skillType")}
            skills={["VSCode", "Linux", "Git"]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-2">
          <SkillCard
            skillType={t("aboutme.skill.fifthCard.skillType")}
            skills={["Docker", "Kubernetes", "Oracle"]}
          ></SkillCard>
        </div>
        {/* //<> Fun fact section */}
        <div className="col-span-12 items-center pb-9 text-white">
          <div className="w-full text-xl font-semibold">
            <span className="text-[#775288] text-2xl font-bold">#</span>
            {t("aboutme.thirdTitle")}
          </div>
        </div>
        <div className="col-span-12 Laptop:col-span-6 grid grid-cols-12 gap-2 pb-10">
          <div className="col-span-6">
            <FunFact fact={t("aboutme.funFacts.fact1")}></FunFact>
          </div>
          <div className="col-span-6">
            <FunFact fact={t("aboutme.funFacts.fact2")}></FunFact>
          </div>
          <div className="col-span-7">
            <FunFact fact={t("aboutme.funFacts.fact3")}></FunFact>
          </div>
          <div className="col-span-5">
            <FunFact fact={t("aboutme.funFacts.fact4")}></FunFact>
          </div>
          <div className="col-span-12">
            <FunFact fact={t("aboutme.funFacts.fact5")}></FunFact>
          </div>
        </div>
        <div className="hidden Laptop:col-span-6 Laptop:grid relative">
          <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 top-20 left-60">
            <img src={dots} className="w-full h-full object-fill" alt="dots" />
          </div>
          <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 left-36">
            <img
              src={design}
              className="w-full h-full object-fill"
              alt="design"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
