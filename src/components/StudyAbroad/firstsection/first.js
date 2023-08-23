import React from "react";
import pic1 from "../../picture/picture1.jpg";
import pic2 from "../../picture/picture2.png";
import pic3 from "../../picture/picture3.svg";
import pic4 from "../../picture/picture4.jpg";
import pic5 from "../../picture/picture5.jpg";
import pic6 from "../../picture/picture6.jpg";
import pic7 from "../../picture/picture7.jpg";
// import pic7 from "./../picture/picture71.jpg";

import pic8 from "../../picture/picture8.png";
import pic9 from "../../picture/picture9.png";
import pic10 from "../../picture/picture10.png";
import pic11 from "../../picture/picture11.png";
import pic12 from "../../picture/picture12.png";
import pic13 from "../../picture/picture13.png";
import pic14 from "../../picture/picture14.png";
import pic15 from "../../picture/picture15.png";
import pic16 from "../../picture/picture16.png";
import pic17 from "../../picture/picture17.png";

import Carousel from "../Carousel";

// import "./First.css";
import "./newCss.css";

const HeaderSection = () => {
  return (
    <>
      <section className="study-abroad-sectionName-header">
        <div className="container">
          <div className="study-abroad-sectionName-container myflex">
            <div className="study-abroad-sectionName-hero-header old-banner">
              <h1 className="study-abroad-section-Name-hero">
                MS in Information Science: Machine Learning
              </h1>
              <h3 className="study-abroad-section-Name-hero2">
                No GRE/ TOEFL required
                <br /> Save INR 55+ Lakhs <br /> Upto 3 years STEM OPT Visa in
                the US
              </h3>
              <div div className="heading45">
                {/* <ul className="study-abroad-section-Name-banner hilight">
                  <li className="study-abroad-section-Name-banner_hilight1">
                    "No GRE/ TOEFL required"
                  </li>
                  <li className="study-abroad-sectionName-hero_banner">
                    "Save INR 55+ Lakhs"
                  </li>
                  <li className="study-abroad-sectionName-hero_banner2">
                    Upto 3 years STEM OPT Visa in the US
                  </li>
                </ul> */}
              </div>
              <h4 className="study-abroad-sectionName-hilight-subtitle">
                Hybrid • 2 years
              </h4>

              <div className="study-abroad-sectionName-banner-deadline">
                <div className="study-abroad-sectionName-deadline">
                  Application Closes{" "}
                </div>
                <strong>
                  30<sup>th</sup> Aug 2023
                </strong>
                <div className="btns">
                  <button className="btn primary">Download Brousher</button>
                  <button className="btn outline">Apply Now</button>
                </div>
              </div>
            </div>

            <div className="study-abroad-sectionName-amil">
              <img src={pic1} alt="Picture2" title="video-banner" />
            </div>
          </div>
        </div>{" "}
      </section>

      <section
        className="study-abroad-sectionName-collaboration container"
        id="colaboration section"
      >
        <div className="study-abroad-sectionName-container1 myflex">
          <div className="study-abroad-sectionName-logo-with-title">
            <h3 className="study-abroad-sectionName-heading12">
              Program Delivered by:
            </h3>
            <div className="div">
              <img
                className="study-abroad-sectionName-arizona-logo"
                src={pic2}
                alt="Picture2"
              />
            </div>
          </div>
          <div className="study-abroad-sectionName-logo-with-title">
            <h3 className="study-abroad-sectionName-heading12">
              In Collaboration with:
            </h3>
            <div className="div">
              <img
                className="study-abroad-sectionName-gl-logo"
                src={pic3}
                alt="picture3"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="study-abroad-sectionName-collaboration1"
        id="colaboratio"
      >
        <div className="study-abroad-sectionName-container container myflex">
          <div className="study-abroad-sectionName-rank-card1">
            <img
              className="study-abroad-sectionName-logo"
              src={pic4}
              alt="Picture4"
            />
            <div className="text">
              <p className="study-abroad-sectionName-rankhead">
                RANKINGS AND RECOGNITIONS TOP 50 PUBLIC UNIVERSITY
              </p>
              <p className="study-abroad-sectionName-ranktext">
                U.S. News & World Report
              </p>
            </div>
          </div>
          <div className="study-abroad-sectionName-rank-card1">
            <img
              className="study-abroad-sectionName-logo"
              src={pic5}
              alt="Picture5"
            />
            <p class="study-abroad-sectionName-rankhead">
              TOP 100 GLOBAL UNIVERSITY
            </p>
            <p class="study-abroad-sectionName-rank-text">
              U.S. News &amp; World Report
            </p>
            <p class="study-abroad-sectionName-rank-text">2021</p>
          </div>
          <div className="study-abroad-sectionName-rank-card1">
            <img
              className="study-abroad-sectionName-logo"
              src={pic6}
              alt="Picture6"
            />
            <p class="study-abroad-sectionName-rankhead">
              TOP 0.47% WORLDWIDE UNIVERSITY
            </p>
            <p class="study-abroad-sectionName-rank-text">
              Center for World University Rankings
            </p>
            <p class="study-abroad-sectionName-rank-text">2022</p>
          </div>
        </div>
      </section>

      <section
        className="study-abroad-sectionName-hilight container "
        id="carreer"
      >
        <h3 className="study-abroad-sectionName-heading ">
          Why Choose this Program?
        </h3>
        <div className="study-abroad-sectionName-grid ">
          <div className="study-abroad-sectionName-hight-wrapper myflex">
            <div className="study-abroad-sectionName-container5">
              <h5 className="heading">Hybrid Format</h5>
              <ul>
                <li className="study-abroad-sectionName-subheading1">
                  Hybrid mode of learning with first year online and second year
                  on-campus in US.
                </li>
                <li className="study-abroad-sectionName-subheading2">
                  Save INR 55+ Lakhs as compared to full-time US master’s.
                </li>
                <li study-abroad-sectionName-subheading3>
                  Eligible for up to 3 years STEM OPT Visa in the US.
                </li>
              </ul>
            </div>
            <div className="study-abroad-sectionName-container5">
              <h5 className="heading2">Learn from World-Class Faculty</h5>
              <ul>
                <li>
                  Learn from University of Arizona faculty over live online
                  classes and in-person classes.
                </li>
                <li>
                  Curriculum designed by leading experts to cover information
                  science skills from fundamentals to complex, hands-on
                  applications.
                </li>
              </ul>
            </div>
            <div className="study-abroad-sectionName-container5">
              <h5 className="heading3">Practical, Hands-on Learning</h5>
              <ul>
                <li>
                  Get the best practical learning experience with the faculty of
                  The University of Arizona, a world leader in research and
                  innovation.
                </li>
                <li>
                  Hands-on Projects and case studies to apply machine learning
                  techniques to solve real-world business problems.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container">
        <header>
          <img
            className="study-abroad-sectionName-logo19"
            src={pic7}
            alt="picture7"
          />
          <section class="hero-header-text">
            <h1>Ellen Macpherson</h1>
            <h2>Just another tech blog.</h2>
            <button>Read more.</button>
          </section>
        </header>
      </div>
      <section
        className="study-abroad-sectionName-Top Recruiters that hire from University of Arizona"
        id="hiring partner"
      >
        <div className="container border">
          <h2 class="heading-center">
            Top Recruiters that hire from University of Arizona
          </h2>
          <img
            className="study-abroad-sectionName-logo19"
            src={pic7}
            alt="picture7"
          />
          <div className="logo">
          <div className="study-abroad-sectionName-required-logo1">
            <div className="study-abroad-sectionName-required-recruiters-logo__container">
              <img
                className="study-abroad-sectionName-logo"
                src={pic8}
                alt="Picture8"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo2">
              <img
                className="study-abroad-sectionName-logo"
                src={pic9}
                alt="Picture9"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo3">
              <img
                className="study-abroad-sectionName-logo"
                src={pic10}
                alt="Picture10"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo3">
              <img
                className="study-abroad-sectionName-logo"
                src={pic11}
                alt="Picture11"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo3">
              <img
                className="study-abroad-sectionName-logo"
                src={pic12}
                alt="Picture12"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo3">
              <img
                className="study-abroad-sectionName-logo"
                src={pic13}
                alt="Picture13"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo3">
              <img
                className="study-abroad-sectionName-logo"
                src={pic14}
                alt="Picture14"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo3">
              <img
                className="study-abroad-sectionName-logo"
                src={pic15}
                alt="Picture15"
              />
            </div>
            <div className="study-abroad-sectionName-required-logo3">
              <img
                className="study-abroad-sectionName-logo"
                src={pic16}
                alt="Picture16"
              />
            </div>
          </div>
        </div>
        </div>

      </section>
     
      
      <section >
      <div className="study-abroad-sectionName-container17">
        <div className="study-abroad-sectionName-job-roles-flex">
          <div className="study-abroad-sectionName-card1">
            <div className="study-abroad-sectionName-job-roles">
              <p class="study-abroad-sectionName-job-roles__title">
                Computer and Information Research Scientists
              </p>
              <div className="study-abroad-sectionName-salary-container"></div>
              <p class="salary-amount">$130,000/year</p>
              <img
                className="study-abroad-sectionName-logo"
                src={pic17}
                alt="Picture17"
              />
            </div>
          </div>
        </div>
        <div className="study-abroad-sectionName-card1">
          <div className="study-abroad-sectionName-job-roles"></div>
          <p class="study-abroad-sectionName-job-roles__title">
            Machine Learning Engineer
          </p>
          <div className="study-abroad-sectionName-salary-container"></div>
          <p class="salary-amount">$130,000/year</p>
          <img
            className="study-abroad-sectionName-logo"
            src={pic17}
            alt="Picture17"
          />
        </div>

        <div className="study-abroad-sectionName-card1">
          <div className="study-abroad-sectionName-job-roles"></div>
          <p class="study-abroad-sectionName-job-roles__title">
            Machine Learning Engineer
          </p>
          <div className="study-abroad-sectionName-salary-container"></div>
          <p class="salary-amount">$130,000/year</p>
          <img
            className="study-abroad-sectionName-logo"
            src={pic17}
            alt="Picture17"
          />
        </div>
        </div>

        <Carousel />
      </section>
    </>
  );
};

export default HeaderSection;
