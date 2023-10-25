'use client'
import React, { use } from "react";
import "../app/globals.css";
import { useRouter } from "next/navigation";

const Categories = () => {
  const [checked, setChecked] = React.useState(false);
  const router = useRouter();

  const handleClick = (e:any) => {
    console.log(e.target.value)
    // router.push(`/marketplace/${e.target.value}`)
    
  }


  return (
    <div className="hidden md:block lg:block">
      <h2 className="py-4">Categories</h2>
      <div className="flex flex-col">
        <div className="flex  py-1">
          <div className="pr-2">
            <input
              className="h-4 w-4 "
              type="checkbox"
              id="announcements"
              name="announcements"
              value="announcements"
              onClick={handleClick}
            />
          </div>
          <p className="font-semibold  text-black/70 pb-1 text-md">Announcements</p>
        </div>
        <div className="flex py-1">
          <div className="pr-2">
            <input
              className="h-4 w-4 "
              type="checkbox"
              id="educate"
              name="educate"
              value="educate"
              onClick={handleClick}
            />
          </div>
          <p className="font-semibold  text-black/70 pb-1 text-md">Educate & Inform</p>
        </div>
        <div className="flex py-1">
          <div className="pr-2">
            <input
              className="h-4 w-4 "
              type="checkbox"
              id="invitation"
              name="invitation"
              value="invitation"
              onClick={handleClick}
            />
          </div>
          <p className="font-semibold  text-black/70 pb-1 text-md">Invitation</p>
        </div>
        <div className="flex py-1">
          <div className="pr-2">
            <input
              className="h-4 w-4 "
              type="checkbox"
              id="ocassions"
              name="ocassions"
              value="ocassions"
              onClick={handleClick}
            />
          </div>
          <p className="font-semibold  text-black/70 pb-1 text-md">Ocassions</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
