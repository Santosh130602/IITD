import React from "react";
import './Hero.css';
import Cap from "../img/cap.png";
import Star from "../img/award-star.png"
import StatsSection from "../Count/CountNumber";

const Hero = () => {
  return (
    <div className="hero">
      <div className="prehero">
        <img className="cap" src={Cap} alt="IITD" />
        <p> An <strong>IIT Delhi</strong> Alumni Initiative</p> 
      </div>
      <h1 className="heroHeading">
        <span style={{ color: 'rgba(0, 0, 0, 0.388' }}>Become an Expert in the field of </span>
        <span style={{ color: 'rgba(137, 43, 226, 0.508)' }}>Data Science with 6 Courses</span>
      </h1>
      <p className="afterH1">
        <span style={{color: 'rgba(0, 0, 0, 0.646)'}}> A specially crafted Tech Kickstarter, with</span> 5+ extensive online courses
        </p>

        <div className="highlight">
        <div className="cantent">  <img className="AwardStar" src={Star} alt="Star" /> <p>Personal Mentorship</p>   </div>
        <div className="cantent">  <img className="AwardStar" src={Star} alt="Star" /> <p>Internship Assistance</p>   </div>
        <div className="cantent">  <img className="AwardStar" src={Star} alt="Star" /> <p>Industry Certified Courses</p>   </div>
        </div>
              

        <div className="button">
        <button className="enroll-btn">Enroll Now</button>
        <button className="know-btn">Know More</button>
        </div>
        
    </div>
  );
}

export default Hero;

