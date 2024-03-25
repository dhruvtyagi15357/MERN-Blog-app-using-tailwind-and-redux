import React from 'react'
import ArticleCard from '../../../components/ArticleCard'

const Articles = () => {
  return (
    <section className="container flex flex-wrap mx-auto md:gap-x-[30px] gap-y-5 px-5 py-10 ">
      <ArticleCard
        className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)]"}
      />
      <ArticleCard
        className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)]"}
      />
      <ArticleCard
        className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)]"}
      />
    </section>
  );
}

export default Articles