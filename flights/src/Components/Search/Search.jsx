import { useRef, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { MdOutlineFlightClass } from "react-icons/md";

const Search = () => {
  var d = new Date();
  d.setDate(d.getDate() + 1);
  d = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(d);
  // console.log(d);

  const dateInputRef = useRef(null);

  return (
    <div className="search container section">
      <div className="sectionContainer grid">
        <div className="searchInputs flex">
          {/* Single Input Flex */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon"></HiOutlineLocationMarker>
            </div>
            <div className="texts">
              <h4>Departure</h4>
              <input
                type="text"
                placeholder="Where do you want to start?"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              ></input>
            </div>
          </div>

          {/* Single Input Flex */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon"></RiAccountPinCircleLine>
            </div>
            <div className="texts">
              <h4>Destination</h4>
              <input
                type="text"
                placeholder="Where do you want to go?"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
            </div>
          </div>

          {/* Single Input Flex */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon"></RxCalendar>
            </div>
            <div className="texts">
              <h4>Date</h4>
              <div>
                <input
                  type="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  ref={dateInputRef}
                  min={d}
                />
                <p>Selected Date: {date}</p>
              </div>
              {/* <input type='text' placeholder='Day'></input> */}
            </div>
          </div>

          {/* Single Input Flex */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <MdOutlineFlightClass className="icon"></MdOutlineFlightClass>
            </div>
            <div className="texts">
              <h4>Flight Category</h4>
              <input type="text" placeholder="Select Cabin Class"></input>
            </div>
          </div>

          <button className="btn btnBlock flex" onClick={() => {
            const jsonData = {
                to,
                from,
                date
            };
            const jsonString = JSON.stringify(jsonData);
            const apiUrl = 'http://localhost:3005/flights/';

            fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              // Include the JSON data in the request body (note: GET requests should not have a body)
              // This might not be supported by all servers
              body: jsonString,
            })
              .then(response => response.json())
              .then(data => {
                console.log('Response:', data);
              })
              .catch(error => {
                console.error('Error:', error);
              });
          }}>Search Flight</button>
        </div>

        <div className="btns flex">
          <div
            className="singleBtn"
            onClick={() => window.open("https://www.etihad.com/", "_blank")}
          >
            <span>Etihad Airways</span>
          </div>

          <div
            className="singleBtn"
            onClick={() => window.open("https://www.emirates.com/", "_blank")}
          >
            <span>Emirates</span>
          </div>

          <div
            className="singleBtn"
            onClick={() =>
              window.open("https://www.qatarairways.com/", "_blank")
            }
          >
            <span>Qatar Airways</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
