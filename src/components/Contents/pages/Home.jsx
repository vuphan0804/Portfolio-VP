import React from "react";
import ClientsTestimonials from "../components/clientsTestimonials";
import HireMe from "../components/hireMe";
import Intro from "../components/intro";
import MyEducation from "../components/myEducation";
import MyExperience from "../components/myExperience";
import MyOwlCarousel from "../components/myOwlCarousel";
import MyProcess from "../components/myProcess";
import MyProjects from "../components/myProjects";

const Home = () => {
  return (
    <div className="mx-auto">
      <Intro />
      <MyOwlCarousel />
      <MyEducation />
      <MyProjects />
      <MyProcess />
      <MyExperience />
      {/* <ClientsTestimonials /> */}
      <HireMe />
    </div>
  );
};

export default Home;
