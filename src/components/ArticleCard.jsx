import React from "react";
import images from "../constants/images";
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
  return (
    <div
      className={` bg-slate-200 my-10 rounded-xl overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ${className}`}>
      <img
        src={images.card}
        alt=""
        srcSet=""
        className="w-full object-cover object-center h-auto md:h-52"
      />
      <div className="p-5">
        <h2 className=" font-roboto font-bold text-xl md:text-2xl text-text-dark">
          Lorem ipsum dolor sit.
        </h2>
        <p className=" text-text-soft mt-3 text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          sit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, quasi?
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              className=" h-[36px] w-[36px] md:h-10 md:w-10 rounded-full "
              src={images.Pfp}
              alt="PFP"
            />
            <div className="flex flex-col gap-0.5">
              <h4 className=" font-bolf italic text-text-dark text-sm md:text-base">
                John Doe
              </h4>
              <div className="flex items-center gap-x-1">
                <span
                  className={`bg-[#36B37E] w-fit bg-opacity-20 p-0.5 rounded-full`}>
                  <BsCheckLg className="text-[#36B37E] w-2.5 h-2.5" />
                </span>
                <span className="italic text-text-soft text-xs md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <span className=" font-bold text-text-soft text-base italic md:text-base">02 May</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
