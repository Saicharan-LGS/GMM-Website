import React from 'react'
import "./index.css"
import {Link} from "react-router-dom"
import { CgCalendarDates } from "react-icons/cg";
import {IoMdCheckmarkCircle} from 'react-icons/io'
import Header from "../Headers"
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
                <span className='course-into-calender-heading'>You can start Classes after Registration</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span className='course-intro-list-text'>Full-time program with Recorded online classes</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon'/>
                    <span className='course-intro-list-text'>Daily Action Item For Results</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span>No English Speaking Experience Required</span>
                </div>
                <div className='course-intro-button-container'>
                    <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>ENROLL NOW</button></Link>
                    <Link to="/english-online" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>EXPLORE NOW</button></Link>
                </div>
        </div>
        <div className='english-course-selection-sub-conatiner'>
            <h3>Offline</h3>
            <div className="course-intro-batch-container">
                <CgCalendarDates className='course-intro-calender-icon'/>
                <span className='course-into-calender-heading'>Cohort Lima Starts On Every Monday</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span className='course-intro-list-text'>45 days Full-fledged Offline classes</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon'/>
                    <span className='course-intro-list-text'>Daily Action Item For Results</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon' />
                    <span>No English Speaking Experience Required</span>
                </div>
                <div className='course-intro-button-container'>
                    <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>ENROLL NOW</button></Link>
                    <Link to="/english-offline" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>EXPLORE NOW</button></Link>
                </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
