import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const MyOwlCarousel = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 4,
    autoplay: true,
    dots: false,
    lazyContent: true,
  };
  return (
    <div
      data-aos="zoom-in"
      className="bg-black my-20 px-10 border-y border-gray-500"
    >
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f132c1d50b750a90cb2abe_Logo%201.svg" />
        </div>
        <div className="item">
          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f132ecc32e1d9f1e499056_Logo%202.svg" />
        </div>
        <div className="item">
          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f132fd06ce6207e8cc42ca_Logo%203.svg" />
        </div>
        <div className="item">
          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f1330b0c096f9d17b90cdb_Logo%204.svg" />
        </div>
        <div className="item">
          <img src="https://uploads-ssl.webflow.com/61f03747d8d407ed117df27f/61f13314d2c4222b76788509_Logo%205.svg" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default MyOwlCarousel;
