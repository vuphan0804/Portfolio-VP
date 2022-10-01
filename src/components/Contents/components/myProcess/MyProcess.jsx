import React from "react";

const MyProcess = () => {
  return (
    <div
      id="myProcess"
      className="grid grid-cols-1 xl:grid-cols-2 xl:gris-cols-2 gap-8 bg-background max-w-[1200px] mx-auto px-10 my-32"
    >
      <div data-aos="fade-down-right">
        <h1 className="font-bold text-5xl my-4">
          My process that I follow are seven main steps of
          <span className="linear-text-secondary"> web development</span>
        </h1>
        <p className="text-textSecondary my-10">
          It is the best way to track your project implementation to make sure
          you keep up with the deadline.
        </p>
        <a href="#footer">
          <button className="p-5 rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-xl transition-primary">
            Contact me
          </button>
        </a>
      </div>
      <div data-aos="fade-up-left" className="linear-bg-primary p-4 rounded-md">
        <div class="accordion text-black" id="accordionExample">
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingOne">
              <button
                class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg font-semibold text-black text-left
        bg-white
        border-b-2
        border-pink-400
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Gathering Information
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <li>Set goals for the website.</li>
                <li>Define website's target audience.</li>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingTwo">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg font-semibold text-black text-left
        bg-white
        border-b-2
        border-pink-400
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Planning
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <li>Create a sitemap sketch.</li>
                <li>Create a wirefram/ mock-up. Select</li>
                <li>technology stack</li>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingThree">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg font-semibold text-black text-left
        bg-white
        border-b-2
        border-pink-400
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Design
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <li>Create colorful page layouts.</li>
                <li>Review the layouts.</li>
                <li>Get client'sfeedback on the layouts.</li>
                <li>Change the layout when required.</li>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingFour">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg font-semibold text-black text-left
        bg-white
        border-b-2
        border-pink-400
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Content Writing and Assembly
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <li>Create new content.</li>
                <li>Get content ready for migration.</li>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingFive">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg font-semibold text-black text-left
        bg-white
        border-b-2
        border-pink-400
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Coding
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <li>Build and deploy website.</li>
                <li>Add special features and interactivity.</li>
                <li>SEO for the website.</li>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingSix">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg font-semibold text-black text-left
        bg-white
        border-b-2
        border-pink-400
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Testing, Review and Launch
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <li>Test the created website.</li>
                <li>Upload the website to server.</li>
                <li>Final (regression) testing and launch.</li>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingSeven">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-lg font-semibold text-black text-left
        bg-white
        border-b-2
        border-pink-400
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Maintenance and Regular Updating
              </button>
            </h2>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body py-4 px-5">
                <li>Add user report system.</li>
                <li>Fix bugs asap.</li>
                <li>Keep website up-to-day.</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProcess;
