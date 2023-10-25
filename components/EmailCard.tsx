'use client'
import { useRouter } from "next/navigation";
import React from "react";

import { PiCrownSimpleBold } from "react-icons/pi";

type props = {
  cardData: {
    id:string;
    title: string;
    tag: string;
    description: string;
    imageUrl: {
      src: string;
    };
    isPopular: boolean;
  };
};

const EmailCard = ({ cardData }: props) => {

  const router = useRouter()
  
  return (
    <div className="flex flex-col border-2 h-60 lg:h-80 my-5 rounded-lg  shadow-md" id={cardData.id} onClick={()=>router.push(`/marketplace/${cardData.id}`)} >
      <div className="relative">
        <div className="absolute right-2 top-2 rounded-lg z-50 bg-white/80 p-1 ">
          {cardData.isPopular && (
            <PiCrownSimpleBold className="h-6 w-6 text-yellow-400 " />
          )}
          </div>
        <div className="hover:bg-black/30 w-full flex items-center justify-center h-full z-10 absolute top-0 ">
          <div className="hidden hover:block">
            <button className="bg-black/70  text-white px-4 py-2  rounded-full text-sm font-normal">
              Use this
            </button>
          </div>
        </div>
        <div className="rounded-xl ">
          <img
            src={cardData.imageUrl.src}
            alt={cardData.title}
            className="object-cover h-52 w-full rounded-t-lg "
          />
        </div>
      </div>
      <div className="lg:my-4  px-1">
        <div className="p-3">
          <h2 className="lg:text-lg text-sm font-semibold text-black/80 px-1 py-2">
            {cardData.title}
          </h2>
          <p className="text-sm  text-black/50 line-clamp-1">
            {cardData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
