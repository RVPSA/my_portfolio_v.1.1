import Button from "./Button";

type ProjectCardProps = {
  image: string;
  stack: string[];
  topic: string;
  description: string;
  onclickMore: () => void;
};
/**
 * Project card component, showing the details of the project that completed
 * @param ProjectCardProps
 */
const ProjectCard = (prop: ProjectCardProps) => {
  return (
    <>
      <div
        className="
        flex flex-row max-w-full border-4 border-[#494d56] relative
        Laptop:flex-col Laptop:max-w-64 Laptop:bg-none"
      >
        {/* //<> Header section for all mobile screens */}
        <div
          className={`absolute inset-0 
          bg-cover bg-center opacity-15 z-0
          Laptop:invisible`}
          style={{ backgroundImage: `url(${prop.image})` }}
        ></div>
        {/* //<> Header section for Laptop and above */}
        <div
          className="
        border-b-2 border-[#494d56] w-0 invisible
        Laptop:h-52 Laptop:w-full Laptop:visible"
        >
          <img
            src={prop.image}
            className=" w-full h-full object-fill"
            alt="logo"
          />
        </div>
        {/* //<> Middle section of the project card */}
        <div
          className="
        flex flex-col justify-around border-r-2 border-[#494d56] text-slate-400 p-1
        Laptop:flex-row Laptop:items-center Laptop:border-b-2 Laptop:border-r-0"
        >
          {prop.stack.map((data, index) => {
            return <div key={index}>{data}</div>;
          })}
        </div>
        {/* //<> Footer section that contains two buttons and description */}
        <div className="p-4">
          <h1 className="text-white text-lg py-3">{prop.topic}</h1>
          <p className="text-slate-400 text-sm pb-3">{prop.description}</p>
          <div
            className="flex flex-row justify-center"
          >
            <Button text="Click me" onClick={prop.onclickMore} shortText="Click"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
