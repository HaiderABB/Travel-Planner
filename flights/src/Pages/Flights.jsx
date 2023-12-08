import React from "react";
import Navbar from '../Components/Navbar/Navbar';
import Home from "../Components/Home/Home";
import Search from "../Components/Search/Search";
import Support from "../Components/Support/Support";
import Info from "../Components/Info/Info";
import Travelers from "../Components/Travelers/Travelers";
import Footer from "../Components/Footer/Footer";

const Flight = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search></Search>
      <Support></Support>
      <Info></Info>
      <Travelers></Travelers>
      <Footer></Footer>
    </div>
  );
};

export default Flights;
