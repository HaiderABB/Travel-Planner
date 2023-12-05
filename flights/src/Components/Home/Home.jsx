import React from "react";
import plane_2 from "../../assets/plane_2.jpg";

const Home = () => {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>
          Craft Unforgettable Journeys with TraVisor: Where Adventures Become
          Timeless Tales
        </h1>
      </div>

      <div className='homeImages flex'>
        <img src={plane_2} className='plane'></img>
      </div>
    </div>
  );
};

export default Home;
