import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import {Link} from "react-router-dom"
import CarouselCard from "../CarouselCard"
import ieltspic5 from '../../../Images/ieltspic5.png';
import ieltspic6 from '../../../Images/ieltspic6.png';
import ieltspic7 from '../../../Images/ieltspic7.png';
import ieltspic8 from '../../../Images/ieltspic8.png';
import ieltspic9 from '../../../Images/ieltspic9.png';
import ieltspic10 from '../../../Images/ieltspic10.png';
import ReactPlayer from 'react-player';
import australia from '../../../Images/australia2.png';
import canada from '../../../Images/canada2.png';
import usa from '../../../Images/usa.png';
import united from '../../../Images/united.png';
import newzee from '../../../Images/newzee.png';
//import lastsection from '../../../Images/lastsection.png';
import Header from "../../../Homes/Headers"
import Footer from "../../../Homes/Footer"

import ielts1 from "../../../Images/ielts1.png"
import ielts2 from "../../../Images/ielts2.png"
import ielts3 from "../../../Images/ielts3.png"
import ielts4 from "../../../Images/ielts4.png"

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true
  };


  const CarouselList=[
    {id:1,head:"Expert Guidance and Comprehensive Training",text:"Trained educators who understand the IELTS exam format, requirements, and effective strategies.",Image:ielts1},
    {id:2,head:"Proven Track Record of Success",text:"High Success Rate: Showcase impressive past results, with students achieving their target scores.",Image:ielts4},
    {id:3,head:"Holistic Approach to Language Development",text:"Enhance language skills through varied exercises, text analysis, and targeted lessons for improved comprehension and communication.",Image:ielts3},
    {id:4,head:"Personalized Attention and Support",text:"Specific feedback on strengths and areas needing improvement to foster continuous growth.",Image:ielts1},
    {id:5,head:"Comprehensive Resource Materials",text:"Provide a wide range of resources including practice tests, sample essays, vocabulary lists, and more.",Image:ielts2}
  ]

const Ielts = () => {

    return (
      <>
      <Header />
      <div>
          <Slider {...settings} className="carousel-slider-home">
            {CarouselList.map(each=>(<CarouselCard key={each.id} cardDetails={each} />))}
          </Slider>
          <div className='ielts-grey-part-container'>
            <div className="grey-first-part">
                    <ReactPlayer width="100%" height="100%" url="https://www.youtube.com/watch?v=vWEbQaoRepo" controls />
                   
            </div>
            <div className='grey-second-half'>
              <h1 className='Carousal-card-heading-first-ielts-grey'>What is IELTS?</h1>
              <p className='grey-card-second-part-para'>The International English Language Testing System (IELTS) is a mandatory examination for university admission in numerous countries such as Australia, Canada, New Zealand, the UK, and the USA. </p>
              <div className='grey-container-for-buttons'>
                <Link to="/what-is-ielts"><button className='Carousal-card-button-ielts-grey-white'>Learn more about the test</button> </Link>
                <button className='Carousal-card-button-ielts-grey'>Who accepts IELTS scores?</button>
              </div>
            </div>

          </div>
          <div className='ielts-card-third-section'>
            <div className='ielts-card-third-sub-section'>
              <img className='ielts-pic-size' src={ieltspic7} alt=""/>
              <h1 className='ielts-third-heading'>IELTS for study</h1>
              <p className='ielts-third-para'>IELTS is recognised by more than 11,000 education and training providers worldwide.</p>
            </div>
            <div className='ielts-card-third-sub-section'>
              <img className='ielts-pic-size' src={ieltspic6} alt=""/>
              <h1 className='ielts-third-heading'>IELTS for Migration</h1>
              <p className='ielts-third-para'>Take IELTS to migrate to Australia, Canada, New Zealand and the UK.</p>
            </div>
            <div className='ielts-card-third-sub-section'>
              <img className='ielts-pic-size' src={ieltspic5} alt=""/>
              <h1 className='ielts-third-heading'>IELTS for Work</h1>
              <p className='ielts-third-para'>Organisations around the world rely on IELTS to help them select the right people.</p>
            </div>
          </div>
          <div className='ielts-card-fourth-section'>
            <div className='ielts-fourth-section-card'>
              <img src={ieltspic8} alt="" className="ielts-fourth-image"/>
              <p className='ielts-fourth-heading'>CONSULTATION & ASSESSMENT</p>
              <p className='ielts-fourth-heading-sub'>Are you looking to broaden your horizons and explore international academic or career opportunities? The International English Language Testing System (IELTS) is your passport to success. At Glorious Mindmine, we offer comprehensive IELTS consultation services to guide you on your journey to achieving exceptional scores. </p>
              {/* <p className='ielts-fourth-heading-sub-red'>Ensuring quality and fairness</p> */}
            </div>
            <div className='ielts-fourth-section-card'>
              <img src={ieltspic9} alt="" className="ielts-fourth-image"/>
              <p className='ielts-fourth-heading'>ADMISSION & TRAINING</p>
              <p className='ielts-fourth-heading-sub'>Once you have gone through assessment, Our team will reach out to you for a consultation. This conversation allows us to discuss your objectives, address any questions you have, and provide you with insights into our program. </p>
              {/* <p className='ielts-fourth-heading-sub-red'>Ensuring quality and fairness</p> */}
            </div>
            <div className='ielts-fourth-section-card'>
              <img src={ieltspic10} alt=""className="ielts-fourth-image"/>
              <p className='ielts-fourth-heading'>EXAMINATION</p>
              <p className='ielts-fourth-heading-sub'>Make your payment for the test . You have the option to pay for the test using our online registration system with a bank card, or you can choose to pay through a bank transfer. </p>
              {/* <p className='ielts-fourth-heading-sub-red'>Ensuring quality and fairness</p> */}
            </div>
          </div>
          <h1 className='Carousal-card-heading-fifth-ielts'>Where can IELTS take you</h1>
           <div className='ielts-card-third-section'>
            <div>
              <img className='ielts-pic-size-states' src= {australia} alt=""/>
              <p className='ielts-fourth-heading'>Australia</p>
            </div>
            <div>
              <img className='ielts-pic-size-states' src= {canada} alt=""/>
              <p className='ielts-fourth-heading'>Canada</p>
            </div>
            <div>
              <img className='ielts-pic-size-states' src= {newzee} alt=""/>
              <p className='ielts-fourth-heading'>New-Zealand</p>
            </div>
            <div>
              <img className='ielts-pic-size-states' src= {united} alt=""/>
              <p className='ielts-fourth-heading'>United-Kingdom</p>
            </div>
            <div>
              <img className='ielts-pic-size-states' src= {usa} alt=""/>
              <p className='ielts-fourth-heading'>United States</p>
            </div>
          </div> 
          {/* <div className='ielts-two-circle-images'>
            <div className='ielts-Carousel-card-right-image1'>
              <h1 className='ielts-circle-heading'>Are you a teacher?</h1>
              <p className='ielts-circle-paragraph'>We have resources for you!</p>
              <button className='ielts-button-circle'>Learn more</button>
            </div>
            <div className='ielts-Carousel-card-right-image2'>
            <h1 className='ielts-circle-heading'>Are you a researcher??</h1>
              <p className='ielts-circle-paragraph'>Check out our research reports!</p>
              <button className='ielts-button-circle'>Learn more</button>
            </div>
          </div> */}
          <div className='ielts-card-last-section'>
            <div className='ielts-card-last-section-sub'>
              <h1 className='ielts-third-heading-last-section'>IELTS is No.1 For Language Skills Verfication</h1>
              <Link style={{textDecoration:"none"}} to="/ielts-score"><button className='Carousal-card-button-ielts-grey-white-score'>Why accept IELTS scores ?</button></Link>
            </div>
            <img  className="last-section-ielts" src={ielts3} alt=""/>

          </div>
      </div>
      <Footer />
      </>

  );
};

export default Ielts;