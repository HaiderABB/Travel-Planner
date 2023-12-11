import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
const Search = () => {

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
              <h4>Destination</h4>
              <input type='text' placeholder='Where do you want to go?'></input>
            </div>
          </div>

          {/* Single Input Flex */}
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RiAccountPinCircleLine className='icon'></RiAccountPinCircleLine>
            </div>
            <div className='texts'>
              <h4>Passengers</h4>
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
              <input type='date' placeholder='Check-In'></input>
            </div>
          </div>

          {/* Single Input Flex */}
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalendar className='icon'></RxCalendar>
            </div>
            <div className='texts'>
              <h4>Calendar</h4>
              <input type='date' placeholder='Check-Out'></input>
            </div>
          </div>

          <button className='btn btnBlock flex'>Search Trip</button>
        </div>

      </div>
    </div>
  );
};

export default Search;
