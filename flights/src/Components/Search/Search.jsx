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

          <button className='btn btnBlock flex'>Search Flight</button>
        </div>

        <div className='btns flex'>
          <div className='singleBtn'>
            <span>Economy</span>
          </div>

          <div className='singleBtn'>
            <span>Business Class</span>
          </div>

          <div className='singleBtn'>
            <span>First Class</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
