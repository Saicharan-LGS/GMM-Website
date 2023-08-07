import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Slider from 'react-slick';
//import { AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';
import Footer from "../Footer"
import Header from "../Headers";
import FirstTimePopup from "../FirstTimePopup";
import HomeBannerCarousel from "../HomeCarousel"
import image8 from "../../Images/8.png"
import {TiTick} from 'react-icons/ti'
import {AiFillStar} from 'react-icons/ai'
import image1 from "../../Images/image-2.jpg"
import image2 from "../../Images/image1.png"
import world from "../../Images/world.png"
import SuccessCarousel from '../SuccessCarousel';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay:true
};


const slidesData = [
  {
    overline: 'Earn your Masters abroad',
    title: 'Study in the United States at 1/3rd the cost',
    subtitle: 'Spend a year in the US and get 3 year post-study work visa.',
    buttonText: 'Explore programs',
    image: 'https://example.com/slide-1-image.jpg', // Replace with your image URL
  },
  {
    overline: 'Learn with',
    title: 'India’s trusted education platform',
    subtitle: 'Power ahead in your career with certified courses & degrees from world class universities.',
    buttonText: 'Explore programs',
    image: 'https://example.com/slide-2-image.jpg', // Replace with your image URL
  },
  // Add more slides as needed
];
const bannerRender = [
  "8.2 Million+ learners globally",
  'Awarded The "Best Corporate training platform,2023"',
  "45000+ employed upskilled"
];

const mediaData=[
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},

]

const awardsData=[
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/entrepreneur-india-85ebb7e3c9d9ee92b054003fc26e55961a6749c5600122ab39c5ed8853fbc5ec.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/franchise-india-logo-1235c8c56282d461daedcf31fab142213b925c11d3515bcf62553b16183c5d2b.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/entrepreneur-india-85ebb7e3c9d9ee92b054003fc26e55961a6749c5600122ab39c5ed8853fbc5ec.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/edtech-review-ee1df5ed298be62500550dfccd7a3611ba1e00f8853049faf42816db56649693.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/analytics-india-819a9661623205762d9a1b6669567381039a966d085dc03175d81dea039d912b.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
  {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},

]

const SuccessCarouselList=[
  {id:0,title:"Do Whatever It Takes To Get The Job Done", text1:"In a very under developed area of Hyderabad, there lived a determined and resilient young girl named Rasheeda Shaik. At a very early age, she faced a life-altering accident that resulted in her left leg being amputated below the knee. Despite this challenging setback, Rasheeda's indomitable spirit and unyielding determination pushed her to overcome every obstacle that life threw her way.",
  text2:"Rasheeda was the eldest daughter in a family of seven, with one brother and four sisters. Life was tough for her and her family every day, but she never let her circumstances define her. From a young age, Rasheeda knew she had to fight her battles and rise above her limitations. "},
  {id:1,title:""}
]
const Home  =()=>{

  const [currentIndex, setCurrentIndex] = useState(0);
  // State to keep track of the current page index
const [currentPage, setCurrentPage] = useState(0);
const [awardsCurrentPage, setAwardsCurrentPage] = useState(0);
const awardsCardsPerPage = 5; // Number of cards to display per page

const cardsPerPage = 5; // Number of cards to display per page

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerRender.length);
      }, 3000);

      return () => clearInterval(interval);
  }, []);

  const handleNextClick = () => {
      const totalCards = mediaData.length;
      const maxPage = Math.ceil(totalCards / cardsPerPage) - 1;
      const nextPage = Math.min(currentPage + 1, maxPage);
      setCurrentPage(nextPage);
    };
    
    // Function to handle the click of the "Prev" button
    const handlePrevClick = () => {
      const prevPage = Math.max(currentPage - 1, 0);
      setCurrentPage(prevPage);
    };

    const handleAwardsNextClick = () => {
      const totalAwardsCards = awardsData.length;
      const maxAwardsPage = Math.ceil(totalAwardsCards / awardsCardsPerPage) - 1;
      const nextAwardsPage = Math.min(awardsCurrentPage + 1, maxAwardsPage);
      setAwardsCurrentPage(nextAwardsPage);
    };
    
    const handleAwardsPrevClick = () => {
      const prevAwardsPage = Math.max(awardsCurrentPage - 1, 0);
      setAwardsCurrentPage(prevAwardsPage);
    };
    
    return (
      <>
        <Header/>
        <HomeBannerCarousel className="homeCarousel" slides={slidesData} />
        <div>
          <h1 className="why-choose-glorious-couse">Why choose GloriousMindmine?</h1>
          <div className="home-section-service-container">
            <div className="home-section-service-image-container">
              <img src={image8} alt="" className="home-section-service-image"/>
            </div>
            <div className="home-section-right-side-container">
              <h3 className="home-section-service-heading">Get Personalized Guidance</h3>
              <p className="home-section-service-description">Weekly mentorship sessions with Industry Experts along with Personalized attention in small groups of 5-15 learners. Gain hands-on exposure through industry-relevant projects</p>
              <div className="home-section-service-stats-container">
                  <div className="home-section-service-stats-item">
                    <div className="home-section-service-stats-icon-container">
                      <TiTick className="home-section-service-stats-icon"/>
                    </div>
                    <div>
                      <p className="home-section-service-stats-title">1,00,000+</p>
                      <p className="home-section-service-stats-subtitle">Mentorship Sessions Completed</p>
                    </div>
                  </div>
                  <div className="home-section-service-stats-item">
                    <div className="home-section-service-stats-icon-container">
                      <AiFillStar className="home-section-service-stats-star"/>
                    </div>
                    <div>
                      <p className="home-section-service-stats-title">4.7/5</p>
                      <p className="home-section-service-stats-subtitle">Mentorship Sessions Completed</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="home-section-service-container-2">
            <div className="home-section-service-image-container">
              <img src={image2} alt="" className="home-section-service-image"/>
            </div>
            <div className="home-section-right-side-container">
              <h3 className="home-section-service-heading">GL Excelerate Dedicated Career Support</h3>
              <p className="home-section-service-description">We offer mock interviews to prep for your dream job. Participate in hackathons and career fairs to stay ahead of others.</p>
              <div className="home-section-service-stats-container">
                  <div className="home-section-service-stats-item">
                    <div className="home-section-service-stats-icon-container">
                      <TiTick className="home-section-service-stats-icon"/>
                    </div>
                    <div>
                      <p className="home-section-service-stats-title">66%</p>
                      <p className="home-section-service-stats-subtitle">Alumni Career Transitions</p>
                    </div>
                  </div>
                  <div className="home-section-service-stats-item">
                    <div className="home-section-service-stats-icon-container">
                      <AiFillStar className="home-section-service-stats-star"/>
                    </div>
                    <div>
                      <p className="home-section-service-stats-title">2800+</p>
                      <p className="home-section-service-stats-subtitle">Hiring Companies</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="home-section-service-container">
            <div className="home-section-service-image-container">
              <img src={image1} alt="" className="home-section-service-image"/>
            </div>
            <div className="home-section-right-side-container">
              <h3 className="home-section-service-heading">Networking and Program Support</h3>
              <p className="home-section-service-description">Grow your professional network with peer interactions, sessions with industry leaders, and get access to a dedicated program manager to solve your queries.</p>
              <div className="home-section-service-stats-container">
                  <div className="home-section-service-stats-item">
                    <div className="home-section-service-stats-icon-container">
                      <TiTick className="home-section-service-stats-icon"/>
                    </div>
                    <div className="home-section-service-stats-title-container">
                      <p className="home-section-service-stats-title">1:1</p>
                      <p className="home-section-service-stats-subtitle">Program support</p>
                    </div>
                  </div>
                  <div className="home-section-service-stats-item">
                    <div className="home-section-service-stats-icon-container">
                      <AiFillStar className="home-section-service-stats-star"/>
                    </div>
                    <div className="home-section-service-stats-title-container">
                      <p className="home-section-service-stats-title">4.8/5</p>
                      <p className="home-section-service-stats-subtitle">Average Support Rating</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="world-container">
            <p>Providing online education for</p>
            <h1>Learners across 170+ countries</h1>
            <img className="world-image" src={world}  alt=""/>
          </div>
          <div className="home-section-explore-courses-section">
            <div className="home-section-explore-courses-section1">
              <h1 className="home-section-explore-courses-heading">Explore courses</h1>
              <p className="home-section-explore-courses-text">1000+ Free Courses, Live Sessions by Experts, and Job Opportunities from 2800+ Companies. Join 1 Crore+ learners to build your dream career now!</p>
              <button className="home-section-explore-courses-button">Explore Now</button>
            </div>
            <div className="home-section-explore-courses-section2">
              <img className="home-section-explore-courses-image" alt="" src="https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new-variant/academy-banner-v1-697ad3ee2d4ffaed9372bda882c0e4dccc4dc321e310a02f9f1e1c213b391eb6.png" />
            </div>
          </div>
          <div className="home-section-success-stories-container">
            <p className="home-section-success-stories-text">Inspiring everyone to learn with</p>
            <h1 className="home-section-sucesss-stories-heading">Multiple stories of growth</h1>
            <p className="home-section-success-stories-description">Find out how our Learners transformed their careers after learning with us.</p>
            <button className="home-section-sucess-stories-button">Get Inspired</button>
          </div>
          <div>
          <Slider {...settings} className="carousel-slider-home">
            {SuccessCarouselList.map(each=>(<SuccessCarousel key={each.id} cardDetails={each} />))}
          </Slider>
          </div>
          <div className="home-section-transformed-careers-container">
            <div className="home-section-transformed-careers-container1">
                <h1 className="home-section-transformed-careers-heading">66% of our learners transformed their careers</h1>
                <p className="home-section-transformed-careers-text">Alumni Career Transitions in the industry for degree & PG programs</p>
            </div>
            <div>
              <button className="home-section-transformed-careers-buttton">Download Carrer Report</button>
            </div>
          </div>
          {/* <div className='enterprise-media-section-container'>
                <p className='enterprise-business-section-subtitle'>Featured In</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 className='enterprise-business-section-title'>Media Spotlight</h1>
                <div className='enterprise-business-section-button-conatiner'>
                    {currentPage > 0 && (
                        <button className='enterprise-business-section-button-conatiner-button' onClick={handlePrevClick}><AiOutlineArrowLeft color='blue'  size={52}/></button>
                    )}
                    {currentPage < Math.ceil(mediaData.length / cardsPerPage) - 1 && (
                        <button className='enterprise-business-section-button-conatiner-button' onClick={handleNextClick}><AiOutlineArrowRight color='blue' size={52}/></button>
                    )}
                </div>
                </div>
                <div className='enterprise-media-section-cards-container'>
                    {mediaData
                        .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
                        .map((media, index) => (
                        <div key={index} className={`enterprise-media-section-container-card`}>
                            <img className='enterprise-media-section-container-card-image' src={media.image} alt='' />
                            <p className='enterprise-media-section-container-card-content'>{media.content}</p>
                            <p className='enterprise-media-section-container-card-date'>{media.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='enterprise-awards-section-container'>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 className='enterprise-business-section-title'>Awards and Recognitions</h1>
                <div className='enterprise-business-section-button-conatiner'>
                    {awardsCurrentPage > 0 && (
                    <button className='enterprise-business-section-button-conatiner-button' onClick={handleAwardsPrevClick}>
                        <AiOutlineArrowLeft color='blue' size={52} />
                    </button>
                    )}
                    {awardsCurrentPage < Math.ceil(awardsData.length / awardsCardsPerPage) - 1 && (
                    <button className='enterprise-business-section-button-conatiner-button' onClick={handleAwardsNextClick}>
                        <AiOutlineArrowRight color='blue' size={52} />
                    </button>
                    )}
                </div>
                </div>
                <div className='enterprise-media-section-cards-container'>
                    {awardsData.slice(awardsCurrentPage * awardsCardsPerPage, (awardsCurrentPage + 1) * awardsCardsPerPage).map((award, index) => (
                    <div key={index} className={`enterprise-media-section-container-card`}>
                        <img className='enterprise-awards-section-container-card-image' src={award.image} alt='' />
                        <p className='enterprise-media-section-container-card-content'>{award.content}</p>
                        <p className='enterprise-media-section-container-card-date'>{award.date}</p>
                    </div>
                    ))}
                </div>
            </div> */}
            <div className="home-section-transformed-careers-container">
            <div className="home-section-transformed-careers-container1">
              <p className="home-section-transformed-carrers-text1">Got more questions?</p>
                <h1 className="home-section-transformed-careers-heading">Talk to our team directly.</h1>
                <p className="home-section-transformed-careers-text">A program advisor will get in touch with you shortly.</p>
            </div>
            <div>
              <button className="home-section-transformed-careers-buttton">Contact Us</button>
            </div>
          </div>
        </div>
      < Footer/>
      <FirstTimePopup/>
      </>
  );
}

export default Home;