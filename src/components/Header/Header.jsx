import React, { useState, useEffect } from "react";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("hello");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const fixedClass = window.scrollY >= 100 ? "!h-16" : "";
    setHeaderFixed(fixedClass);
  };
  return (
    <div
      id="header"
      className={`flex z-20 top-0 left-0 right-0 fixed bg-gray-900 justify-between items-center h-24 text-textPrimary mx-auto px-28 transition-primary ${headerFixed}`}
    >
      <div className="flex items-center justify-between gap-2 text-2xl font-bold">
        <span>
          <i className="fa-solid fa-user"></i>
        </span>
        <h1>VP</h1>
      </div>
      <div className="hidden xl:block lg:block">
        <ul className="flex justify-between gap-4 text-textSecondary">
          <li className="hover:text-white">
            <a href="#intro">Home</a>
          </li>
          <li className="hover:text-white">
            <a href="#myProcess">Process</a>
          </li>
          <li className="hover:text-white">
            <a href="#myProjects">Projects</a>
          </li>
          <li className="hover:text-white">
            <a href="#myExperience">About Me</a>
          </li>
          <li className="hover:text-white">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>

      <div className="text-base font-medium">
        <a href="#footer">
          <button className="p-2 bg-gray-800 rounded-full">Contact Me</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
