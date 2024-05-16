

import React from "react";
import './Course.css';
import Dont from "../img/Dontmiss.png"
const Course = () => {
    return (
        <>
        
        <div className="CourseSection">
            <p className="coursepara">DATASCIENCE COURSE LEARNING PATH</p>
            <h1 className="CourseH1">
                <span>Data Science</span>
                <span>Course Curriculum</span>
            </h1>  
            <div className="CourseDetailse">
                <div className="Cplus">
                <div className="CplusCour">
                <h3>C++</h3>
                <p>Learn C++ for strong programming fundamentals.</p>
                </div>
                <button className="viewCour">View Curriculum</button>
                </div>
                <hr/>

                <div className="Cplus">
                <div className="CplusCour">
                <h3>MERN Stack</h3>
                <p>Master the MERN stack for high-demand projects.</p>
                </div>
                <button className="viewCour">View Curriculum</button>
                </div>
                <hr/>

                <div className="Cplus">
                <div className="CplusCour">
                <h3>Data Structure & Algorithm</h3>
                <p>Exel in Data Structureand Algorithmsfor interview  success.</p>
                </div>
                <button className="viewCour">View Curriculum</button>
                </div>
                <hr/>

                <div className="Cplus">
                <div className="CplusCour">
                <h3>Competitve Programming</h3>
                <p>Exel in Data Structureand Algorithmsfor interview  success.</p>
                </div>
                <button className="viewCour">View Curriculum</button>
                </div>
            </div>
        </div>

        <div className="opportunity">
            <h1>
            <span style={{color:'#686972'}}>Don't miss out on this </span>
                <span style={{color:''}}>limited-time opportunity</span>
                <span style={{color:'#686972'}}> to learn for </span>
                <span style={{color:'red'}}>free!</span>
                </h1>
        </div>

        <div className="dontmiss">
            <img src={Dont}></img>
        </div>

        {/* <div className="CompanySection">
            <h1 className="companyheading"> 
            <span style={{color:'#686972'}}>Top Company Hiring </span>
            <span style={{color:'#746415'}}>Data </span>
            <span style={{color:'#746415b9'}}>Scientist</span>
            </h1>

        </div> */}
        </>
    );
}

export default Course;


