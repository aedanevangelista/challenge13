import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center lg:w-[25%] text-center mb-16 mt-24 lg:mt-0">
      <article className="flex flex-col leading-12 my-4">
        <h1 className=" text-[2rem] font-[200]">
          Reliable, efficient delivery
        </h1>
        <h2 className=" text-[2rem] font-[800]">Powered by Technology</h2>
      </article>

      <p className=" text-lg mx-14 lg:mx-0 lg:text-sm font-[200]">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
  );
};

export default Header;
