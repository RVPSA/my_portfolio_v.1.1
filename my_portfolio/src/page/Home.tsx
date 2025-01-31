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
import { Link, useNavigate } from "react-router";
//@ts-ignore
import LogoWall from "../sideSupportComponent/LogoWall";
/**
 * Home page
 *
 */
const Home = () => {
  const navigate = useNavigate();

  // <> Images for skill section
  const logoImgs = [
    { imgUrl: javascript, altText: "React Bits Logo" },
    { imgUrl: typescript, altText: "React Bits Logo" },
    { imgUrl: csharp, altText: "React Bits Logo" },
    { imgUrl: sql, altText: "React Bits Logo" },
    { imgUrl: reactjs, altText: "React Bits Logo" },
    { imgUrl: dotnet, altText: "React Bits Logo" },
    { imgUrl: tailwind, altText: "React Bits Logo" },
    { imgUrl: docker, altText: "React Bits Logo" },
    { imgUrl: kubernetes, altText: "React Bits Logo" },
    { imgUrl: github, altText: "React Bits Logo" },
  ];

  return (
    <>
      <div className="grid grid-cols-12 pt-12">
        {/* //<> Description section */}
        <div className="col-span-12 STablet:col-span-7">
          {/* // TODO Try to increase the gap between lines. */}
          <p className="text-3xl text-white font-bold">
            Akesh is a <span className="text-[#775288]">Web designer</span> and
            a{" "}
            <span className="text-[#775288]">fullstack software Engineer</span>.
          </p>
          <h1 className="text-lg text-slate-400 pt-8 pb-6">
            He crafts responsive web sites where technologies meet creative
          </h1>
          <Button
            text="Contact me !!"
            onClick={() => {
              navigate("/contact");
            }}
            shortText="Call !"
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
                text="Currently working on portfolio"
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
            With great power comes great Elctricity bill
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
              -Dr. Who
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
                projects
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
                View all
              </div>
              {/* //<> For mobile screen */}
              <div
                className="text-white cursor-pointer Laptop:hidden"
                onClick={() => {
                  navigate("/work");
                }}
              >
                View
              </div>
            </div>
          </div>
          {/* //<> Project card section */}
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-center">
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
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-center">
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
          <div className="col-span-12 STablet:col-span-6 Laptop:col-span-4 grid justify-center">
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
                skills
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
                skillType="Languages"
                skills={["JavaScript", "TypeScript", "C#", "HTML", "CSS"]}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard skillType="Databases" skills={["MSSQL"]}></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType="Frameworks"
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

            <div className="hidden Laptop:grid Laptop:col-span-4"></div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType="Tools"
                skills={["VSCode", "Linux", "Git"]}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType="Others"
                skills={["Docker", "Kubernetes", "Oracle"]}
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
                about-me
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
          </div>
          {/* //<> Description section */}
          <div className="col-span-12 Laptop:col-span-6 text-slate-400">
            <h1 className="pb-2">Hello, i’m Akesh! </h1>
            <p className="hidden Laptop:flex pb-5">
              I am a highly motivated and self-taught Fullstack Developer with a
              strong focus on building scalable, efficient, and user-friendly
              web applications. Over the past year, I have honed my skills in
              both frontend and backend development, seamlessly integrating
              responsive designs with robust server-side logic. I have worked
              with a diverse range of clients, helping them enhance their online
              presence by delivering end-to-end solutions that are both visually
              appealing and technically sound. My passion for learning drives me
              to stay ahead of the curve by exploring the latest technologies,
              frameworks, and best practices in web development. I am committed
              to creating seamless, high-performance, and impactful digital
              experiences tailored to the unique needs of each project.
            </p>
            <p className="Laptop:hidden pb-5">
              I am a self-taught Fullstack Developer focused on building
              scalable, efficient, and user-friendly web applications. With
              expertise in both frontend and backend development, I create
              seamless, high-performance digital experiences. I have worked with
              diverse clients, delivering visually appealing and technically
              sound solutions. Passionate about learning, I stay updated with
              the latest technologies to ensure innovative and impactful web
              development.
            </p>
            <Button
              text="Read More"
              onClick={() => {
                navigate("/aboutme");
              }}
              shortText="More.."
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
                contacts
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
          </div>
          {/* //<> Description section */}
          <div className="col-span-12 Laptop:col-span-6">
            <p className="text-slate-400">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="col-span-12 Laptop:col-span-6 grid justify-center">
            <div className="border-2 border-slate-400 p-5">
              <div className="text-white py-3">Message me here</div>
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
                  <div>akeshramasinghe@gmail.com</div>
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
                  <div>+393920976765</div>
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
                  <div>+393920976765</div>
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
