'use client'
import React from "react";
import TemplateCarousal from "./TemplateCarousal";
import { emailTemplateData } from "../constant/data";
import {IoSearchOutline} from 'react-icons/io5'
import {BiSolidDownArrow} from 'react-icons/bi'

const TemplateSection = () => {
  const announcement = emailTemplateData.filter(
    (data) => data.tag === "announcement"
  );
  const educate = emailTemplateData.filter((data) => data.tag === "educate");
  const invitation = emailTemplateData.filter(
    (data) => data.tag === "invitation"
  );
  const occation = emailTemplateData.filter((data) => data.tag === "occation");
  // const popular = emailTemplateData.filter((data) => data.isPopular === true);

  return (
    <div className="my-2">
      <div className="w-11/12 my-2">
        <div className="flex  flex-col md:flex-row lg:flex-row gap-3 justify-between">
          <div className="relative lg:w-2/5 my-4">
            <IoSearchOutline className="h-5 w-5 top-3 left-3 absolute border-black/30" />
            <input type="text" className="p-2 w-full pl-10  text-blue-500 border-2 border-black/40 text-md rounded-md " placeholder="Search email templates" />
          </div>
          <div className=" lg:px-4 my-4 lg:py-3 py-2 px-2 text-center border-2 border-black/30 rounded-full font-semibold ">
            Sort by: <span className="text-blue-500 font-semibold">Popular</span> <BiSolidDownArrow className="inline w-2 h-2 mx-1"  /> 
          </div>
          <div className="lg:hidden md:hidden mb-4 lg:px-4 lg:py-3 py-2 px-2 text-center border-2 border-black/30 rounded-full font-semibold ">
            Sort by: <span className="text-blue-500 font-semibold">Popular</span> <BiSolidDownArrow className="inline w-2 h-2 mx-1"  /> 
          </div>
        </div>
      </div>
      <div className="lg:w-[1024px] md:w-[600px]  w-screen">
        <TemplateCarousal templates={announcement}  category="Announcements" />
        <TemplateCarousal category="Educate & Inform" templates={educate} />
        <TemplateCarousal category="Invitation" templates={invitation} />
        <TemplateCarousal category="Ocassions" templates={occation} />
      </div>
    </div>
  );
};

export default TemplateSection;
