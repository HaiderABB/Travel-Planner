import React from "react";
import bridge from "../../assets/bridge.jpeg";
import london from "../../assets/london.jpeg";
import paris from "../../assets/paris.jpg";
import Italy from "../../assets/Italy.jpg";

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <h2>Top Destinations of the month</h2>
      <div className='sectionContainer'>
        <div className='travelersContainer grid'>
          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={paris} className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName'>
                <span>Paris</span>
                <p>City of Lights, a romantic hub with iconic landmarks.</p>
              </div>
            </div>
          </div>

          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={bridge} className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName'>
                <span>London</span>
                <p>Dynamic UK capital with modern allure.</p>
              </div>
            </div>
          </div>

          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={london} className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName'>
                <span>Rome</span>
                <p>
                  Eternal City, where ancient wonders meet contemporary charm.
                </p>
              </div>
            </div>
          </div>

          {/* Single Passenger Card */}
          <div className='singleTraveler'>
            <img src={Italy} className='destinationImage'></img>
            <div className='travelersDetails'>
              <div className='travelerName'>
                <span>Barcelona</span>
                <p>
                  Mediterranean gem with Gaudí's artistry and lively streets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
