import React from 'react';
import logo1 from "../../Images/banner.jpeg";
import "./index.css";
import img2 from "../../Images/cardphoto.jpg";

import Header from '../Headers';
import Footer from '../Footer';
import {BsArrowDown} from 'react-icons/bs'

const SuccessStory = () => {
  const reviewsList = [
    {
      name: "Harsh Bhatnagar",
      description: "Cloud Computing",
      previousCompany: "Barclays Capital",
      currentRole: "Vice President- Engineering Manager",
      previousCompany2: "Wells Fargo",
    },
    {
      name: "Pankhuri",
      description: "Cyber Security",
      previousCompany: "Amazon Web Services (AWS)",
      currentRole: "Sr. Technical Account Manager",
      previousCompany2: "Google",
    },
    // Add six more testimonials here
    {
      name: "John Doe",
      description: "Experienced software engineer with a passion for creating innovative solutions.",
      previousCompany: "Tech Innovators Inc.",
      currentRole: "Senior Software Engineer",
      previousCompany2: "XYZ Tech Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    {
      name: "Jane Smith",
      description: "Marketing professional with expertise in brand strategy and digital marketing.",
      previousCompany: "Global Marketing Agency",
      currentRole: "Senior Marketing Manager",
      previousCompany2: "ABC Marketing Solutions",
    },
    
    
    // Add four more testimonials following a similar pattern
    // Testimonial 3 data
    // Testimonial 4 data
    // Testimonial 5 data
    // Testimonial 6 data
  ];

  return (
        <>
        <Header/>
        <div>
          <div className="alumni-banner">
            <div className="alumni-banner-content">
              <h1 className="alumini-text">Inspiring stories of success from our learners</h1>
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