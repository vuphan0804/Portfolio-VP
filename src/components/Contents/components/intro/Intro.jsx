import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Intro = () => {
  return (
    <div
      id="intro"
      className="max-w-[1200px] mx-auto grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-20 mt-40 mb-32 px-10 text-center"
    >
      <div data-aos="fade-right">
        <h1 className="font-bold text-5xl mb-5">
          <span className="linear-text-secondary">
            Front End Web Deleveloper{" "}
          </span>
          crafting products that people love
        </h1>
        <p className="text-textSecondary">
          I'm Vu Phan - Student at Posts and Telecommunication Institute of
          Technology
        </p>
      </div>
      <div data-aos="fade-left" className="mx-auto">
        <img
          className="w-[360px] h-[420px] object-cover rounded-lg shadow-dynamic"
          src="/img/ea8a0cd441dd981643ae4572df8bfe2c.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
