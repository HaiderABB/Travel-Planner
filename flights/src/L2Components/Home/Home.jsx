import React from "react";
import plane_2 from "../../assets/plane_2.jpg";

const Home = () => {
  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-80%, -900%)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };
  return (

  

    <div className='home flex container'>
      <div className='mainText'>
        <h1>
          Craft Unforgettable Journeys with TraVisor: Where Adventures Become
          Timeless Tales
        </h1>
      </div>

      
    </div>
  );
};

export default Home;
