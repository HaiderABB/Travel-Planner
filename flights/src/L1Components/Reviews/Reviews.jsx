import React, { useState } from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";


const Reviews = () => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => {
    setHovered(!hovered);
  };

  const testimonialStyle = {
    backgroundColor: hovered ? "#f0f0f0" : "white",
    border: "1px solid #ddd",
    padding: "20px",
    margin: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-around", // Adjust as needed
    alignItems: "center",
  };

  return (
    <div
      style={{
        justifyContent: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        marginTop: "70px",
      }}
    >
      <div className="testimonials">
        <div className="inner">
          <h1 style={{ color: "#093252", textAlign: "center" }}>
            <b>See What our Travellers Say!</b>
          </h1>
          <div className="border"></div>

          <div className="row" style={rowStyle}>
            <div className="col">
              <div
                className="testimonial"
                style={testimonialStyle}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
              >
                <img src={p1} alt="Person 1" style={{ width: "50px", borderRadius: "50%" }} />
                <div className="name">John Doe</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s"
                </p>
              </div>
            </div>

            <div className="col">
              <div
                className="testimonial"
                style={testimonialStyle}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
              >
                <img src={p2} alt="Person 2" style={{ width: "50px", borderRadius: "50%" }} />
                <div className="name">Jane Smith</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s"
                </p>
              </div>
            </div>

            <div className="col">
              <div
                className="testimonial"
                style={testimonialStyle}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
              >
                <img src={p3} alt="Person 3" style={{ width: "50px", borderRadius: "50%" }} />
                <div className="name">Emily Johnson</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s"
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default Reviews;
