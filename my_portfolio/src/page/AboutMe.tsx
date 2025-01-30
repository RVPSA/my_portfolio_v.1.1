import React from "react";
import { akeshImage, design, dots } from "../assets";
import SkillCard from "../components/SkillCard";
import FunFact from "../components/FunFact";

const AboutMe = () => {
  return (
    <>
      <div className="grid grid-cols-12 pt-12 gap-5">
        {/* //<> Header section */}
        <div className="col-span-12 grid grid-cols-12 items-center pb-9">
          <div className="col-span-12 text-white">
            <div className="w-full text-xl font-semibold">
              <span className="text-[#775288] text-2xl font-bold">/</span>
              About-me
            </div>
          </div>
          <div className="col-span-12">
            <div className="text-slate-400">Who am I?</div>
          </div>
        </div>
        {/* //<> Description section */}
        <div className="col-span-12 Laptop:col-span-6 text-slate-400">
          <h1 className="pb-2">Hello, i’m Akesh! </h1>
          <p className="pb-5">
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. Transforming my creativity and
            knowledge into a websites has been my passion for over a year. I
            have been helping various clients to establish their presence
            online. I always strive to learn about the newest technologies and
            frameworks.
          </p>
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
            skills
          </div>
        </div>
        {/* //TODO Need to develop horizontol screen feature on mobile screen */}
        <div className="col-span-6 Laptop:col-span-3">
          <SkillCard
            skillType="Languages"
            skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-3">
          <SkillCard
            skillType="Languages"
            skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-2">
          <SkillCard
            skillType="col-span-6 Languages"
            skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-2">
          <SkillCard
            skillType="Languages"
            skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
          ></SkillCard>
        </div>
        <div className="col-span-6 Laptop:col-span-2">
          <SkillCard
            skillType="Languages"
            skills={["JavaScript", "TypeScript", "C#", "Java", "SQL"]}
          ></SkillCard>
        </div>
        {/* //<> Fun fact section */}
        <div className="col-span-12 items-center pb-9 text-white">
          <div className="w-full text-xl font-semibold">
            <span className="text-[#775288] text-2xl font-bold">#</span>
            my-fun-facts
          </div>
        </div>
        <div className="col-span-12 Laptop:col-span-6 grid grid-cols-12 gap-2 pb-10">
          <div className="col-span-6">
            <FunFact fact="I like summer more than winter"></FunFact>
          </div>
          <div className="col-span-6">
            <FunFact fact="I like Ceylon Tea more than Coffee"></FunFact>
          </div>
          <div className="col-span-7">
            <FunFact fact="I am stil in school"></FunFact>
          </div>
          <div className="col-span-5">
            <FunFact fact="I like to travel"></FunFact>
          </div>
          <div className="col-span-12">
            <FunFact fact="I like a vehicle lover"></FunFact>
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
