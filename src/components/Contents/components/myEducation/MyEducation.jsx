import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MyEducation = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="max-w-[1200px] px-10 mx-auto text-center my-32">
      <div data-aos="fade-up">
        <h1 className="font-bold text-5xl m-4">
          Look at my <span className="linear-text-secondary">Education</span>{" "}
        </h1>
        <p className="text-textSecondary px-48">
          If you are looking for someone who will help you to build your digital
          web presence than congratulations!
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8 my-20">
        <div
          data-aos="fade-down-right"
          className="card-primary border-t-4 border-pink-500"
        >
          <img
            src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f15296695f17610b51d4f1_services%20logo%201.svg"
            alt=""
          />
          <h1 className="font-bold text-2xl m-4">PTIT</h1>
          <p>Telecom at Posts and Telecommunication Institute of Technology</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="card-primary border-t-4 border-pink-500"
        >
          <img
            src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f1538f7dd58a8573fbcb22_services%20logo%202.svg"
            alt=""
          />
          <h1 className="font-bold text-2xl m-4">Cybersoft</h1>
          <p>Bootcamp - Web development</p>
        </div>
        <div
          data-aos="fade-down-left"
          className="card-primary border-t-4 border-pink-500"
        >
          <img
            src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f153a004b964dde1480c52_services%20logo%203.svg"
            alt=""
          />
          <h1 className="font-bold text-2xl m-4">TOEIC</h1>
          <p>TOEIC scores of 500</p>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
