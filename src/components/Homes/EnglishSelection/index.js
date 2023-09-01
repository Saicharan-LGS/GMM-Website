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
    <div className='english-course-selection-main-conatiner-category'>
    <h1 className='english-course-selection-sub-conatiner-heading-category'>Certification In English Communication Blue Print</h1>
    <div className='english-course-selection-conatiner-category'>
        <div className='english-course-selection-sub-conatiner-category'>
            <h3 className="english-course-selection-sub-conatiner-type-heading">Online</h3>
            <div className="course-intro-batch-container-category">
                <CgCalendarDates className='course-intro-calender-icon-category'/>
                <span className='course-into-calender-heading-category'>You can start Classes after Registration</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon-category' />
                    <span className='course-intro-list-text-category'>Full-time program with Recorded online classes</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon-category'/>
                    <span className='course-intro-list-text-category'>Daily Action Item For Results</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon-category' />
                    <span className='course-intro-list-text-category'>No English Speaking Experience Required</span>
                </div>
                <div className='course-intro-button-container-category'>
                    <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1-category'>ENROLL NOW</button></Link>
                    <Link to="/english-online" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button2-category'>EXPLORE NOW</button></Link>
                </div>
        </div>
        <div className='english-course-selection-sub-conatiner-category'>
            <h3 className="english-course-selection-sub-conatiner-type-heading">Offline</h3>
            <div className="course-intro-batch-container-category">
                <CgCalendarDates className='course-intro-calender-icon-category'/>
                <span className='course-into-calender-heading-category'>Cohort Lima Starts On Every Monday</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon-category' />
                    <span className='course-intro-list-text-category'>45 days Full-fledged Offline classes</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon-category'/>
                    <span className='course-intro-list-text-category'>Daily Action Item For Results</span>
                </div>
                <div className='course-intro-list-container'>
                    <IoMdCheckmarkCircle className='course-intro-list-icon-category' />
                    <span className='course-intro-list-text-category'>No English Speaking Experience Required</span>
                </div>
                <div className='course-intro-button-container-category'>
                    <Link to="/registration" style={{textDecoration:"none"}}><button className='course-intro-button1-category'>ENROLL NOW</button></Link>
                    <Link to="/english-offline" style={{textDecoration:"none"}}><button className='course-intro-button2-category'>EXPLORE NOW</button></Link>
                </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
