import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { emailTemplateData } from "../constant/data";
import TemplateCarousal from "./TemplateCarousal";
import { BiSolidDownArrow } from "react-icons/bi";

const Searchbar = () => {
  const [searchData, setsearchData] = useState({});

  const searchText = (e: any) => {
    const search = emailTemplateData.filter((data) =>
      data.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setsearchData(search);
  };
  useEffect(() => {
    setsearchData({});
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-3 justify-between">
        <div className="relative lg:w-2/5 my-4">
          <IoSearchOutline className="h-5 w-5 top-3 left-3 absolute border-black/30" />
          <input
            type="text"
            className="p-2 w-full pl-10  text-blue-500 border-2 border-black/40 text-md rounded-md "
            placeholder="Search email templates"
            onChange={(e) => searchText(e)}
          />
        </div>
        <div className=" lg:px-4 h-12 my-4 lg:py-3 py-2 px-2 text-center border-2 border-black/30 rounded-full font-semibold ">
          Sort by: <span className="text-blue-500 font-semibold">Popular</span>{" "}
          <BiSolidDownArrow className="inline w-2 h-2 mx-1" />
        </div>
        <div className="lg:hidden md:hidden mb-4 lg:px-4 lg:py-3 py-2 px-2 text-center border-2 border-black/30 rounded-full font-semibold ">
          Sort by: <span className="text-blue-500 font-semibold">Popular</span>{" "}
          <BiSolidDownArrow className="inline w-2 h-2 mx-1" />
        </div>
      </div>
      <div className="lg:w-[1024px] md:w-[600px]  w-screen">
        {searchData && (
          <TemplateCarousal category="Search" templates={searchData} />
        )}
      </div>
    </>
  );
};

export default Searchbar;
