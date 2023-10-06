import React from 'react';

const HeroTextbox = () => {
  return (
    <>
      <div
        className="absolute bg-green-200 p-24 text-center tracking-tight text-black  sm:bg-slate-900 md:bg-yellow-200  lg:bg-red-500 xl:bg-blue-300"
        id="hero-textbox"
      >
        <h1 className="text-6xl lg:text-4xl">WELCOME TO MY WEBSITE</h1>
        <p className="text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </>
  );
};

export default HeroTextbox;
