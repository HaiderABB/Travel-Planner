import React from "react";
import { RxCalendar } from "react-icons/rx";
import { BsShieldCheck } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
const Info = () => {
  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className='titleDiv flex'>
          <h2>
            Explore curated adventures with us, crafting lasting memories on
            every journey.
          </h2>
          <button className='btn'>View All</button>
        </div>
        <div className='cardsDiv grid'>
          <div className='singleCard grid'>
            <div className='iconDiv flex '>
              <RxCalendar className='icon'></RxCalendar>
            </div>
            <span className='cardTitle'>Book & Relax</span>
            <p>Cheapest Flight price guaranteed</p>
          </div>

          <div className='singleCard grid'>
            <div className='iconDiv flex colorOne'>
              <BsShieldCheck className='icon'></BsShieldCheck>
            </div>
            <span className='cardTitle'>Smart Checklist</span>
            <p>Make a pre-travel checklist so you don't miss anything</p>
          </div>

          <div className='singleCard grid'>
            <div className='iconDiv flex colorTwo'>
              <BsBookmarkCheck className='icon'></BsBookmarkCheck>
            </div>
            <span className='cardTitle'>Save More</span>
            <p>Save places in your checklist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
