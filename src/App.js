import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Contents/pages/Home";

const App = () => {
  return (
    <div className="">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
