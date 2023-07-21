import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../HomeMain/index.css";
import Nav from "../Nav";
import "./index.css";
import {Link} from 'react-router-dom'

 const Header = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        
        <div >
          <a className="navbar-brand" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTtA_4GjOO-CEcjEcLcMUoNXc8Q76Vv4R83cnkCtsaQ&s"
              className="navbar-image"
              alt=""
            />
          </a>
        </div>
        <div >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav w-100">
              <ul className="nav-un-ordered-list-container">
              <li><a className="nav-link active m-1" href="#">
                Courses <span class="sr-only"></span>
              </a>
              <ul id="submenu">
              <Link to="/Fullstack" className="nav-course-list"><li >Full Stack Development</li></Link>
                <li className="nav-course-list">Data Science</li>
                <li className="nav-course-list"><a href="" className="nav-link ">Mendix</a></li>
                <li className="nav-course-list"><a href="" className="nav-link ">Polarian</a></li>
              </ul>
              </li>
              <li><a className="nav-link m-1" href="#">
                Placements
              </a></li>
              <li><a className="nav-link m-1" href="#">
                Community
              </a></li>
              <Link to="/Hirefromus" className="nav-course-list"><li>
                Hire From Us
              </li></Link>
              <button className="join-button m-1">Sign In</button>
              </ul>
            </div>
          </div>
        </div>
       
      </nav>


      


    </div>
  );
};
export default Header