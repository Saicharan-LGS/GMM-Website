import {Component} from 'react' 
import { CgCalendarDates } from "react-icons/cg";
import {IoMdCheckmarkCircle} from 'react-icons/io'
import './index.css'
import {Link} from 'react-router-dom'
import img2 from '../../../Images/Akhila.png'
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
                    <img src={img2} alt="" className="course-intro-side-image"/>
                    <p className="course-intro-data-analyst">Akhila</p>
                    <div className="course-intro-side-image-desc">
                        <p>Non Tech Background</p>
                        <p className="arrow-width">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <line x1="0" y1="20" x2="30" y2="20" stroke="#000" strokeDasharray="1, 3" />
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