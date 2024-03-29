import React from "react";
import Navbar from '../Components/Navbar/Navbar';
import Home from '../HotelComponents/Home/Home';
import Search from "../HotelComponents/Search/Search";
import Support from "../HotelComponents/Support/Support";
import Info from "../Components/Info/Info";
import Travelers from "../Components/Travelers/Travelers";
import Footer from "../Components/Footer/Footer";
import TopHotels from '../HotelComponents/Hotels/TopHotels';
const Hotels = () => {
  return (
    <div>
      <Navbar />
      <Home></Home>
      <Search></Search>
      <Support></Support>
      <TopHotels></TopHotels>
      <Footer></Footer>
    </div>
  );
};

export default Hotels;
