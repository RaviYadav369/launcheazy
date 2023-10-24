import React from "react";
import HeroHeading from "./HeroHeading";

const Hero = () => {
  return (
    <>
      <div className="w-4/5 mx-auto py-10 mb-10 ">
        <h1 className="text-sm text-black/60 mt-8 font-bold">MARKETPLACE</h1>
        <div className="mt-6 relative">
          <HeroHeading />
        </div>
        <h1 className="text-6xl font-medium text-black/80 my-5">by the community, for the communnity.</h1>
        <p className="text-lg font-medium tracking-wide text-black/70">100s of free templates to help you craft the perfect marketing journey.</p>
      </div>
      ;
    </>
  );
};

export default Hero;
