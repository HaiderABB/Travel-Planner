import React, { useState } from "react";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import { Link } from "react-router-dom";

//Images

import applogo from "../../assets/applogo (2).png";

const Navbar = () => {
  //  Navbar for small width screens
  const [active, setActive] = useState("navBarMenu");
  const showNavBar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavBar = () => {
    setActive("navBarMenu");
  };

  // background color for 2nd NavBar
  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_with_bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>{/* <SiConsul></SiConsul> */}</div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate></BsPhoneVibrate>
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal></AiOutlineGlobal> Languages
          </li>
        </div>

        <div className="atb flex">
          {/* <span>Sign In</span>
          <span>Sign Out</span> */}
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
        <Link to="/">
          <img src={applogo} className="Logo"></img>
        </Link>
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li
              onClick={removeNavBar}
              className="listItem"
              style={{ marginLeft: "-23%" }}
            >
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </li>
            <li
              onClick={removeNavBar}
              className="listItem"
              style={{ marginLeft: "8%" }}
            >
              <Link style={{ color: "white" }} to="/transport">
                Transport
              </Link>
            </li>
            <li
              onClick={removeNavBar}
              className="listItem"
              style={{ marginLeft: "8%" }}
            >
              <Link style={{ color: "white" }} to="/hotels">
                Hotels
              </Link>
            </li>
            <li
              onClick={removeNavBar}
              className="listItem"
              style={{ marginLeft: "8%" }}
            >
              Restaurants
            </li>
            <li
              onClick={removeNavBar}
              className="listItem"
              style={{ marginLeft: "8%" }}
            >
              Guides
            </li>
            <li
              onClick={removeNavBar}
              className="listItem"
              style={{ marginLeft: "8%" }}
            >
              About Us
            </li>
          </ul>
        </div>
        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="icon"></CgMenuGridO>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
