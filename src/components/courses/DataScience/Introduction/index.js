import {Component} from 'react' 
import { CgCalendarDates } from "react-icons/cg";
import {IoMdCheckmarkCircle} from 'react-icons/io'
import './index.css'
class Intro extends Component{
    render(){
        return(
            <div className="course-intro-main-container">
                <div className="course-intro-sub-container">
                    <h1 className="course-Intro-Heading">Certification In Full Stack Data Science And AI</h1>
                    <div className="course-intro-batch-container">
                        <CgCalendarDates className='course-intro-calender-icon'/>
                        <span className='course-into-calender-heading'>Cohort Lima Starts On 18th July</span>
                    </div>
                    <div className='course-intro-list-container'>
                        <IoMdCheckmarkCircle className='course-intro-list-icon' />
                        <p className='course-intro-list-text'>6 months part-time program with live online classes</p>
                    </div>
                    <div className='course-intro-list-container'>
                        <IoMdCheckmarkCircle className='course-intro-list-icon'/>
                        <p className='course-intro-list-text'>Re-engineered curriculum for post Chat-GPT era</p>
                    </div>
                    <div className='course-intro-list-container'>
                        <IoMdCheckmarkCircle className='course-intro-list-icon' />
                        <p>No coding experience required</p>
                    </div>
                    <div className='course-intro-button-container'>
                        <button className='course-intro-button1'>EXPLORE PROGRAM</button>
                        <button className='course-intro-button2'>ENROLL NOW</button>
                    </div>
                    <div className='course-intro-data-main-container'>
                        <div className='course-intro-data-sub-container'>
                            <h1 className='course-intro-data-heading'>700+</h1>
                            <p className='course-intro-data-text'>Hiring Partners</p>
                        </div>
                        <div className='course-intro-data-sub-container'>
                            <h1 className='course-intro-data-heading'>8 LPA</h1>
                            <p className='course-intro-data-text'>Average Salary</p>
                        </div>
                        <div className='course-intro-data-sub-container'>
                            <h1 className='course-intro-data-heading'>25LPA</h1>
                            <p className='course-intro-data-text'>Highest Salary</p>
                        </div>
                    </div>
                </div>
                <div className="course-side-image-main-container">
                    <img src="https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg" alt="" className="course-intro-side-image"/>
                    <p className="course-intro-data-analyst">Kamal</p>
                    <div className="course-intro-side-image-desc">
                        <p>Non Tech Background</p>
                        <p className="arrow-width">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <line x1="0" y1="20" x2="30" y2="20" stroke="#000" stroke-dasharray="1, 3" />
                            <polyline points="30,15 35,20 30,25" fill="#000" />
                        </svg>
                        </p>
                        
                        <p className="course-intro-data-analyst">Data Analyst</p>
                    </div>
                </div>
            </div>
        )
            
       
    }
}

export default Intro