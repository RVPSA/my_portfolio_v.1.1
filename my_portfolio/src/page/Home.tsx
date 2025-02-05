import Button from "../components/Button";
import {
  firstComma,
  lastComma,
  akeshImage,
  dots,
  design,
  email,
  call,
  whatsapp,
  javascript,
  typescript,
  csharp,
  sql,
  reactjs,
  dotnet,
  tailwind,
  github,
  docker,
  kubernetes,
  portfolio,
  grpc,
  subtitle,
} from "../assets";
import SplitText from "../sideSupportComponent/SplitText";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
import { useNavigate } from "react-router";
import en from "../utilities/en/en.json";

//@ts-ignore
import LogoWall from "../sideSupportComponent/LogoWall";
import { useTranslation } from "react-i18next";
/**
 * Home page
 *
 */
const Home = () => {
  const navigate = useNavigate();

  //<> To chage the laguage when user changing the type
  const [t] = useTranslation("home");

  // <> Images for skill section
  const logoImgs = [
    { imgUrl: javascript, altText: "Javascript Logo" },
    { imgUrl: typescript, altText: "Typescript Logo" },
    { imgUrl: csharp, altText: "CSharp Logo" },
    { imgUrl: sql, altText: "SQL Logo" },
    { imgUrl: reactjs, altText: "ReactJs Logo" },
    { imgUrl: dotnet, altText: "Dotnet Logo" },
    { imgUrl: tailwind, altText: "Tailwind Logo" },
    { imgUrl: docker, altText: "Docker Logo Logo" },
    { imgUrl: kubernetes, altText: "Kubernetes Logo" },
    { imgUrl: github, altText: "Github Logo" },
  ];

  return (
    <>
      <div className="grid grid-cols-12 pt-12">
        {/* //<> Description section */}
        <div className="col-span-12 STablet:col-span-7">
          {/* // TODO Try to increase the gap between lines. */}
          <p className="text-3xl text-white font-bold">
            {t("home.mainDescription.normal1")}
            <span className="text-[#775288]">
              {t("home.mainDescription.highlight1")}
            </span>
            {t("home.mainDescription.normal2")}
            <span className="text-[#775288]">
              {t("home.mainDescription.highlight2")}
            </span>
            .
          </p>
          <h1 className="text-lg text-slate-400 pt-8 pb-6">
            {t("home.subDescription")}
          </h1>
          <Button
            text={t("home.contactButton")}
            onClick={() => {
              navigate("/contact");
            }}
            shortText={t("home.contactButtonShort")}
          ></Button>
        </div>
        {/* //<> Image section and current status */}
        <div className="col-span-12 STablet:col-span-5 relative">
          {/* //TODO Need to check design position */}
          <div className="absolute top-10">
            <img
              src={design}
              alt="Image of lines"
              className="w-10 h-10 Laptop:w-20 Laptop:h-20"
            />
          </div>
          <div className="absolute bottom-16 right-4">
            <img
              src={dots}
              alt="Image of fots"
              className="w-10 h-10 Laptop:w-20 Laptop:h-20"
            />
          </div>
          <img src={akeshImage} alt="Image of Akesh" className="w-full h-5/6" />

          <div className="border-2 border-slate-400 p-2 text-white grid grid-cols-12 items-center">
            <div className="w-[15px] h-[15px] bg-[#775288] col-span-1 justify-center"></div>
            <div className="col-span-11 justify-center items-center">
              <SplitText
                text={t("home.currentlyWorkingDescription")}
                className=""
                delay={120}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={() => {}}
              />
            </div>
          </div>
        </div>
        {/* //<> Tag line section,this section is hide on all mobile screen */}
        <div className="hidden STablet:grid col-span-12 justify-center mt-7">
          <div className="text-white border-2 p-3 border-slate-400 relative">
            {t("home.tag")}
            <div
              className={`absolute -top-3 left-3 w-[19px] h-[19px] bg-[#282c33]`}
            >
              <img
                src={firstComma}
                alt="First comma image"
                className="w-full h-full object-fill"
              />
            </div>
            <div
              className={`absolute -bottom-2 right-3 w-[19px] h-[19px] bg-[#282c33]`}
            >
              <img
                src={lastComma}
                alt="Last comma image"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
          <div className="grid justify-end">
            <div className="text-white border-x-2 border-b-2 p-3 border-slate-400">
              {t("home.tagAuthor")}
            </div>
          </div>
        </div>
        {/* //<> project section on home page */}
        <div className="col-span-12 grid grid-cols-12 gap-5 pt-6">
          {/* //<> Header section */}
          <div className="col-span-12 grid grid-cols-12 items-center pb-9">
            <div className="col-span-4 Laptop:col-span-2 text-white">
              <div className="w-full text-lg Laptop:text-xl font-semibold">
                <span className="text-[#775288] text-lg Laptop:text-2xl font-bold">
                  #
                </span>
                {t("home.project.title")}
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
            <div className="col-span-3 Laptop:col-span-5 grid justify-end">
              <div
                className="text-white cursor-pointer hidden Laptop:flex"
                onClick={() => {
                  navigate("/work");
                }}
              >
                {t("home.project.view")}
              </div>
              {/* //<> For mobile screen */}
              <div
                className="text-white cursor-pointer Laptop:hidden"
                onClick={() => {
                  navigate("/work");
                }}
              >
                {t("home.project.viewShortText")}
              </div>
            </div>
          </div>
          {/* //<> Project card section */}
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid Laptop:justify-center">
            <ProjectCard
              image={portfolio}
              onclickMore={() => {
                window.open(
                  "https://github.com/RVPSA/my_portfolio_v.1.1",
                  "_blank"
                );
              }}
              topic={t("home.project.firstCard.topic")}
              description={t("home.project.firstCard.description")}
              stack={en.home.project.firstCard.stack}
            ></ProjectCard>
          </div>
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid Laptop:justify-center">
            <ProjectCard
              image={grpc}
              onclickMore={() => {
                window.open(
                  "https://github.com/RVPSA/tic-tac-toe-grpc",
                  "_blank"
                );
              }}
              topic={t("home.project.secondCard.topic")}
              description={t("home.project.secondCard.description")}
              stack={en.home.project.secondCard.stack}
            ></ProjectCard>
          </div>
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid Laptop:justify-center">
            <ProjectCard
              image={subtitle}
              onclickMore={() => {
                window.open(
                  "https://github.com/RVPSA/researchApplication",
                  "_blank"
                );
              }}
              topic={t("home.project.thirdCard.topic")}
              description={t("home.project.thirdCard.description")}
              stack={en.home.project.thirdCard.stack}
            ></ProjectCard>
          </div>
        </div>
        {/* //<> skill section on home page */}
        <div className="col-span-12 grid grid-cols-12 gap-5 pt-8">
          {/* //<> Header section */}
          <div className="col-span-12 grid grid-cols-12 items-center pb-9">
            <div className="col-span-4 Laptop:col-span-2 text-white">
              <div className="w-full text-lg Laptop:text-xl font-semibold">
                <span className="text-[#775288] text-lg Laptop:text-2xl font-bold">
                  #
                </span>
                {t("home.skill.title")}
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
          </div>
          {/* //<> Skill card section first design section and then card part */}
          <div className="hidden Laptop:col-span-6 Laptop:grid justify-center relative">
            <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 top-56 left-5">
              <img src={design} className="w-full h-full object-fill" />
            </div>
            <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 top-3 left-4">
              <img src={dots} className="w-full h-full object-fill" />
            </div>
            <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 top-28 left-60">
              <img src={dots} className="w-full h-full object-fill" />
            </div>
            <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 border-2 border-slate-400 top-2 right-28"></div>
            <div className="absolute w-10 h-10 Laptop:w-20 Laptop:h-20 border-2 border-slate-400 top-60 right-2"></div>
          </div>
          <div className="col-span-12 gap-3 Laptop:col-span-6 grid grid-cols-12">
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType={t("home.skill.firstCard.skillType")}
                skills={en.home.skill.firstCard.skills}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType={t("home.skill.secondCard.skillType")}
                skills={en.home.skill.secondCard.skills}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType={t("home.skill.thirdCard.skillType")}
                skills={en.home.skill.thirdCard.skills}
              ></SkillCard>
            </div>

            <div className="hidden Laptop:grid Laptop:col-span-4"></div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType={t("home.skill.forthCard.skillType")}
                skills={en.home.skill.forthCard.skills}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType={t("home.skill.fifthCard.skillType")}
                skills={en.home.skill.fifthCard.skills}
              ></SkillCard>
            </div>
          </div>
          <div className="col-span-12 relative">
            <LogoWall
              items={logoImgs}
              direction="horizontal"
              pauseOnHover={true}
              size="clamp(8rem, 1rem + 20vmin, 25rem)"
              duration="45s"
              bgColor="#282c33"
              bgAccentColor=""
            ></LogoWall>
          </div>
        </div>
        {/* //<> About me section on Home page */}
        <div className="col-span-12 grid grid-cols-12 gap-5 pt-8">
          {/* //<> Header section */}
          <div className="col-span-12 grid grid-cols-12 pb-9 items-center">
            <div className="col-span-4 Laptop:col-span-2 text-white">
              <div className="w-full text-lg Laptop:text-xl font-semibold">
                <span className="text-[#775288] text-lg Laptop:text-2xl font-bold">
                  #
                </span>
                {t("home.aboutme.title")}
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
          </div>
          {/* //<> Description section */}
          <div className="col-span-12 Laptop:col-span-6 text-slate-400">
            <h1 className="pb-2">{t("home.aboutme.heading")}</h1>
            <p className="hidden Laptop:flex pb-5">
            {t("home.aboutme.longText")}
            </p>
            <p className="Laptop:hidden pb-5">
              {t("home.aboutme.shortText")}
            </p>
            <Button
              text={t("home.aboutme.readMoreButton")}
              onClick={() => {
                navigate("/aboutme");
              }}
              shortText={t("home.aboutme.readmoreShort")}
            ></Button>
          </div>
          {/* //<> Image Section */}
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
        </div>
        {/* //<> Contact me section on home page */}
        <div className="col-span-12 grid grid-cols-12 gap-5 py-8">
          {/* //<> Header section */}
          <div className="col-span-12 grid grid-cols-12 items-center pb-9">
            <div className="col-span-4 Laptop:col-span-2 text-white">
              <div className="w-full text-lg Laptop:text-xl font-semibold">
                <span className="text-[#775288] text-lg Laptop:text-2xl font-bold">
                  #
                </span>
                {t("home.contact.title")}
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
          </div>
          {/* //<> Description section */}
          <div className="col-span-12 Laptop:col-span-6">
            <p className="text-slate-400">
              {t("home.contact.description")}
            </p>
          </div>
          <div className="col-span-12 Laptop:col-span-6 grid justify-center">
            <div className="border-2 border-slate-400 p-5">
              <div className="text-white py-3">
                {t("home.contact.messageBox.title")}
              </div>
              <a
                href="mailto:akeshramasinghe@gmail.com?subject=Hello! From Portfolio"
                target="_blank"
              >
                <div className="text-slate-400 pb-3 flex flex-row gap-1">
                  <div className="w-[20px] h-[20px]">
                    <img
                      src={email}
                      alt="email Icon"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div>{t("home.contact.messageBox.email.mail")}</div>
                </div>
              </a>

              <a href="sms:+393920976765" target="_blank">
                <div className="text-slate-400 flex flex-row gap-1 pb-3">
                  <div className="w-[20px] h-[20px]">
                    <img
                      src={call}
                      alt="call Icon"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div>{t("home.contact.messageBox.sms.phone")}</div>
                </div>
              </a>

              <a href="https://wa.me/+393920976765" target="_blank">
                <div className="text-slate-400 flex flex-row gap-1">
                  <div className="w-[20px] h-[20px]">
                    <img
                      src={whatsapp}
                      alt="whatsapp Icon"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <div>{t("home.contact.messageBox.wtzapp.phone")}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
