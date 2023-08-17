import React from 'react';
import logo1 from "../Images/banner.jpeg";
import "./index.css";
import img2 from "../Images/cardphoto.jpg";

import Header from '../Homes/Headers';
import Footer from '../Homes/Footer';
import {BsArrowDown} from 'react-icons/bs'

const SuccessStory = () => {
  const reviewsList = [
    {
      name: "Vashni Roy",
      description: "Junior Developer",
      previousCompany: "Accenture",
      currentRole: "Senior Developer",
      previousCompany2: "Cognizant",
    },
    {
      name: "Akhila",
      description: "Non-Technical",
      previousCompany: "Cognizant",
      currentRole: "Data Analyst",
      previousCompany2: "Google",
    },
    // Add six more testimonials here
    {
      name: "Sai Charan",
      description: "Experienced software engineer with a passion for creating innovative solutions.",
      previousCompany: "Tech Innovators Inc.",
      currentRole: "Full Stack Developer",
      previousCompany2: "Capgemini",
    },
    {
      name: "Triveni",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Wipro",
      currentRole: "Sales force admin ",
      previousCompany2: "Wipro",
    },
    {
      name: "Umar",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "LGS",
      currentRole: "Polarian Developer",
      previousCompany2: "LGS",
    },
    {
      name: "Nagesh",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Genpact",
      currentRole: "Digital Marketing Specialist",
      previousCompany2: "Genpact",
    },
    
    {
      name: "Venu",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "LGS",
      currentRole: "Mendix Developer",
      previousCompany2: "LGS",
    },
    {
      name: "Chandana",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "LGS",
      currentRole: "Data Scientist",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Prashanth",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "LGS",
      currentRole: "software Engineer",
      previousCompany2: "ABC Marketing Solutions",
    },
    
  ];

  return (
        <>
        <Header/>
        <div>
          <div className="alumni-banner">
            <div className="alumni-banner-content">
              <h3 className="alumini-text">Inspiring stories of success from our learners</h3>
              <p className='alumini-para'>Pick from our pool of qualified & pre-trained candidates. Increase your interview-to-offer ratio.</p>
              {/*<div className="alumni-banner-btns">
              <button class="alumni-banner__btn " data-event-type="View Career Transitions" data-title="Alumni Banner" data-tab-id="tab-career-transition">Explore Career Transitions</button>
              <button class="alumni-banner__btn " data-event-type="Watch Success Stories" data-title="Alumni Banner" data-tab-id="tab-success-stories">View Testimonials</button>
              </div>*/}
            </div>
            <div className="alum-banner-image">
              <img src={logo1} alt="Logo" />
        </div>
          </div>
      <div >
        <ul className="success-story-testimonial-container">
          {reviewsList.map((each, index) => (
            <li key={index} className="success-story-testimonial-each-list">
                <img className="success-story-testimonial-image" src={img2} alt="Profile" />
                <p className="success-story-testimonial-name">{each.name}</p>
                <p className="success-story-testimonial-previous-role">{each.currentRole}</p>
                <BsArrowDown className="success-story-testimonial-icon"/>
                <p className="success-story-testimonial-current-role">{each.previousCompany}</p>
                <img src="https://quantis.com/wp-content/uploads/2021/05/capgemini_logo_color_rgb.png" className="success-story-testimonial-company-image" alt=""/>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
  


};

export default SuccessStory;