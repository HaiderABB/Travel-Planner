import React from "react";
import Navbar from '../Components/Navbar/Navbar';
import Home from "../L1Components/Home/Home";
import Reviews from "../L1Components/Reviews/Reviews";
import Search from "../Components/Search/Search";
import Support from "../Components/Support/Support";
import Info from "../Components/Info/Info";
import Travelers from "../Components/Travelers/Travelers";
import Footer from "../Components/Footer/Footer";

const Landing1 = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Landing1;
