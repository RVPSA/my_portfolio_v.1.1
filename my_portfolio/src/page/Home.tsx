import Button from "../components/Button";
import { firstComma, lastComma, akeshImage, dots, design } from "../assets";
import SplitText from "../sideSupportComponent/SplitText";
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
      </div>
    </>
  );
};

export default Home;
