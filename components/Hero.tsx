import React from "react";
import HeroHeading from "./HeroHeading";

const Hero = () => {
  return (
    <>
      <div className="w-4/5 mx-auto lg:py-10 py-6 lg:mb-10 mb-4 ">
        <h1 className="text-sm text-black/60 lg:mt-8 mt-2 font-bold">MARKETPLACE</h1>
        <div className="lg:mt-6 relative">
          <HeroHeading />
        </div>
        <h1 className="lg:text-6xl text-3xl font-medium text-black/80 my-5">by the community, for the communnity.</h1>
        <p className="lg:text-lg text-sm font-medium tracking-wide text-black/70">100s of free templates to help you craft the perfect marketing journey.</p>
      </div>
      ;
    </>
  );
};

export default Hero;
