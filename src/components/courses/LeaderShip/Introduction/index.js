import {Component} from 'react' 
import { CgCalendarDates } from "react-icons/cg";
import {IoMdCheckmarkCircle} from 'react-icons/io'
import "../../DataScience/Introduction/index.css"
import {Link} from 'react-router-dom'
import profile from "../../../Images/roy.png"
class Intro extends Component{
    render(){
        return(
            <div className="course-intro-main-container">
                <div className="course-intro-sub-container">
                    <h1 className="course-Intro-Heading">Certification Leadership Skills</h1>
                    <div className="course-intro-batch-container">
                        <CgCalendarDates className='course-intro-calender-icon'/>
                        <span className='course-into-calender-heading'>Cohort Lima Starts On 18th Sep</span>
                    </div>
                    <div className='course-intro-list-container'>
                        <IoMdCheckmarkCircle className='course-intro-list-icon' />
                        <span className='course-intro-list-text'>45 days Full-fledged online classes</span>
                    </div>
                    <div className='course-intro-list-container'>
                        <IoMdCheckmarkCircle className='course-intro-list-icon'/>
                        <span className='course-intro-list-text'>Daily Action Item For Results</span>
                    </div>
                    <div className='course-intro-list-container'>
                        <IoMdCheckmarkCircle className='course-intro-list-icon' />
                        <span>No English Speaking experience required</span>
                    </div>
                    <div className='course-intro-button-container'>
                        <Link to="/registration" style={{textDecoration:"none", color:"#fff"}}><button className='course-intro-button1'>ENROLE NOW</button></Link>
                    </div>
                    {/*<div className='course-intro-data-main-container'>
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
        </div> */}
                </div>
                <div className="course-side-image-main-container">
                    <img src={profile} alt="" className="course-intro-side-image"/>
                    <p className="course-intro-data-analyst">Vashini Roy</p>
                    <div className="course-intro-side-image-desc">
                        <p>Junior Developer</p>
                        <p className="arrow-width">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <line x1="0" y1="20" x2="30" y2="20" stroke="#000" strokeDasharray="1, 3" />
                            <polyline points="30,15 35,20 30,25" fill="#000" />
                        </svg>
                        </p>
                        
                        <p className="course-intro-data-analyst">Senior Developer</p>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Intro