import React from "react";

import Dubai from "../../assets/dubai.jpg";

const Support = () => {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titlesDiv'>
          <small>travel support</small>
          <h2>Plan your travel confidently</h2>
          <p>
            Get help with Travel plans and Accomodation, see what to expect
            along the journey!
          </p>
        </div>

        <div className='infoDiv grid'>
          <div className='textDiv grid'>
            <div className='singleInfo'>
              <span className=' number '>01</span>
              <h4>Don't know where to go?</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>

            <div className='singleInfo'>
              <span className=' number colorOne'>02</span>
              <h4>Travel Guides</h4>
              <p>
                Personal Travel Guide so you get most out of your stay and fill
                it up with adventure.
              </p>
            </div>

            <div className='singleInfo'>
              <span className=' number colorTwo'>03</span>
              <h4>High Class Accomodation</h4>
              <p>From Mid-Range to 5-Star accomodation based on your needs</p>
            </div>
          </div>

          <div className='imgDiv'>
            <img src={Dubai} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
