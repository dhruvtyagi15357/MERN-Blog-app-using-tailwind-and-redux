import React from "react";
import { images } from "../../../constants";
import { FiSearch } from "react-icons/fi";

let allTags = [
  "tag1",
  "tag2",
  "tag3",
  "tag1",
  "tag2",
  "tag3",
  "tag1",
  "tag2",
  "tag3",
];

const Tagitem = ({ tag }) => {
  return (
    <li className="bg-[#deebfc] hover:bg-[#c1d0e3] transition-colors duration-200 px-[20px] py-[6px] rounded-[4px] w-fit">
      {tag}
    </li>
  );
}

const Hero = () => {
  return (
    <section className="container align- flex flex-col mx-auto text-text-dark p-5 md:flex-row md:justify-between">
      <div className="mt-10 self-center lg:w-1/2 min-w-[50%] ">
        <h1 className=" font-roboto text-3xl text-center font-bold text-dark-soft sm:text-5xl lg:text-left lg:max-w-[54]">
          {" "}
          Lorem ipsum dolor sit amet.
        </h1>
        <p className=" text-text-dark mt-[14%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          aspernatur doloribus tenetur laboriosam porro quaerat fugiat magni
          cupiditate itaque assumenda?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam velit autem, illo deserunt consectetur
          atque. Minima inventore amet blanditiis, quos deserunt, veritatis
          animi exercitationem, repellendus suscipit nesciunt maiores mollitia
          consequatur eaque ratione. Debitis quam provident autem minima
          quaerat, veniam dignissimos eligendi ut consectetur odit atque,
          mollitia qui nobis officia sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repellat facere labore reiciendis nulla, sint ex fugiat ipsa consequuntur minima. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sint, ducimus aspernatur itaque quos modi a pariatur dicta sequi, accusamus esse eveniet deserunt? Consequatur optio qui architecto perferendis suscipit. Reiciendis ut aliquam optio dicta. Veritatis voluptas, laudantium possimus quis dolores nam a ducimus vero ipsum, cum deserunt dolorem facilis delectus!
        </p>
        <div className="flex flex-col gap-y-2.5 mt-7 relative">
          <div className="relative">
            <FiSearch className=" absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold font-semibold text-text-dark placeholder:text-[#959EAD] rounded-lg pl-10 pr-3 focus:outline-none w-full py-3 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
              type="text"
              name=""
              id=""
              placeholder="Search Articles"
            />
          </div>
          <button className="w-full duration-500 transition-all focus:bg-primaryclicked hover:bg-primaryhover bg-primary text-white rounded-xl px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>

        <div className=" mt-4 lg:mt-6 italic center flex flex-col md:gap-x-4 lg:flex-row lg:flex-nowrap">
          <span className=" text-text-soft font-semibold self-center ">
            Popular tags:
          </span>
          <ul className="flex gap-2 font-semibold text-[#1565D8]  mt-3 lg:mt-0 lg:flex-row flex-wrap">
            {allTags.map((tag, index) => (
              <Tagitem key={index} tag={tag} />
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block w-full">
        <img src={images.LiveChat} alt="" />
      </div>
    </section>
  );
};

export default Hero;
