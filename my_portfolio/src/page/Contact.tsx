import React from "react";
import { call, email, github, linkedin, whatsapp } from "../assets";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-12 py-12 gap-5">
        {/* //<> Header section */}
        <div className="col-span-12 grid grid-cols-12 items-center pb-9">
          <div className="col-span-12 text-white">
            <div className="w-full text-xl font-semibold">
              <span className="text-[#775288] text-2xl font-bold">/</span>
              Contacts
            </div>
          </div>
          <div className="col-span-12">
            <div className="text-slate-400">Who am I?</div>
          </div>
        </div>
        {/* //<> Description secton */}
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
        {/* //<> Media Section */}
        <div className="col-span-12 items-center pb-9 text-white">
          <div className="w-full text-xl font-semibold">
            <span className="text-[#775288] text-2xl font-bold">#</span>
            all-media
          </div>
        </div>
        <div className="col-span-12 flex flex-row gap-3">
          <div className="flex flex-row gap-1 items-center">
            <div className="w-[20px] h-[20px] Laptop:w-[30px] Laptop:h-[30px]">
              <img src={github} className="w-full h-full object-fill" />
            </div>
            <a href="https://github.com/RVPSA" target="_blank">
              <div className="text-white">RVPSA</div>
            </a>
          </div>
          <div>
            <div className="flex flex-row gap-1 items-center">
              <div className="w-[20px] h-[20px] Laptop:w-[30px] Laptop:h-[30px]">
                <img src={linkedin} className="w-full h-full object-fill" />
              </div>
              <a href="https://www.linkedin.com/in/akesh-ramasinghe" target="_blank">
                <div className="text-white">akesh-ramasinghe</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
