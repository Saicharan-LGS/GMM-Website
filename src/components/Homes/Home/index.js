import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Slider from 'react-slick';
import {Link} from "react-router-dom"
//import { AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';
import Footer from "../Footer"
import Header from "../Headers";
import FirstTimePopup from "../FirstTimePopup";
import HomeBannerCarousel from "../HomeCarousel"
import image8 from "../../Images/8.png"
import {TiTick} from 'react-icons/ti'
import {AiFillStar} from 'react-icons/ai'
// import image1 from "../../Images/image-2.jpg"
// import image2 from "../../Images/image1.png"
import world from "../../Images/world.png"
import SuccessCarousel from '../SuccessCarousel';
import story1 from "../../Images/story2.png"
import story2 from "../../Images/story1.png"
import story3 from "../../Images/story3.png"
import exploreProgramImage from "../../Images/explore.png"
import Home1 from "../../Images/home1.JPG"
import SocialIcons from "../Socialicons";
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
// const bannerRender = [
//   "8.2 Million+ learners globally",
//   'Awarded The "Best Corporate training platform,2023"',
//   "45000+ employed upskilled"
// ];
// const mediaData=[
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},

// ]

// const awardsData=[
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/entrepreneur-india-85ebb7e3c9d9ee92b054003fc26e55961a6749c5600122ab39c5ed8853fbc5ec.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/franchise-india-logo-1235c8c56282d461daedcf31fab142213b925c11d3515bcf62553b16183c5d2b.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/entrepreneur-india-85ebb7e3c9d9ee92b054003fc26e55961a6749c5600122ab39c5ed8853fbc5ec.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/edtech-review-ee1df5ed298be62500550dfccd7a3611ba1e00f8853049faf42816db56649693.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/analytics-india-819a9661623205762d9a1b6669567381039a966d085dc03175d81dea039d912b.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
//   {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},

// ]

const SuccessCarouselList=[
  {id:0,title:"The People Who Take Actions Are the One’s Who Get Results", text1:"In a very under developed area of Hyderabad, there lived a determined and resilient young girl named Rasheeda Shaik. At a very early age, she faced a life-altering accident that resulted in her left leg being amputated below the knee. ",
  text2:"Rasheeda was the eldest daughter in a family of seven, with one brother and four sisters. Life was tough for her and her family every day, but she never let her circumstances define her. From a young age, Rasheeda knew she had to fight her battles and rise above her limitations. ",
text3:"In her pursuit of excellence, Rasheeda realized that to achieve her dreams and enhance her skills, she needed a supportive and nurturing environment. That's when she came across 'Glorious Mindmine,' an institute dedicated to empowering individuals and honing their talents. Rasheeda joined Glorious Mindmine with the sole purpose of enhancing her skills and securing a job in a multinational company.",
image:story1},
  {id:1,title:"From Sangareddy to the USA: A Journey of Perseverance and Success",
text1:"Couple of years ago in Sangareddy, India, there lived a determined and ambitious young man named Mohammed Imran.Mohammed Imran had a burning desire to improve his life and fulfil his dreams.",
text2:"Through sheer determination and hard work, Mohammed Imran completed the employability skills and IT training courses with flying colors. His passion for learning and his hunger for success set him apart from others.",
text3:"At Tech Mahindra, Mohammed Imran continued to excel, impressing his superiors with his dedication and passion for his work. He quickly climbed the career ladder, taking on more responsibilities and challenges. His journey from Sangareddy to Hyderabad and eventually to Tech Mahindra was an inspiring tale of resilience, hard work, and determination, proving that with the right mindset and drive, one can conquer any obstacle in their path",
image:story2},
  {id:2,title:"Do Whatever It Takes To Get The Job Done",
text1:"Carol Sheeba's success story is an inspiring tale of determination, perseverance, and hard work in the face of adversity. Despite facing financial difficulties and the loss of her father at a young age, Carol remained ambitious and committed to achieving her goals. ",
text2:"However, Carol was not one to be deterred by the obstacles in her path. She knew that education and improving her communication skills were crucial for her future success. So, she decided to take charge of her destiny and joined Glorious Mindmine, an organization that helped her enhance her communication skills and overall personality.",
text3:"With her professional growth came financial stability. Carol's determination, coupled with her acquired skills and experience, helped her earn a decent salary, which significantly improved her family's living conditions. She was no longer burdened by financial constraints, and the family could lead a more comfortable life. ",
image:story3}
]
const Home  =()=>{

  
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // State to keep track of the current page index
// const [currentPage, setCurrentPage] = useState(0);
// const [awardsCurrentPage, setAwardsCurrentPage] = useState(0);
// const awardsCardsPerPage = 5; // Number of cards to display per page

// const cardsPerPage = 5; // Number of cards to display per page

//   useEffect(() => {
//       const interval = setInterval(() => {
//           setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerRender.length);
//       }, 3000);

//       return () => clearInterval(interval);
//   }, []);

//   const handleNextClick = () => {
//       const totalCards = mediaData.length;
//       const maxPage = Math.ceil(totalCards / cardsPerPage) - 1;
//       const nextPage = Math.min(currentPage + 1, maxPage);
//       setCurrentPage(nextPage);
//     };
    
//     // Function to handle the click of the "Prev" button
//     const handlePrevClick = () => {
//       const prevPage = Math.max(currentPage - 1, 0);
//       setCurrentPage(prevPage);
//     };

//     const handleAwardsNextClick = () => {
//       const totalAwardsCards = awardsData.length;
//       const maxAwardsPage = Math.ceil(totalAwardsCards / awardsCardsPerPage) - 1;
//       const nextAwardsPage = Math.min(awardsCurrentPage + 1, maxAwardsPage);
//       setAwardsCurrentPage(nextAwardsPage);
//     };
    
//     const handleAwardsPrevClick = () => {
//       const prevAwardsPage = Math.max(awardsCurrentPage - 1, 0);
//       setAwardsCurrentPage(prevAwardsPage);
//     };
    
    return (
      <>
        <Header/>
        <SocialIcons/>
        <HomeBannerCarousel className="homeCarousel" slides={slidesData} />
        <div>
          <h1 className="why-choose-glorious-couse">Why choose Glorious Mindmine?</h1>
          <div className="home-section-service-container">
            <div className="home-section-service-image-container">
              <img src={image8} alt="" className="home-section-service-image"/>
            </div>
            <div className="home-section-right-side-container">
              <h3 className="home-section-service-heading">Tailored Guidance and Mentorship</h3>
              <p className="home-section-service-description">Participate in weekly mentorship sessions led by industry experts, benefiting from personalized support within small groups of 5-15 learners. Acquire practical experience through industry-related projects, gaining hands-on exposure.</p>
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
                      <AiFillStar className="home-section-service-stats-star"/>
                      <AiFillStar className="home-section-service-stats-star"/>
                      <AiFillStar className="home-section-service-stats-star"/>
                      <AiFillStar className="home-section-service-stats-star"/>
                    </div>
                    <div>
                      <p className="home-section-service-stats-title">4.9/5</p>
                      <p className="home-section-service-stats-subtitle">Mentorship Sessions Completed</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="home-section-service-container-2">
            <div className="home-section-service-image-container">
              <img src={Home1} alt="" className="home-section-service-image"/>
            </div>
            <div className="home-section-right-side-container">
              <h3 className="home-section-service-heading">Glorious Mindmine Accelarate Exclusive Career Assistance</h3>
              <p className="home-section-service-description">Our services include mock interviews to prepare you for your desired career. Engage in hackathons and career fairs to maintain a competitive edge.</p>
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
              <img src={Home1} alt="" className="home-section-service-image"/>
            </div>
            <div className="home-section-right-side-container">
              <h3 className="home-section-service-heading">Enhanced Networking and Program Assistance</h3>
              <p className="home-section-service-description">Expand your professional network through interactions with peers and industry leaders. You'll also have access to a dedicated program manager to address any questions or concerns you may have.</p>
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
                      <p className="home-section-service-stats-title">4.9/5</p>
                      <p className="home-section-service-stats-subtitle">Average Support Rating</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="world-container">
            <p className="world-container-title">Providing online education for</p>
            <h3 className="home-section-service-heading">Learners across 170+ countries</h3>
            <img className="world-image" src={world}  alt=""/>
          </div>
          <div className="home-section-explore-courses-section">
            <div className="home-section-explore-courses-section1">
              <h3 className="home-section-service-heading">Explore courses</h3>
              <p className="home-section-explore-courses-text">2000+ Free Courses, Live Sessions by Experts, and Job Opportunities from 3000+ Companies. Join 2 Crore+ learners to build your dream career right now!</p>
              <button className="home-section-explore-courses-button">Explore Now</button>
            </div>
            <div className="home-section-explore-courses-section2">
              <img className="home-section-explore-courses-image" alt="" src={exploreProgramImage} />
            </div>
          </div>
          <div className="home-section-success-stories-container">
            <p className="home-section-success-stories-text">Motivating everyone to engage in learning through.</p>
            <h1 className="home-section-service-heading">Diverse tales of progress</h1>
            <p className="home-section-explore-courses-text">Discover the career transformations our learners have experienced after completing their education with us.</p>
           <Link style={{textDecoration:"none"}}><button className="home-section-explore-courses-button">Get Inspired</button></Link>
          </div>
          <Slider {...settings} className="success-carousel-slider-home" >
            {SuccessCarouselList.map(each=>(<SuccessCarousel key={each.id} cardDetails={each} />))}
          </Slider>
          <div className="home-section-transformed-careers-container">
            <div className="home-section-transformed-careers-container1">
                <h1 className="home-section-transformed-careers-heading">Career transformation was achieved by 66% of our learners.</h1>
                <p className="home-section-transformed-careers-text">The issue isn't a shortage of jobs, but a deficiency in employability skills.</p>
            </div>
            <div>
            <Link to="/registration" style={{textDecoration:"none"}}><button className="home-section-transformed-careers-buttton">Register Now</button></Link>
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
            <Link to="/registration" style={{textDecoration:"none"}}><button className="home-section-transformed-careers-buttton">Contact Us</button></Link>
            </div>
          </div>
        </div>
      < Footer/>
      <FirstTimePopup/>
      </>
  );
}

export default Home;