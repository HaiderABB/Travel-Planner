import React from "react";
import Navbar from '../Components/Navbar/Navbar';
import Home from "../L2Components/Home/Home";
import Search from "../L2Components/Search/Search";
import Support from "../Components/Support/Support";
import Info from "../Components/Info/Info";
import Travelers from "../Components/Travelers/Travelers";
import Footer from "../Components/Footer/Footer";

const Landing2 = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search></Search>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
};

export default Landing2;
