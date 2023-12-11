import React from "react";
import hotels from '../../assets/hotels.jpg'

const Home = () => {

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-150%, 200%)',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>
        
        </h1>
      </div>

      <div className='homeImages flex'>
        <img src={hotels} className='plane'></img>
        
      </div>
    </div>
  );
};

export default Home;
