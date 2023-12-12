import React, { useState } from "react";
import plane_2 from "../../assets/plane_2.jpg";
import v21 from "../../assets/v21.png";
import { Link } from "react-router-dom";


const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  
  const textStyle = {
    position: 'absolute',
    top: '60%', // Adjust top positioning for responsiveness
    left: '30%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center horizontally and vertically
    fontSize: 'clamp(20px, 4vw, 34px)', // Responsive font size
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };

  const ButtonStyle = {
    backgroundColor: isHovered ? 'darkorange' : 'orange',
    border: 'none',
    cursor: 'pointer',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: 'clamp(16px, 3vw, 30px)', // Responsive font size
    borderRadius: '50px',
    color: 'white',
    transition: 'background-color 0.2s', // Add transition for smooth color change
    position: 'relative', // Ensure the popover position is relative to the button
  };

  const popoverStyle = {
    position: 'absolute',
    fontSize:'20px',
    backgroundColor: 'rgba(30, 81, 110, 0.5)',
    color: 'black',
    padding: '10px',
    borderRadius: '5px',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: showPopover ? 'block' : 'none',
    width: '250px',
  };

  return (
    <div className='home flex container'>
      <div className='homeImages flex'>
        <img src={v21} className='plane' alt='Plane'></img>
        <div style={textStyle}>
          <button
            style={ButtonStyle}
            onMouseEnter={() => {
              setIsHovered(true);
              setShowPopover(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setShowPopover(false);
            }}
          >
            <Link style={{ color: "white" }} to="/transport">
              Start Planning
            </Link>
          </button>
          {/* Popover content */}
          <div style={popoverStyle}>
            Click me to start planning your next favorite trip
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
