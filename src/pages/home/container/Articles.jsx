import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from "react-icons/fa6";

const Articles = () => {
  return (
    <section className="container flex flex-wrap flex-col mx-auto px-5 py-10 ">
      <div className="flex flex-wrap md:gap-x-[30px] gap-y-5 pb-10">
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"}
        />
      </div>

      <button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary rounded-xl px-6 py-5 hover:text-white hover:bg-primaryhover transition-all duration-500 focus:bg-primaryclicked'>
        <span className=" ">
          More Articles
        </span>
        <FaArrowRight className=' w-3 h-3'/>
      </button>
    </section>
  );
}

export default Articles