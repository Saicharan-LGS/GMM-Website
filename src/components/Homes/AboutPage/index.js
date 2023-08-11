import React from 'react';
import "./index.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Headers';
import Footer from '../Footer';

export default function About() {
  return (
    <>
    <Header/>
    <div className="about-container m-5">
      <div className="about-section card shadow">
        <h1 className="about-heading">Why Choose us?</h1>
        <ul className="about-list">
          <li className="about-item"><AiOutlineArrowRight  className='react-icon-ai'/>
            We bring more than 11 years of collective experience and ready access to our knowledge base.
          </li>
          <li className="about-item"><AiOutlineArrowRight className='react-icon-ai'/>
            We believe that Glorious Mindmine is there for business and organizational success.
            Therefore, we focus more on understanding the business of our clients and aligning our
            services accordingly through effective communication and soft skills.
          </li>
        </ul>
      </div>
      <div className="about-section card shadow ">
        <h1 className="about-heading">Wide Range of Courses</h1>
        <p className='about-us-content'>Glorious Mindmine has the widest range of best software courses available for you. These courses are in different realms/areas of software education and bring to you the skills and knowledge that you need to deliver your best performance to the company where you are hired.</p>
        <p className='about-us-content'> Our courses are in the areas including:</p>
        <ul className="about-list">
          <li className="about-item"><AiOutlineArrowRight className='react-icon-ai'/>Full Stack Development</li>
          <li className="about-item"><AiOutlineArrowRight  className='react-icon-ai'/>Data Science</li>
          <li className="about-item"><AiOutlineArrowRight className='react-icon-ai'/>Sales Force Admin</li>
          <li className="about-item"><AiOutlineArrowRight className='react-icon-ai'/>Mendix</li>
          <li className="about-item"><AiOutlineArrowRight className='react-icon-ai'/>Polarion</li>
          <li className="about-item"><AiOutlineArrowRight className='react-icon-ai'/>Digital Marketing</li>
          <li className="about-item"><AiOutlineArrowRight className='react-icon-ai'/>English Communication</li>
        </ul>
      </div>
      <div className='about-us-founder-section'>
        <h1 className='about-us-founder-section-heading about-journey-heading-underline m-3'>Founder</h1>
        <img src="https://gloriousmindmine.com/wp-content/uploads/2022/02/IMG_1745-2048x1365.jpg" alt="" className='founder-image' />
        <ul className='about-us-founder-section-list'>
            <li className='about-us-founder-section-content'>It was the year 2011 when I resigned from Tech Mahindra and set the foundation elements of Glorious Mindmine.</li>
            <li className='about-us-founder-section-content'>It’s been more than 10 years on this Entrepreneurial Journey, I have personally trained over 80,000 Individuals Which Includes Job Seekers, Chartered Accountants, Corporate Professionals, ISRO Scientists, Indian Army Officers, Doctors, Teachers and Directors of Big Multinational Companies.</li>
            <li className='about-us-founder-section-content'>In last 10 years, I have realized one skill that can shape your future is “Communication” because the moment you open your moth to share your ideas, thoughts and opinions – The world would get to know what kind of a person you are….</li>
            <li className='about-us-founder-section-content'>More than 17 years of corporate experience, 10 years of practical exposure and more than 2 years of reseach has led to this Dynamic Course – “English Communication Bluerpint”. This course has everything starting from the basic level to intermediate and then to expert level.</li>
            <li className='about-us-founder-section-content'>Anyone who can read English Fluently can do this course and master the art of commuication in less than 150 Days.</li>
            <li className='about-us-founder-section-content'>This is a 45 Days Full-fledged course with 100 Days Challenge To Make You A Fluent English Speaker. We are on a mission to empower One Million People with the power of communication skills. Let’s take India’s Talent Global By Learning This Global Language.</li>
            <li className='about-us-founder-section-content'>There are thousands of Success Stories Of Glorious Mindmine. People from Non-English Medium Background After Taking This Course Have Experienced A Significant Amount of Change within 45 Days and Then 100 Days challenge has helped them to become Effective English Communicators.</li>
            <li className='about-us-founder-section-content'>After completing the course people have got the JOBS, they started doing there JOB WELL, Started Growing Professionally, Were able to Expand Their Business and Most Important Of All They Were able to Express Their Ideas In the Way They Want It To be Understood.</li>
            <li className='about-us-founder-section-content'>The Esssence of Communication is not only to learn Grammar, Vocabulary And Flow Of Sentences But It Is To Connect With People. Imagine if we are able to express our ideas, opinions and thoughts in the way that we want it to be understood then there would be no confusion. There will be clarity in our communication. Clarity will lead us to VICTORY.</li>
            <li className='about-us-founder-section-content'>My Dynamic Methods & Techniques Will Help You To Speak English Fluently With Confidence.</li>
            <li className='about-us-founder-section-content'>Few Of My Past Students Have Started To See Incredible Growth In Their Professional Career.</li>
            <li className='about-us-founder-section-content'>See, The Truth Is, You Could Be That Someone Who Can Inspire People & Influence With The Power Of Your Communication Skills. </li>
            <li className='about-us-founder-section-content' style={{textAlign:"center"}}><span className='about-us-content-span'>“The People Who Can Take Actions Are The Ones Who Get Results”</span> – Zeeshaan Mehdi</li>
        </ul>
      </div>
    </div>
        <Footer/>
    </>
  );
}