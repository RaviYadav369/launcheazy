import Categories from "@/components/Categories";
import TemplateCarousal from "@/components/TemplateCarousal";
import React from "react";
import { emailTemplateData } from "@/constant/data";

const page = ({ params }: { params: { id: string } }) => {
  const TemplateId = params.id;
  const Template = emailTemplateData.filter((data) => data.id === TemplateId);
  const { title, tag, imageUrl, isPopular,description } = Template[0];

  return (
    <div className="grid lg:grid-cols-3 grid-rows-3 gap-5 p-4 lg:p-10">
      <div className="col-span-2 ">
        <img src={imageUrl.src} alt={title} className="object-cover h-full w-full rounded-t-lg " />
      </div>
      <div className="col-span-1 lg:mt-10">
        <h1 className="lg:text-5xl text-2xl text-black font-bold py-3 lg:py-10">{title}</h1>
        <p className="text-black/60 lg:my-5 my-3 lg:mb-5 lg:text-2xl text-lg">{description}</p>
        <span className="bg-green-300 text-black lg:p-3 p-2 rounded-full mx-2  ">{tag}</span>
        {isPopular && (
        <span className="bg-green-300 text-black lg:p-3 p-2 rounded-full  ">Popular</span>

        )}
      </div>
    </div>
  );
};

export default page;
