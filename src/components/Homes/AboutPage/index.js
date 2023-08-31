import React from 'react';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Headers';
import Footer from '../Footer';
import aboutus1 from "../../Images/aboutus1.jpg"
import aboutus2 from "../../Images/aboutus2.jpg"




export default function About() {
  return (
    <>
    <Header/>
    {/* 
    <div className="About-us-main-container">
    <div className="flip-card" tabIndex="0">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3 className="About-page-why-choose-us-heading">Why Choose us?</h3>
          <div>
            <img src="https://freepngimg.com/thumb/facebook/72547-thinking-photography-question-mark-man-stock.png" alt="" className="Aboutus-question-image"/>
          </div>
        </div>
        <div className="flip-card-back">
          <li className="about-item-description">
            We bring more than 11 years of collective experience and ready access to our knowledge base.
          </li>
          <li className="about-item-description">
            We believe that Glorious Mindmine is there for business and organizational success.
            Therefore, we focus more on understanding the business of our clients and aligning our
            services accordingly through effective communication and soft skills.
          </li>
        </div>
      </div>
    </div>
    <div className="flip-card" tabIndex="0">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3 className="About-page-why-choose-us-heading">Wide Range of Courses</h3>
          <div>
            <img src="https://jobstraining.es/wp-content/uploads/2020/06/curso.png" alt="" className="Aboutus-question-image"/>
          </div>
        </div>
        <div className="flip-card-back">
          <li className="about-item">Full Stack Development</li>
          <li className="about-item">Data Science</li>
          <li className="about-item">Sales Force Admin</li>
          <li className="about-item">Mendix</li>
          <li className="about-item">Polarion</li>
          <li className="about-item">Digital Marketing</li>
          <li className="about-item">English Communication</li>
        </div>
      </div>
    </div>
    
    </div>
    <div className='about-us-founder-section'>
        <h1 className='about-us-founder-section-heading about-journey-heading-underline m-3'>Founder</h1>
        <img src="https://gloriousmindmine.com/wp-content/uploads/2022/02/IMG_1745-2048x1365.jpg" alt="" className='founder-image' />
        <ul className='about-us-founder-section-list'>
            <li className='about-us-founder-section-content'>It was the year 2011 when I resigned from Tech Mahindra and set the foundation elements of Glorious Mindmine.</li>
            <li className='about-us-founder-section-content'>It’s been more than 10 years on this Entrepreneurial Journey, I have personally trained over 80,000 Individuals Which Includes Job Seekers, Chartered Accountants, Corporate Professionals, ISRO Scientists, Indian Army Officers, Doctors, Teachers and Directors of Big Multinational Companies.</li>
            <li className='about-us-founder-section-content'>In last 10 years, I have realized one skill that can shape your future is “Communication” because the moment you open your moth to share your ideas, thoughts and opinions – The world would get to know what kind of a person you are….</li>
            <li className='about-us-founder-section-content'>More than 17 years of corporate experience, 10 years of practical exposure and more than 2 years of research has led to this Dynamic Course – “English Communication Blueprint”. This course has everything starting from the basic level to intermediate and then to expert level.</li>
            <li className='about-us-founder-section-content'>Anyone who can read English Fluently can do this course and master the art of communication in less than 150 Days.</li>
            <li className='about-us-founder-section-content'>This is a 45 Days Full-fledged course with 100 Days Challenge To Make You A Fluent English Speaker. We are on a mission to empower One Million People with the power of communication skills. Let’s take India’s Talent Global By Learning This Global Language.</li>
            <li className='about-us-founder-section-content'>There are thousands of Success Stories Of Glorious Mindmine. People from Non-English Medium Background After Taking This Course Have Experienced A Significant Amount of Change within 45 Days and Then 100 Days challenge has helped them to become Effective English Communicators.</li>
            <li className='about-us-founder-section-content'>After completing the course people have got the JOBS, they started doing there JOB WELL, Started Growing Professionally, Were able to Expand Their Business and Most Important Of All They Were able to Express Their Ideas In the Way They Want It To be Understood.</li>
            <li className='about-us-founder-section-content'>The Essence of Communication is not only to learn Grammar, Vocabulary And Flow Of Sentences But It Is To Connect With People. Imagine if we are able to express our ideas, opinions and thoughts in the way that we want it to be understood then there would be no confusion. There will be clarity in our communication. Clarity will lead us to VICTORY.</li>
            <li className='about-us-founder-section-content'>My Dynamic Methods & Techniques Will Help You To Speak English Fluently With Confidence.</li>
            <li className='about-us-founder-section-content'>Few Of My Past Students Have Started To See Incredible Growth In Their Professional Career.</li>
            <li className='about-us-founder-section-content'>See, The Truth Is, You Could Be That Someone Who Can Inspire People & Influence With The Power Of Your Communication Skills. </li>
            <li className='about-us-founder-section-content' style={{textAlign:"center"}}><span className='about-us-content-span'>“The People Who Can Take Actions Are The Ones Who Get Results”</span> – Zeeshaan Mehdi</li>
        </ul>
      </div> */}




    {/*<div className="about-container m-5">
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
            <li className='about-us-founder-section-content'>More than 17 years of corporate experience, 10 years of practical exposure and more than 2 years of research has led to this Dynamic Course – “English Communication Blueprint”. This course has everything starting from the basic level to intermediate and then to expert level.</li>
            <li className='about-us-founder-section-content'>Anyone who can read English Fluently can do this course and master the art of communication in less than 150 Days.</li>
            <li className='about-us-founder-section-content'>This is a 45 Days Full-fledged course with 100 Days Challenge To Make You A Fluent English Speaker. We are on a mission to empower One Million People with the power of communication skills. Let’s take India’s Talent Global By Learning This Global Language.</li>
            <li className='about-us-founder-section-content'>There are thousands of Success Stories Of Glorious Mindmine. People from Non-English Medium Background After Taking This Course Have Experienced A Significant Amount of Change within 45 Days and Then 100 Days challenge has helped them to become Effective English Communicators.</li>
            <li className='about-us-founder-section-content'>After completing the course people have got the JOBS, they started doing there JOB WELL, Started Growing Professionally, Were able to Expand Their Business and Most Important Of All They Were able to Express Their Ideas In the Way They Want It To be Understood.</li>
            <li className='about-us-founder-section-content'>The Essence of Communication is not only to learn Grammar, Vocabulary And Flow Of Sentences But It Is To Connect With People. Imagine if we are able to express our ideas, opinions and thoughts in the way that we want it to be understood then there would be no confusion. There will be clarity in our communication. Clarity will lead us to VICTORY.</li>
            <li className='about-us-founder-section-content'>My Dynamic Methods & Techniques Will Help You To Speak English Fluently With Confidence.</li>
            <li className='about-us-founder-section-content'>Few Of My Past Students Have Started To See Incredible Growth In Their Professional Career.</li>
            <li className='about-us-founder-section-content'>See, The Truth Is, You Could Be That Someone Who Can Inspire People & Influence With The Power Of Your Communication Skills. </li>
            <li className='about-us-founder-section-content' style={{textAlign:"center"}}><span className='about-us-content-span'>“The People Who Can Take Actions Are The Ones Who Get Results”</span> – Zeeshaan Mehdi</li>
        </ul>
      </div>
  </div>*/}

  <div className="aboutus-page-main-container">
    <div className='aboutus-page-banner-container'>
      <div className='aboutus-page-banner-content-container'>
        <h1 className='aboutus-page-banner-container-heading'>About us</h1>
        <p className='aboutus-page-banner-container-content'>Welcome to Glorious Mindmine, a leading coaching institute dedicated to exceptional education and personalized guidance. Our mission is to shape futures by nurturing talent, fostering academic excellence, and empowering students to achieve their dreams.</p>
        <p className='aboutus-page-banner-container-content'>Our journey in the world of education is a testament to our unwavering passion and commitment to the success of our students.</p>
        <p className='aboutus-page-banner-container-content'>For over a decade, we've taken part in the growth journeys of over 80,000 individuals. This diverse group encompasses job seekers, chartered accountants, corporate executives, ISRO scientists, Indian Army officers, medical professionals, educators, and top-tier multinational company leaders</p>
    </div>
    <img className='aboutus-page-banner-container-image' src={aboutus1} alt="" />
    </div>
    <div className='aboutus-page-banner-container-2 '>
      <img className='aboutus-page-banner-container-image-2' src={aboutus2} alt="" />
      <div className='aboutus-page-banner-content-container-2'>
        <h1 className='aboutus-page-banner-container-heading'> Our Mission:</h1>
        <p className='aboutus-page-banner-container-content'>At Glorious Mindmine, our mission is to provide top-tier coaching that goes beyond conventional education. We aspire to empower students with not only knowledge but also the skills and confidence needed to thrive in an ever-evolving world</p>
        <p className="aboutus-page-banner-container-content">Our aim is to create a learning environment that encourages curiosity, critical thinking, and holistic development.</p>
      </div>
    </div>
  <div>
    <h1 className="about-us-why-choose-glorious-heading">Why Choose Glorious Mindmine?</h1>
    <ul className="about-us-why-choose-glorious-description-container">
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Expert Faculty:</span>  Our team of experienced and knowledgeable educators are experts in their respective fields. They are not only dedicated to teaching but also to mentoring and guiding students throughout their course period of time. </li>
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Comprehensive Programs:</span>  We offer a range of comprehensive programs designed to cater to various academic goals. Whether you're preparing for competitive exams, school/board exams, or seeking to enhance your skills, we have tailored programs to meet your needs. </li>
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Personalized Approach:</span>  We recognize that each student is unique. Our personalized approach to teaching ensures that every student receives the attention and support they require to excel. We identify strengths and areas of improvement, working together to achieve the best results. </li>
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Cutting-Edge Resources:</span>  Our institute is equipped with state-of-the-art facilities and resources that aid effective learning. From modern classrooms to advanced study materials, we provide an environment that promotes effective learning.</li>
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Proven Track Record:</span>  Over the years, we have helped countless students achieve remarkable academic success. Our alumni have gone on to excel in various fields, which stands as a testament to the quality of education we provide.</li>
    </ul>
  </div>
  <div>
    <h1 className="about-us-why-choose-glorious-heading">Our Values</h1>
    <ul className="about-us-why-choose-glorious-description-container">
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Excellence:</span>  We strive for excellence in all aspects of education and student support. Our commitment to quality is reflected in our results and the success of our students. </li>
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Integrity:</span>  We uphold the highest standards of integrity, honesty, and ethics in all our interactions. We believe in fostering a culture of trust and respect.</li>
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Innovation:</span>  Education is a dynamic field, and we continuously innovate our teaching methods and approaches to provide the best learning experience.</li>
      <li className="about-us-why-choose-glorious-description"><span className="about-us-why-choose-glorious-sub-heading">Empowerment:</span>   Beyond academics, we aim to empower our students with the skills and mindset necessary to overcome challenges and seize opportunities. </li>
    </ul>
  </div>
  <div className='aboutus-page-banner-container'>
    <img className='aboutus-page-banner-container-image' src="https://www.poynter.org/wp-content/uploads/2022/04/shutterstock_1283029945.png" alt="" />
    <div className='aboutus-page-banner-content-container'>
    <p className='aboutus-page-banner-container-content'>We believe in giving back to society and nurturing a sense of responsibility among our students. Through various community engagement initiatives, we encourage students to become socially aware and active contributors to their communities. </p>
        <p className='aboutus-page-banner-container-content'>Join us at Glorious Mindmine and embark on a journey of educational growth, personal development, and unparalleled success. Together, let's create a brighter future! </p>
  
    </div>
  </div>
  <h5 className="about-us-last-message">Feel free to visit us during our office hours to learn more about our programs and how we can help you achieve your academic goals. Your success starts here at Glorious Mindmine. </h5>
  </div>




    <Footer/>
    </>
  );
}