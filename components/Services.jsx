import React from "react";
import { serviceData } from "./common/Helper";
import Image from "next/image";

const Services = () => {
  return (
    <div className="custom_container container mx-auto py-12 lg:py-14">
      <div className="flex">
        {serviceData.map((data, index) => (
          <div className="w-4/12 flex flex-col items-center px-3" key={index}>
            <Image height={50} width={50} src={data.icon} alt="icon" />
            <h3 className="text-black font-semibold text-lg mb-2 mt-5">
              {data.title}
            </h3>
            <p className="text-lightBlack font-light text-sm text-center leading-[19.6px]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
