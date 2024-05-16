import React from "react";
import "./CompanySection.css"; // Import your CSS file
import First from "../img/first.png"
import Second from "../img/second.png"
import Star from "../img/award-star.png"
const CompanySection = () => {
    return (
        <>
            <div className="CompanySection">
                <h1 className="companyheading">
                    <span style={{ color: '#686972' }}>Top Company Hiring </span>
                    <span style={{ color: '#746415' }}>Data </span>
                    <span style={{ color: '#746415b9' }}>Scientist</span>
                </h1>


                <div className="company-section">
                    <div className="company-logos">
                        <div className="logo-container">
                            <p>Logo</p>
                        </div>
                        <div className="logo-container">
                            <p>Logo</p>
                        </div>
                        <div className="logo-container">
                            <p>Logo</p>
                        </div>
                        <div className="logo-container">
                            <p>Logo</p>
                        </div>

                        {/* Add more logo containers for other logos */}
                    </div>
                </div>
            </div>

            <div className="finalSection">
                <h1>
                    <span style={{ color: '#686972' }}>Unlock </span>
                    <span style={{ color: '#746415' }}>6 Certificates </span>
                    <span style={{ color: '#746415b9' }}>& </span>
                    <span style={{ color: '#746415b9' }}>Internship Opportunity</span>
                </h1>
                <div className="two-section">
                    <div className="first-section">
                        <h3>Get 6 Industry Recognized Certificates!</h3>
                        <img src={First}></img>
                        <div className="highlight">
                            <div className="cantent" style={{ backgroundColor: '#F4D6F8' }}>  <img className="AwardStar" src={Star} alt="Star" /> <p>Official and Verified</p>   </div>
                            <div className="cantent" style={{ backgroundColor: '#F4D6F8' }}>  <img className="AwardStar" src={Star} alt="Star" /> <p>Enhances Credibility</p>   </div>
                        </div>
                    </div>
                    <div className="second-section">
                        <h3>Bag Internship Opportunities!</h3>
                        <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
                        <img src={Second}></img>
                    </div>

                </div>
            </div>

            <div className="box">
                <div className="left-box">
                    <h1>
                        Enroll for DataScience Bundle @₹1,499
                        <span style={{ fontSize: '13px' }}>₹2,600</span>
                    </h1>
                    <p>Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
                    <button className="enroll-bt" style={{ backgroundColor: 'blue', width: '100px', height: '30px', border: 'none', borderRadius: '10px' }}>Enroll Now</button>
                </div>
                <hr className="hrr"></hr>
                <div className="right-box">
                    <p>Total number of Courses <br />
                        <strong>6</strong> </p>
                    <p>Total number of Certificates<br />
                        <strong>6</strong></p>
                    <p>Access to Courses <br />
                        <strong>Life Time</strong></p>
                </div>
            </div>







        </>
    );
};

export default CompanySection;
