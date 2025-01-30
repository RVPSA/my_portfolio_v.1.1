import { email, github, linkedin } from "../assets";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 border-t-2 border-slate-400 mt-10">
      <div className="col-span-1">
        <div className="flex flex-col Laptop:flex-row gap-5 pt-5">
          <div className="text-white">Akesh</div>{" "}
          <div className="text-slate-400 hidden Laptop:flex">
            akeshramasinghe@gmail.com
          </div>
        </div>
        <div className="text-white py-5">
          Web designer and Full stack Engineer
        </div>
      </div>
      <div className="col-span-1 grid justify-center">
        <div className="pt-5 text-white">Media</div>
        <div className="flex flex-row gap-3">
          <div className="w-[20px] h-[20px]">
            <img src={email} className="w-full h-full object-fill" />
          </div>
          <div className="w-[20px] h-[20px]">
            <img src={github} className="w-full h-full object-fill" />
          </div>
          <div className="w-[20px] h-[20px]">
            <img src={linkedin} className="w-full h-full object-fill" />
          </div>
        </div>
      </div>
      <div className="col-span-2 grid justify-center">
        <div className="flex flex-col Laptop:flex-row gap-5 text-slate-400">
          <p>&copy; Copyright 2024,</p>
          <p>Made By Akesh</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
