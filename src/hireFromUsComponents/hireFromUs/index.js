import React, { Component } from "react";
import SplitLayout from "../splitLayout/splitLayout";
import img1 from "../assets/hero.png"
import img2 from "../assets/group.png"
import img3 from "../assets/grade.png"
import img4 from "../assets/range.jpg"
import HowItWorks from "../howItWorks/HowItWorks";
import PlacementTeam from "../placementTeam/placementTeam";
import CTADiscord from "../CTADiscord/CTADiscord";
import Testimonial from "../testimonial/Testimonial"

class HireFromUs extends Component {
    render() {
      return (
        <>
          <div className="splitLayout-section">
            <div className="container">
              <SplitLayout
                heading="Hire top 1% Data Science talent"
                paragraph="Build your Data & Engineering Team with industry ready top skilled tech talent."
                btn="HIRE NOW"
                imgPath={img1}
              />
              <SplitLayout
                addClass="left"
                heading="Access top notch Tech Talent"
                paragraph="Our students are trained in our flagship full-stack Data Science program and would be top fit for a multitude of data-oriented roles."
                btn="HIRE NOW"
                imgPath={img2}
              />
              <SplitLayout
                heading="Intensive Candidate Training"
                paragraph="Our training process is quite intensive simulating a workplace environment for students to work in teams to solve industry relevant projects. With prior hands-on experience, our candidates are productive from Day 1 at the job."
                btn="HIRE NOW"
                imgPath={img3}
              />
              <SplitLayout
                addClass="left"
                heading="Pre-Evaluation by Industry Professionals"
                paragraph="All GloriousMindMine graduates eligible for hiring are pre-screened by top industry professionals working at Fortune 500 companies. We also provide detailed student performance report to the recruiters for verification purposes"
                btn="HIRE NOW"
                imgPath={img4}
              />
            </div>
          </div>
  
          <div className="container">
            <Testimonial />
  
            <HowItWorks title="How it works?" />
            <PlacementTeam title="Start hiring the top 1% Data Science Talent" />
            <CTADiscord />
          </div>
        </>
      );
    }
  }
  export default HireFromUs;