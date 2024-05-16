import React, { useState, useEffect } from "react";
import './CountNumber.css';
import Course from "../img/Course.png"
import Learners from "../img/Learners.png"
import Project from "../img/Project.png"
import Doubts from "../img/Doubts.png"


const CountNumber = () => {
    return(
        <>
        <div className="CountNum">
        <div className="course">
            <img src={Course}></img>
            <div className="NumCont">
                <h3>24</h3>
                <p>Courses</p>
            </div>

        </div>
        <div className="course">
            <img src={Learners}></img>
            <div className="NumCont">
                <h3>30k+</h3>
                <p>Learners</p>
            </div>
            
        </div>
        <div className="course">
            <img src={Doubts}></img>
            <div className="NumCont">
                <h3>100k+</h3>
                <p>Doubts Solved</p>
            </div>
            
        </div>
        <div className="course">
            <img src={Project}></img>
            <div className="NumCont">
                <h3>10k+</h3>
                <p>Student Projects</p>
            </div>
            
        </div>

        </div>
        </>
    );

}
export default CountNumber;