import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import hotelsSearch from '../../assets/HotelsSearch.png'
import { useState } from 'react';
const Search = () => {
const [showPicture,setShowPicture]=useState(false);
const handleButtonClick=()=>{
  setShowPicture(true);
}

  return (
    <div className='search container section'>
      <div className='sectionContainer grid'>
        <div className='searchInputs flex'>
          {/* Single Input Flex */}
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <HiOutlineLocationMarker className='icon'></HiOutlineLocationMarker>
            </div>
            <div className='texts'>
              <h4>City</h4>
              <input type='text' placeholder='Where do you want to go?'></input>
            </div>
          </div>

          {/* Single Input Flex */}
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RiAccountPinCircleLine className='icon'></RiAccountPinCircleLine>
            </div>
            <div className='texts'>
              <h4>Guests</h4>
              <input type='text' placeholder='Add guests'></input>
            </div>
          </div>

          {/* Single Input Flex */}
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalendar className='icon'></RxCalendar>
            </div>
            <div className='texts'>
              <h4>Calendar</h4>
              <input type='text' placeholder='Check-In'></input>
            </div>
          </div>

          {/* Single Input Flex */}
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalendar className='icon'></RxCalendar>
            </div>
            <div className='texts'>
              <h4>Calendar</h4>
              <input type='text' placeholder='Check-Out'></input>
            </div>
          </div>

          <button className='btn btnBlock flex' style={{width:'35%'} } onClick={handleButtonClick} >Search Hotels</button>
        </div>

        <div className='btns flex'>
          <div className='singleBtn' onClick={()=>window.open('https://www.airbnb.com/','_blank')}>
            <span>Airbnb</span>
          </div>

          <div className='singleBtn'  onClick={()=>window.open('https://www.booking.com/','_blank')}>
            <span>Booking.com</span>
          </div>

          <div className='singleBtn' onClick={()=>window.open('https://www.agoda.com/','_blank')}>
            <span>Agoda</span>
          </div>
        </div>
      </div>
      <div>
        {showPicture && (  <img src={hotelsSearch} style={{width:'45%', marginLeft:'30%'}}></img>)}
      </div>
    </div>
  );
};

export default Search;
