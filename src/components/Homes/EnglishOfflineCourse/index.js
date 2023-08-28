import React from 'react'
import "./index.css"
import {Link} from "react-router-dom"
import { CgCalendarDates } from "react-icons/cg";
import {IoMdCheckmarkCircle} from 'react-icons/io'
import Header from "../../Homes/Headers"
import Footer from "../Footer"

export default function EnglishOfflineCourse() {
  return (
    <>
    <Header/>
    <div className='english-course-selection-main-conatiner'>
    <h1 className='english-course-selection-sub-conatiner-heading'>Certification In English Communication Blue Print</h1>
    <div className='english-course-selection-conatiner'>
        <div className='english-course-selection-sub-conatiner'>
            <h3>Online</h3>
            <div className="course-intro-batch-container">
                <CgCalendarDates className='course-intro-calender-icon'/>
                <span className='course-into-calender-heading'>Cohort Lima Starts On 18th July</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span className='course-intro-list-text'>6 months part-time program with live online classes</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon'/>
                    <span className='course-intro-list-text'>Re-engineered curriculum for post Chat-GPT era</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span>No coding experience required</span>
                </div>
                <div className='course-intro-button-container'>
                    <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>ENROLL NOW</button></Link>
                    <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>EXPLORE NOW</button></Link>
                </div>
        </div>
        <div className='english-course-selection-sub-conatiner'>
            <h3>Offline</h3>
            <div className="course-intro-batch-container">
                <CgCalendarDates className='course-intro-calender-icon'/>
                <span className='course-into-calender-heading'>Cohort Lima Starts On 18th July</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span className='course-intro-list-text'>6 months part-time program with live online classes</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon'/>
                    <span className='course-intro-list-text'>Re-engineered curriculum for post Chat-GPT era</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span>No coding experience required</span>
                </div>
                <div className='course-intro-button-container'>
                    <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>ENROLL NOW</button></Link>
                    <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>EXPLORE NOW</button></Link>
                </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
