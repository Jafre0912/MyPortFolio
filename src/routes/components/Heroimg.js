import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../../assets/intro-bg.jpg"
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
           <p className="p1"><i>Hi, I'm AJ. a Software Developer skilled in MERN Stack, MVC Model, Designing, Java(DSA), Python, AWS, DevOps, Digital Marketing and problem solving.</i></p>
           <h1>Software Developer</h1>
           <p className="p" ><i>DSA enthusiast • Practicing on LeetCode exhaustively</i></p>

            <div>
               <Link to="/project" className="btn">Project</Link>
               <Link to="/contact" className="btn btn-light">Contact</Link>   
            </div>
        </div>
    </div>
  )
}

export default Heroimg