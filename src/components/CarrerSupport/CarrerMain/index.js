import { Component } from "react";
import {AiOutlineArrowDown} from "react-icons/ai"
import Slider from 'react-slick'
import TransformingCard from "../../courses/DataScience/TransformingCarrerCard"
import CarrerPrep from "../CarrerPrep"
import { BannerLeft } from "../../courses/DataScience/BannerLeft";
import './index.css'
import ReactPlayer from 'react-player'
import Header from "../../Homes/Headers";
import Footer from "../../Homes/Footer";


const TransformingCarrerList=[
    {id:1,description:"If I were to name one value for which AlmaBetter stands for, it would be 'Excellence'. I'm saying this because the course was excellently designed and executed.",name:"Soumya Jain",previousRole:"Data Analyst",Role:"Assistant Manager Analystics",company:"PaisaBazaar",hike:"70% hike"},
    {id:2,description:"Having the scope to learn and grow alongside some fascinating cohort members amidst the chaos of the pandemic was quite a novel experience.",name:"Smruti Ranjan Pradhan",previousRole:"Pesearch Assistant",Role:"Data Science Analyst",company:"Accenture",hike:"70% hike"},
    {id:3,description:"Mock interviews are great because you get honest, detailed, and timely feedback from industry experts.",name:"Mahesh Anumula",previousRole:"Fresher",Role:"Data Scientist",company:"Capgemini",hike:""},
    {id:4,description:"A structured curriculum with quality content makes this program stand out.",name:"Shubhankit Sirvaiya",previousRole:"Associate Consultant Analyst",Role:"Data Scientist",company:"Accenture",hike:"75% hike"},
    {id:5,description:"I was not financially sound, so AlmaBetter proved to be very cost-effective and empowering.",name:"Niville Thomas",previousRole:"Associate Analyst",Role:"Data Scientist",company:"Cognizant",hike:"120% hike"},
    {id:6,description:"I was not financially sound, so AlmaBetter proved to be very cost-effective and empowering.",name:"Saubhagya Varma",previousRole:"Event Marketing Intern",Role:"Associate Analytic Consultant",company:"Infiniti",hike:"50% hike"},
    {id:7,description:"My experience at AlmaBetter was fabulous, and I’ll always be thankful to the entire AlmaBetter team.",name:"Kamya Malhotra",previousRole:"Fresher",Role:"",company:"",hike:""},
    {id:8,description:"At AlmaBetter, students are always connected with mentors and peers on the AlmaBetter Community App..",name:"",previousRole:"",Role:"Associate Stastical Programmer",company:"Novartis",hike:""},
    {id:9,description:"Mentorship sessions helped me improve my communication skills and articulate my knowledge efficiently. I learned something new from every session.",name:"Sumaya Bhai",previousRole:"Fresher",Role:"Junior Business Analyst",company:"saras",hike:""},
]
const ScrolllingImages1 = [
    "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg",
    "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg",
    "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/02/HSBC-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png",
    "https://www.popsci.com/uploads/2022/06/07/squarespace-logo-maker-best-free-logo-design-software.jpg?auto=webp&width=800&crop=16:10,offset-x50",
    "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png",
    "https://cdn.cookielaw.org/logos/c2e51c50-8594-41cd-a02a-67907a0f7e2e/2f964a2f-44d3-4b77-b247-1774a38cb40a/3bc2e1ab-a3ef-4954-8e9a-69eef219f6c5/Genpact_Logo.jpg",
    "https://skillate-profile-pictures.s3.ap-south-1.amazonaws.com/org__237/5020af0a-289b-44d0-8e17-8b5ff1f0a985__Tiger_LOGO_new_main.png",
    "https://connect-assets.prosple.com/cdn/ff/WdcdY8IJZrwWmw6ImzA_uboAqko-obLkQ1fkBtT_aqI/1650724772/public/styles/scale_and_crop_center_974x309/public/2022-03/Logo-iit-madras480x480-2022.jpg?itok=bVtnp4G-",
    "https://media.designrush.com/agencies/130184/conversions/Deqode-logo-profile.jpg",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));

const settings = {
    dots: true,
    infinite: true,
    speed: 500,// Show 3 slides in large devices
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
            slidesToShow: 2,
           // Show 1 slide in small devices (e.g., tablets and mobiles)
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
             // Show 1 slide in small devices (e.g., tablets and mobiles)
            },
        },
    ],
  }

  const careerPrepList=[
  {id:0,imageurl:"image",heading:"Career mentoring",list:["LIVE online sessions with experienced industry professionals","Expert mentors guide you on the career path that’s right for you","Suggestions on setting your short term and long term career goals","Mentors from various domains help you gain valuable industry insights"]},
  {id:1,imageurl:"image",heading:"CV/Linkedin Review",list:["Feedback from experts to make your resume and LinkedIn profiles stand out from the crowd","Personalized and detailed suggestions to improve the content and format of your CV","Tips on customizing your resume for the job profile you are applying to"]},
  {id:2,imageurl:"image",heading:"Interview Preparation Session",list:["mock interviews with industry experts to help you land your dream job","Guidance from our alumni currently in roles you aspire for","Develop industry context with case studies and learn answers to common technical and HR questions"]}
]

class CareerSupport extends Component{

    render(){
        return(
            <>
           <Header/>
            <div className="carrerSupportMain-home-container">
                <div className="carrerSupportIntoductionContainer">
                    <h1 className="careerSupportHeading">Achieve your career dreams with GMM Excelerate</h1>
                    <div className="carrerSupportIntroductionSubContainer">
                        <div className="careerSupportIntoductionContainer1">
                            <span className="careerSupportIntoductionText">Career Fairs</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Job Boards</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Career Prep Sessions</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Networking Sessions</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Hackathons Sessions</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Your Dream Job</span>
                        </div>
                        {/*<div>
                            <img src={careerImage} alt="" className="careerSupportIntroImage"/>
                    </div>*/}
                        <div className="video-container">
                            <ReactPlayer url='https://youtu.be/1-EA7bhFWt4' className="video-container1" controls />
                        </div>
                    </div>
                </div>
                <div className='carrerintro-data-main-container'>
                        <div className='carrer-intro-data-sub-container'>
                            <h1 className='carrer-intro-data-heading'>700+</h1>
                            <p className='carrer-intro-data-text'>Hiring Partners</p>
                        </div>
                        <div className='carrer-intro-data-sub-container'>
                            <h1 className='carrer-intro-data-heading'>8 LPA</h1>
                            <p className='carrer-intro-data-text'>Alumini career Transitions</p>
                        </div>
                        <div className='carrer-intro-data-sub-container'>
                            <h1 className='carrer-intro-data-heading'>25 LPA</h1>
                            <p className='carrer-intro-data-text'>Highest Salary</p>
                        </div>
                    </div>
                    <div className="carrerJobBoardsMainContainer">
                        <h1 className="carrerJobBoardsMainHeading">Job Boards</h1>
                        <p className="carrerJobBoardsMaintext">Our dedicated learner success team posts hand-picked opportunities from top organizations relevant to your profile and experience.</p>
                        <ul className="carrerJobBoardsList">
                            <li className="carrerJobBoardsListItem">60+ Job postings per month on an average</li>
                            <li className="carrerJobBoardsListItem">Opportunities customised to your work experience</li>
                            <li className="carrerJobBoardsListItem">Alumni connect for industry insights & interview tips</li>
                        </ul>
                    </div>
                    <div className="carrerTransitionsMainContainer">
                        <h1 className="carrerTransitionsMainHeading">Successful Career Transitions To Inspire You</h1>
                        <div className="careersupportslider">
                        <Slider {...settings}>
                        {TransformingCarrerList.map(each=>(<TransformingCard key={each.id} cardDetails={each} />))}
                    </Slider>
                    </div>
                    </div>
                    <div className="carrerCarrerPrepMainContainer">
                        <div className="carrerCarrerPrepContainer1">
                            <h1 className="carrerCarrerPrepMainHeading">Career Prep</h1>
                            <p className="carrerCarrerPrepText">Learn from leading academicians in the field of data science and business analytics and several experienced industry practitioners from top organizations.</p>
                        </div>
                        <div className="carrerCarrerPrepContainer2">
                            <div className="carrerCarrerPrepContainer3">
                                <h1 className="carrerCarrerPrepContainer3Heading">4.7/5</h1>
                                <p className="carrerCarrerPrepContainer3Text">Avg Mentorship Rating</p>
                            </div>
                            <div className="carrerCarrerPrepContainer3">
                                <h1 className="carrerCarrerPrepContainer3Heading">3500+</h1>
                                <p className="carrerCarrerPrepContainer3Text">Guidance sessions done</p>
                            </div>
                        </div>
                    </div>
                    {careerPrepList.map(each=>(<CarrerPrep key={each} details={each} />))}
                    <div className="careerHiringMainContainer">
                        <h1 className="careerHiringMainHeading">Our Hiring Partners</h1>
                        <BannerLeft images={ScrolllingImages1} speed={5000} />
                    </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default CareerSupport