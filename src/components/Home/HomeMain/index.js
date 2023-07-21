import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
//import Nav from "../Nav";
import { Header } from "../Header";
import { Footer } from "../Footer";

class Home extends Component {
  render() {
    return (
      <>
      < Header/>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="startheading">
                Learning is better <br />
                with{" "}
                <span className="startredheading">
                  Glorious
                   Mindmine
                </span>
              </h1>
              <p className="startpara">
                Launch your career in Data Science & Web Development Earn up to
                ₹ 40 LPA at leading companies Pay us after you land your dream
                job
              </p>
              <button className="join-button">Explore Courses</button>
            </div>
            <div className="col-12 col-md-6">
              <img
                alt="startimage"
                className="designationimage"
                src="https://almablog-media.s3.ap-south-1.amazonaws.com/Group_1000002116_0863fca8fa.png"
              />
            </div>
            <div className="col-12 col-md-6">
              <h1 className="startheading">
                Transforming learnings and advancing careers in tech.
              </h1>
              <p className="startpara">
                We are revolutionising the way skills, experiences, and learning
                outcomes are delivered online. Join the largest tech community
                and fast forward your career with Glorious Mindmine.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img
                alt="learnersimage"
                className="learnersimage"
                src="https://almablog-media.s3.ap-south-1.amazonaws.com/large_Re2_ff693c3f5a.png"
              />
            </div>
            <div className="col-12 col-md-12">
              <h1 className="startheading ">Featured Courses</h1>
              <p className="startpara ">
                The most hands-on, practical, and intensive coding-led courses
                to fulfill your ambitions.
              </p>
            </div>
            <div className=" col-12 col-md-6 card shadow  coursescard">
              <h1 className="text-center startredheading">Certification</h1>
              <h2 className="text-center startheading">
                Certification in Full Stack{" "}
              </h2>
              <p className="startpara">
                Become a job-ready Full Stack professional. Join the largest
                tech community in India. Pay only after you get a job above 3
                LPA.
              </p>
              <button className="join-button">Explore Course</button>
            </div>
            <div className=" col-12 col-md-6 card shadow  coursescard">
              <h1 className="text-center startredheading">Certification</h1>
              <h2 className="text-center startheading">
                Certification in Mendix
              </h2>
              <p className="startpara">
                Become a job-ready Mendix developer professional. Join the
                largest tech community in India. Pay only after you get a job
                above 3 LPA.
              </p>
              <button className="join-button">Explore Course</button>
            </div>
            <div className=" col-12 col-md-6 card shadow coursescard">
              <h1 className="text-center startredheading">Certification</h1>
              <h2 className="text-center startheading">
                Certification in Polarian
              </h2>
              <p className="startpara">
                Become a job-ready Polarian developer professional. Join the
                largest tech community in India. Pay only after you get a job
                above 3 LPA.
              </p>
              <button className="join-button">Explore Course</button>
            </div>
            <div className=" col-12 col-md-6 card shadow coursescard">
              <h1 className="text-center startredheading">Certification</h1>
              <h2 className="text-center startheading">
                Certification in Data Science
              </h2>
              <p className="startpara">
                Become a job-ready certified Data Science professional. Join the
                largest tech community in India. Pay only after you get a job
                above 3 LPA.
              </p>
              <button className="join-button">Explore Course</button>
            </div>
            <h1 className="startredheading">Wall of Love</h1>
            <div className="col-12 col-md-4 card reviewstopcard reviewsborder shadow">
              <h1 className="reviewsheading">Aashruti Agrawal</h1>
              <p className="reviewspara text-center">
                Junior Data Engineer At Argus Media
              </p>
              <p>
                I’m elated to share that I’m starting a new journey as Junior
                Data Engineer at Argus Media Media! I would like to thank{" "}
                <span className="spancontainer">Glorious Mindmine</span> for
                digging out the potential in me and providing the wonderful
                platform to upskill myself. It is a privilege for me to be able
                to get guidance and learn from you,{" "}
                <span className="spancontainer">Zeeshan Mehdi</span>. This would
                not have been possible without your guidance. Kudos to our
                effort! <span className="spancontainer">Sana Mehdi</span> thank
                you for helping out me in each and every step of my journey.
                Looking ahead toward a wonderful journey and professional
                growth! I'm excited to start my new job!
              </p>
              <p>06:30 PM, 18th Aug</p>
            </div>
            <div className="col-12 col-md-4 card reviewstopcard reviewsborder shadow">
              <h1 className="reviewsheading">Mahin Arvind Chanthira Sekaran</h1>
              <p className="reviewspara text-center">
                Business Analyst At Groww, India
              </p>
              <p>
                I’m happy to share that I’m starting a new position as Business
                Analyst at Groww, India! Big shoutout to{" "}
                <span className="spancontainer">Glorious Mindmine</span> for
                providing the platform to prepare and equip myself to get here.
                Thanks to my mentors,{" "}
                <span className="spancontainer">Zeeshan Mehdi</span>, for their
                game-changing support, guidance and insights. I'm very grateful
                for the much-needed assistance and support offered.Thanks to
                Team Groww for the warm onboarding and the opportunity to help
                build a better future for the people.
              </p>
              <p>07:00 PM, 9th Jan</p>
            </div>
            <div className="col-12 col-md-4 card reviewstopcard reviewsborder shadow">
              <h1 className="reviewsheading">Wasim Khan</h1>
              <p className="reviewspara text-center">
                Associate Data Analyst At Coditas
              </p>
              <p>
                I am happy to share that I received my course completion
                certificate from{" "}
                <span className="spancontainer">Glorious Mindmine</span> the
                journey was not so hard nor easy. I would say it's smooth
                because of the quality course content and risk-free education.
                Thank you, <span className="spancontainer">Zeeshan Mehdi</span>{" "}
                for putting together such an amazing course and a wonderful
                learning experience.I hope to continue with the community and
                contribute learning experience as{" "}
                <span className="spancontainer">Glorious Mindmine</span> Alumni.
              </p>
              <p>12:45 PM, 14th Feb</p>
            </div>
            <div className="col-12 col-md-4 card reviewsbottomcard reviewsborder shadow">
              <h1 className="reviewsheading">Rajesh Patel</h1>
              <p className="reviewspara text-center">
                Data Scientist At Decision Point Analytics
              </p>
              <p>
                Hello connections! I’m happy to share that I’ve joined Decision
                Point Analytics as a Data Scientist. I would like to thank Mansi
                T. for a very warm welcome. Thank you{" "}
                <span className="spancontainer">Zeeshan Mehdi</span> for your
                constant support and motivation throughout this learning journey
                of data science at{" "}
                <span className="spancontainer">Glorious Mindmine</span>.
              </p>
              <p>05:00 PM, 16th May</p>
            </div>
            <div className="col-12 col-md-4 card reviewsbottomcard reviewsborder shadow">
              <h1 className="reviewsheading">Pavan Dhongari</h1>
              <p className="reviewspara text-center">
                Data Analytics Consultant At Logic Pursuits
              </p>
              <p>
                Hello All, I’m happy to share that I’m starting a new position
                as Data Analytics Consultant at Logic Pursuits! Thanks to{" "}
                <span className="spancontainer">Glorious Mindmine</span> team
                for helping me in my career transition.
              </p>
              <p>06:00 PM, 11th Apr</p>
            </div>
            <div className="col-12 col-md-4 card reviewsbottomcard reviewsborder shadow">
              <h1 className="reviewsheading">Harish Kollana</h1>
              <p className="reviewspara text-center">
                Data Analyst At Awesome Analytics
              </p>
              <p>
                I have some exciting news to share! I have accepted a new
                position as the Data Analyst for Awesome Analytics. It has been
                a fruitful process, and I could not have done it without the
                learnings from{" "}
                <span className="spancontainer">Glorious Mindmine</span>. I am
                very excited to start this new journey
              </p>
              <p>07:15 PM, 11th Apr</p>
            </div>

            <div className=" col-12  acceleratecontainer acceleratebox">
              <div className="col-md-8">
                <p className="startpara ">
                  Glorious Mindmine’s curriculum is the best curriculum
                  available online. Glorious Mindmine’s program is engaging,
                  comprehensive, and student-centered. If you’re serious about
                  accelerating your tech career, you cannot ask for a better
                  platform than Glorious Mindmine.
                </p>
              </div>
              <div className=" card accelerateinside col-md-4">
                <p className="startblackheading">
                  Fast forward your career in tech with Glorious Mindmine
                </p>
                <button className="join-button">Explore Courses</button>
              </div>
            </div>
            <div className="col-12  backimagecontainer d-flex flex-column justify-content-center align-items-center mt-3">
              <h1>Accelerate with the Glorious Mindmine Community.</h1>
              <p className="reviewspara">
                Explore, network, and grow with the community of most passionate
                tech folks.
              </p>
              <button className="join-button">Explore Courses</button>
            </div>
          </div>
        </div>
        < Footer/>
      </>
    );
  }
}

export default Home;