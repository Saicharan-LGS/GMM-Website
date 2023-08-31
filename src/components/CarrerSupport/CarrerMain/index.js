

import { Component } from "react";
import Slider from 'react-slick'
import ReactPlayer from 'react-player'
import './index.css'

//Components
import Header from "../../Homes/Headers";
import Footer from "../../Homes/Footer";
import CarrerPrep from "../CarrerPrep"
import carrer from "../../Images/carrerimage.png"
import TransformingCard from "../../courses/DataScience/TransformingCarrerCard"
import { BannerLeft } from "../../courses/DataScience/BannerLeft";

//importing from ListData.js
import { CareerSupportTransformingCarrerList } from "../../Constant/ListData";
import { CareerSupportcrolllingImages1 } from "../../Constant/ListData";
import { CareerSupportPrepList } from "../../Constant/ListData";
import { Allsettings } from "../../Constant/ListData";

const ScrolllingImages1 = [
    {id: 0, image: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg"},
    {id: 1, image: "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg"},
    {id: 2, image: "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"},
    {id: 3, image: "https://1000logos.net/wp-content/uploads/2017/02/HSBC-Logo.png"},
    {id: 4, image: "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png"},
    {id: 5, image: "https://www.popsci.com/uploads/2022/06/07/squarespace-logo-maker-best-free-logo-design-software.jpg?auto=webp&width=800&crop=16:10,offset-x50"},
    {id: 6, image: "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png"},
    {id: 7, image: "https://cdn.cookielaw.org/logos/c2e51c50-8594-41cd-a02a-67907a0f7e2e/2f964a2f-44d3-4b77-b247-1774a38cb40a/3bc2e1ab-a3ef-4954-8e9a-69eef219f6c5/Genpact_Logo.jpg"},
    {id: 8, image: "https://skillate-profile-pictures.s3.ap-south-1.amazonaws.com/org__237/5020af0a-289b-44d0-8e17-8b5ff1f0a985__Tiger_LOGO_new_main.png"},
    {id: 9, image: "https://connect-assets.prosple.com/cdn/ff/WdcdY8IJZrwWmw6ImzA_uboAqko-obLkQ1fkBtT_aqI/1650724772/public/styles/scale_and_crop_center_974x309/public/2022-03/Logo-iit-madras480x480-2022.jpg?itok=bVtnp4G-"},
    {id: 10, image: "https://media.designrush.com/agencies/130184/conversions/Deqode-logo-profile.jpg"}
];


  

class CareerSupport extends Component{

    render(){
        return(
            <>
           <Header/>
            <div className="carrerSupportMain-home-container">
                <div className="carrerSupportIntoductionContainer">
                    {/* <h3 className="careerSupportHeading">Achieve your career dreams with GMM Excelerate</h3> */}
                    <div className="carrerSupportIntroductionSubContainer">
                            {/* <span className="careerSupportIntoductionText">Career Fairs</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Job Boards</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Career Prep Sessions</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Networking Sessions</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Hackathons Sessions</span>
                            <AiOutlineArrowDown className="careerSupportIntoductionIcon"/>
                            <span className="careerSupportIntoductionText">Your Dream Job</span> */}
                            <img src={carrer} alt="" className="careerSupportIntoductionContainer1"  />
                        {/*<div>
                            <img src={careerImage} alt="" className="careerSupportIntroImage"/>
                    </div>*/}
                        <div className="video-container">
                            <ReactPlayer width="100%" height="100%" url='https://youtu.be/1-EA7bhFWt4' className="video-container1" controls />
                        </div>
                    </div>
                </div>
                <div className='carrerintro-data-main-container'>
                        <div className='carrer-intro-data-sub-container'>
                            <h1 className='carrer-intro-data-heading'>700+</h1>
                            <p className='carrer-intro-data-text'>Hiring Partners</p>
                        </div>
                        <div className='carrer-intro-data-sub-container'>
                            <h1 className='carrer-intro-data-heading'>55%</h1>
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
                        <li className="carrerJobBoardsListItem">Opportunities customized to your work experience</li>
                        <li className="carrerJobBoardsListItem">Alumni connect for industry insights & interview tips</li>
                    </ul>
                </div>
                <div className="carrerTransitionsMainContainer">
                    <h1 className="carrerTransitionsMainHeading">Successful Career Transitions To Inspire You</h1>
                    <div className="careersupportslider">
                        <Slider {...Allsettings}>
                            {CareerSupportTransformingCarrerList.map(each=>(<TransformingCard key={each.id} cardDetails={each} />))}
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
                {CareerSupportPrepList.map(each=>(<CarrerPrep key={each.id} details={each} />))}
                <div className="careerHiringMainContainer">
                    <h3 className="careerHiringMainHeading">Our Hiring Partners</h3>
                    <BannerLeft images={CareerSupportcrolllingImages1} speed={5000} />
                </div>
            </div>
        <Footer/>
        </>
        )
    }
}

export default CareerSupport