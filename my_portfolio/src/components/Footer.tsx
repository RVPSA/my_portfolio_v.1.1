import { useTranslation } from "react-i18next";
import { email, github, linkedin } from "../assets";

const Footer = () => {
    const [t, i18n] = useTranslation("footer");

  return (
    <div className="w-screen border-t-2 border-slate-400 ">
      <div className="grid grid-cols-2 mt-10 px-3 Laptop:px-28">
        <div className="col-span-1">
          <div className="flex flex-col Laptop:flex-row gap-5 pt-5">
            <div className="text-white">Akesh</div>{" "}
            <div className="text-slate-400 hidden Laptop:flex">
              akeshramasinghe@gmail.com
            </div>
          </div>
          <div className="text-white py-5">
            {t("footer.description")}
          </div>
        </div>
        <div className="col-span-1 grid justify-center">
          <div className="pt-5 text-white">{t("footer.media")}</div>
          <div className="flex flex-row gap-3">
            <a
              href="mailto:akeshramasinghe@gmail.com?subject=Hello! From Portfolio"
              target="_blank"
            >
              <div className="w-[20px] h-[20px]">
                <img src={email} className="w-full h-full object-fill" />
              </div>
            </a>
            <a href="https://github.com/RVPSA" target="_blank">
              {" "}
              <div className="w-[20px] h-[20px]">
                <img src={github} className="w-full h-full object-fill" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/akesh-ramasinghe"
              target="_blank"
            >
              <div className="w-[20px] h-[20px]">
                <img src={linkedin} className="w-full h-full object-fill" />
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-2 grid justify-center pb-5">
          <div className="flex flex-col Laptop:flex-row gap-5 text-slate-400">
            <p>&copy; Copyright 2025,</p>
            <p>{t("footer.madeBy")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
