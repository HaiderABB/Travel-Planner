import React from "react";
import applogo from "../../assets/applogo (2).png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='sectionContainer container grid'>
        <div className='gridOne'>
          <div className='logoDiv'>
            <img src={applogo} className='Logo'></img>
          </div>
          <div className='socialIcon flex'>
            <TiSocialFacebook className='icon'></TiSocialFacebook>
            <TiSocialInstagram className='icon'></TiSocialInstagram>
            <TiSocialTwitter className='icon'></TiSocialTwitter>
            <TiSocialYoutube className='icon'></TiSocialYoutube>
          </div>
        </div>
        <div className='footerLinks'>
          <span className='linkTitle'>Links</span>
          <li>
            <a>Flights</a>
          </li>
          <li>
            <a>Stays</a>
          </li>{" "}
          <li>
            <a>Discover</a>
          </li>{" "}
          <li>
            <a>About Us</a>
          </li>{" "}
          <li>
            <a>Contact</a>
          </li>
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Our Activities</span>
          <li>
            <a>Tour</a>
          </li>
          <li>
            <a>Explore</a>
          </li>{" "}
          <li>
            <a>Guides</a>
          </li>{" "}
        </div>

        <div className='footerLinks'>
          <span className='linkTitle'>Contact</span>
          <li>
            <a>Address: FAST NUCES</a>
          </li>
          <li>
            <a>Lahore, Pakistan</a>
          </li>{" "}
          <li>
            <a>Phone: 033883973</a>
          </li>{" "}
          <li>
            <a>Email:travisor@gmail.com</a>
          </li>{" "}
          <li>
            <a>Maps: FAST NUCES, Lahore</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
