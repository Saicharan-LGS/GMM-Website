

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
import { CareerSupportScrolllingImages1 } from "../../Constant/ListData";
import { CareerSupportPrepList } from "../../Constant/ListData";
import { Allsettings } from "../../Constant/ListData";



  

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
                    <BannerLeft images={CareerSupportScrolllingImages1} speed={5000} />
                </div>
            </div>
        <Footer/>
        </>
        )
    }
}

export default CareerSupport