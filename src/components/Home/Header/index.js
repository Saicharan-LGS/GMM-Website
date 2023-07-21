import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../HomeMain/index.css";
import Nav from "../Nav";
import "./index.css";

export const Header = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        {/* <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}> */}
        <div>
          <a className="navbar-brand" href="#image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTtA_4GjOO-CEcjEcLcMUoNXc8Q76Vv4R83cnkCtsaQ&s"
              className="navbar-image"
              alt=""
            />
          </a>
        </div>
        <div>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link active m-3" href="#image">
                Courses <Nav/><span class="sr-only"></span>
              </a>
              <a className="nav-link m-3" href="#image">
                Placements
              </a>
              <a className="nav-link m-3" href="#image">
                Community
              </a>
              <a className="nav-link m-3" href="#image">
                Hire From Us
              </a>
              <button className="join-button m-3">Sign In</button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </nav>


      


    </div>
  );
};