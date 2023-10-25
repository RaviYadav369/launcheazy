"use client";
import React from "react";
import TemplateCarousal from "./TemplateCarousal";
import { emailTemplateData } from "../constant/data";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import Searchbar from "./Searchbar";

const TemplateSection = () => {
  const announcement = emailTemplateData.filter(
    (data) => data.tag === "announcement"
  );
  const educate = emailTemplateData.filter((data) => data.tag === "educate");
  const invitation = emailTemplateData.filter(
    (data) => data.tag === "invitation"
  );
  const occation = emailTemplateData.filter((data) => data.tag === "occation");

  return (
    <div className="my-2">
      <div className="w-11/12 my-2">
        <Searchbar />
      </div>
       <div className="lg:w-[1024px] md:w-[600px]  w-screen">
          <TemplateCarousal category="Announcements" templates={announcement} />
          <TemplateCarousal category="Educate & Inform" templates={educate} />
          <TemplateCarousal category="Invitation" templates={invitation} />
          <TemplateCarousal category="Ocassions" templates={occation} />
        </div>
    </div>
  );
};

export default TemplateSection;
