import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";
import EmailCard from "./EmailCard";

const NextArrow = (props:any) => {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onClick={props.onClick}
      />
    </>
  );
};

const PrevArrow = (props:any) => {
  return (
    <>
      <div
        className={`${props.className} text-black hover:`}
        style={{ ...props.style }}
        onClick={props.onClick}
      />
    </>
  );
};

type props = {
  templates: any;
  category:string
};

const TemplateCarousal = ({templates,category}:props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: .75,
        },
      },
    ],
  };
  return (
    <>
      <div className="lg:block hidden gap-4 my-5 w-11/12 ">
        <div className="py-4">
          <h2 className="text-xl font-bold text-black/80">
            {category}
          </h2>
        </div>
        <Slider {...settings}>
          {templates.map((template:any)=>(
            <EmailCard cardData={template} key={template.title} />
          ))}
        </Slider>
      </div>
      <div className="lg:hidden ">
      <div className="py-2">
          <h2 className="text-lg font-bold text-black/80">
            {category}
          </h2>
        </div>
        <Slider {...settings}>
        {templates.map((template:any)=>(
            <EmailCard cardData={template} key={template.title} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TemplateCarousal;
