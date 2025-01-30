import Button from "../components/Button";
import {
  firstComma,
  lastComma,
  akeshImage,
  dots,
  design,
  email,
  linkedin,
  call,
  whatsapp,
} from "../assets";
import SplitText from "../sideSupportComponent/SplitText";
import ProjectCard from "../components/ProjectCard";
import SkillCard from "../components/SkillCard";
/**
 * Home page
 *
 */
const Home = () => {
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
            onClick={() => {}}
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
              <div className="w-full text-xl font-semibold">
                <span className="text-[#775288] text-2xl font-bold">#</span>
                projects
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
            <div className="col-span-3 Laptop:col-span-5 grid justify-end">
              <div className="text-white">View All </div>
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
        {/* //<> skill section on home page */}
        <div className="col-span-12 grid grid-cols-12 gap-5 pt-8">
          {/* //<> Header section */}
          <div className="col-span-12 grid grid-cols-12 items-center pb-9">
            <div className="col-span-4 Laptop:col-span-2 text-white">
              <div className="w-full text-xl font-semibold">
                <span className="text-[#775288] text-2xl font-bold">#</span>
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
                skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType="Languages"
                skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType="Languages"
                skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
              ></SkillCard>
            </div>

            <div className="hidden Laptop:grid Laptop:col-span-4"></div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType="Languages"
                skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
              ></SkillCard>
            </div>
            <div className="col-span-6 Laptop:col-span-4">
              <SkillCard
                skillType="Languages"
                skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
              ></SkillCard>
            </div>
          </div>
        </div>
        {/* //<> About me section on Home page */}
        <div className="col-span-12 grid grid-cols-12 gap-5 pt-8">
          {/* //<> Header section */}
          <div className="col-span-12 grid grid-cols-12 pb-9 items-center">
            <div className="col-span-4 Laptop:col-span-2 text-white">
              <div className="w-full text-xl font-semibold">
                <span className="text-[#775288] text-2xl font-bold">#</span>
                about-me
              </div>
            </div>
            <div className="h-[2px] bg-[#775288] col-span-4 Laptop:col-span-5"></div>
          </div>
          {/* //<> Description section */}
          <div className="col-span-12 Laptop:col-span-6 text-slate-400">
            <h1 className="pb-2">Hello, i’m Akesh! </h1>
            <p className="pb-5">
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences. Transforming my creativity
              and knowledge into a websites has been my passion for over a year.
              I have been helping various clients to establish their presence
              online. I always strive to learn about the newest technologies and
              frameworks.
            </p>
            <Button
              text="Read More"
              onClick={() => {}}
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
              <div className="w-full text-xl font-semibold">
                <span className="text-[#775288] text-2xl font-bold">#</span>
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
              <a href="mailto:akeshramasinghe@gmail.com?subject=Hello! From Portfolio">
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

              <a href="sms:+393920976765">
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

              <a href="https://wa.me/+393920976765">
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
