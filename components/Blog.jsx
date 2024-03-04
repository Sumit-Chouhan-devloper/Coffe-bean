import Image from "next/image";
import React from "react";
import { BlogData } from "./common/Helper";
import chemex from "../public/assets/png/chemex-coffee.png";
const Blog = () => {
  return (
    <div className="container custom_container mx-auto py-12 px-4 lg:px-3">
      <h2 className="text-center font-medium text-4xxl text-DarkBlack mb-8 lg:mb-11">
        Latest <span className=" font-extrabold text-lightOrange">Blog </span>
        posts
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="xl:w-5/12 lg:w-9/12 flex flex-col gap-5 sm:gap-6 md:gap-8 xl:gap-10 lg:pe-5">
          {BlogData.map((data, index) => (
            <div
              className="flex gap-4 flex-col sm:flex-row items-center lg:gap-6 max-w-[400px] sm:max-w-[unset] mx-auto"
              key={index}
            >
              <Image
                className="w-full xl:h-[134px] max-w-[240px] sm:max-w-[170px] mt-4 sm:mt-0"
                height={134}
                width={170}
                src={data.CupImage}
                alt="coffee"
              />
              <div>
                <p className="text-lightGray text-sm lg:leading-[18px] text-center sm:text-start">
                  {data.BlogDate}
                </p>
                <h3 className="mt-2 mb-1 font-semibold text-base text-DarkBlack text-center sm:text-start">
                  {data.title}
                </h3>
                <p className="text-DarkBlack opacity-75 text-sm font-light sm:leading-[19.6px] text-center sm:text-start px-3 sm:px-0">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="xl:w-7/12 lg:w-9/12 pt-8 xl:pt-0">
          <Image
            className="w-full"
            height={316}
            width={640}
            src={chemex}
            alt="coffee"
          />
          <p className="text-lightGray text-sm mt-3 xl:mt-4 leading-[18px]">
            September 18, 20230
          </p>
          <h3 className="xl:mt-4 mt-2 mb-2 font-semibold text-base text-DarkBlack lg:leading-[27px]">
            How To Make Chemex Coffee
          </h3>
          <p className="text-DarkBlack opacity-75 text-sm font-light sm:leading-[19px]">
            Pour over coffee sounds complicated, but this coffee brewing process
            is surprisingly simple and the results can be amazing with just a
            little practice. If you drink a single cup each morning, or want to
            try different types of coffee, making pour over coffee can be even
            easier than setting up your home coffee machine (bonus — cleanup
            takes seconds). And because you’re in control of factors like water
            temperature ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
