import React from "react";

type props = {
  cardData: {
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
  return (
    <div className="flex flex-col border-2 h-60 lg:h-80 my-5 rounded-lg  shadow-md">
      <div className="">
        <div className="" />
        <div className="rounded-xl ">
          <img
            src={cardData.imageUrl.src}
            alt={cardData.title}
            className="object-cover w-full h-full rounded-t-lg "
          />
        </div>
      </div>
      <div className="lg:my-4  px-1">
        <div className="p-3">

        <h2 className="lg:text-lg text-sm font-semibold text-black/80 px-1 py-2">
          {cardData.title}
        </h2>
        <p className="text-sm  text-black/50 line-clamp-1">{cardData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailCard;
