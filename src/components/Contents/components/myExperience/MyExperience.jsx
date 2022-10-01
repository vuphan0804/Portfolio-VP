import React from "react";

const MyExperience = () => {
  return (
    <div id="myExperience" className="bg-zinc-200 text-background ">
      <div className="max-w-[1200px] mx-auto px-10 py-32 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
        <div data-aos="flip-right">
          <h1 className="font-bold text-6xl pr-20">VU PHAN</h1>
        </div>
        <div className="col-span-2">
          <div
            data-aos="flip-right"
            className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8 text-lg"
          >
            <div>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews.
              </p>
            </div>
            <div>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cois-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 mt-10 border-b border-gray-500 pb-10"
          >
            <div>
              <h1 className="font-semibold text-5xl">10+</h1>
              <p>Projects Done</p>
            </div>
            <div>
              <h1 className="font-semibold text-5xl">05</h1>
              <p>Years of Student</p>
            </div>
            <div>
              <h1 className="font-semibold text-5xl">5+</h1>
              <p>Total User</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-10 pb-32 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 ">
        <div data-aos="zoom-in" className="flex">
          <img
            className="image-personal -rotate-6"
            src="img/0e3f50634e13988609774601b1f04e70.jpg"
            alt=""
          />
          <img
            className="image-personal rotate-12"
            src="img/d49afa12f5289d2578ec0da6c11eb100.jpg"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" className="flex">
          <img
            className="image-personal -rotate-2 z-10"
            src="img/IMG_3729.JPG"
            alt=""
          />
          <img
            className="image-personal rotate-3"
            src="img/ef3d4f6dde4197d1788d4813b1f1e4a7.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
