import { useRef, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { MdOutlineFlightClass } from "react-icons/md";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";

const Search = () => {
  var d = new Date();
  d.setDate(d.getDate() + 1);
  d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(d);
  const [flights, setFlights] = useState([]);

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

          <button
            className="btn btnBlock flex"
            onClick={() => {
              if (!from || !to || !date) {
                alert("Please fill in all the fields before searching.");
                return;
              }

              const jsonData = {
                to,
                from,
                date,
              };
              const jsonString = JSON.stringify(jsonData);
              const apiUrl = "http://localhost:3005/flights/";

              fetch(apiUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: jsonString,
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log("Response:", data);
                  setFlights(data.flights);
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }}
          >
            Search Flight
          </button>
        </div>

        <div className="btns flex">
          <div
            className="singleBtn"
            onClick={() => window.open("https://www.etihad.com/", "_blank")}
          >
            <span>Flights</span>
          </div>

          {/* <div
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
          </div> */}
        </div>
        {flights.map((f, i) => (
          <Card key={i} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {f.airline} - Flight {f.flight_number}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`${f.departure_city} -> ${f.destination_city}`}
              </Typography>
              <Typography variant="body2">
                Takeoff: {moment(f.departure_time).format("LLL")}
                <br />
                Landing: {moment(f.arrival_time).format("LLL")}
              </Typography>
              {f.classes.map((c, i) => (
                <>
                  <br />
                  <Typography key={i} variant="body2">
                    {c.name}
                    <br />
                    Seats: {c.seats} - Price: {c.expense}$
                  </Typography>
                </>
              ))}
            </CardContent>
            <CardActions>
              <Button size="small">Book</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Search;
