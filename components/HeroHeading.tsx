import React from 'react';
import "../app/globals.css"


const items=[
  "Email Templates",
  "Email Sequences",
  "Marketing Recipes",
]


const WordCarousel = () => {

  return (
    <div className="wordCarousel font-roboto-condensed mt-4">
    
      <div className="overflow-hidden lg:h-20 h-10">
        <ul className="flip3">
            {items.map((item, index) => (
                <li  key={index} className="text-green-600 text-3xl lg:text-6xl font-normal pb-4 h-20  block">{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default WordCarousel;
