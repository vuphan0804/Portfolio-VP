import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 max-w-[1000px] mx-auto text-textPrimary px-10"
    >
      <div className="col-span-1 font-bold text-xl mx-auto">
        <div className="flex justify-start gap-2 items-center mb-4">
          <span className="bg-pink-400 rounded-full p-2">
            <i className="fa-regular fa-envelope"></i>
          </span>
          <p>vuphan0804@gmail.com</p>
        </div>
        <div className="flex justify-start gap-2 items-center mb-4">
          <span className="bg-pink-400 rounded-full p-2">
            <i className="fa-solid fa-phone"></i>
          </span>
          <p>+84 348 408 909</p>
        </div>
      </div>
      <div className="col-span-1 mx-auto py-5">
        <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
          <div className="flex flex-col">
            <h6 className="font-semibold mb-2">PAGES</h6>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">About Me</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">SOCIAL MEDIA</h6>
            <ul>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Dribble</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">VISIT</h6>
            <p>Ho Chi Minh city</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
