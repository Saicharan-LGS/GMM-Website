import './index.css'
import { IoMdCheckmarkCircle } from 'react-icons/io';
import {Link} from 'react-router-dom'

function Mendix(props){
    const {details}=props
    const{item1,item2,item3,item4,link}=details
    return (
        <div className="navEachCourseContainer">
          <h2 className="navEachCourseHeading">{item1}</h2>
          <p className="navEachCourseDescription">
            Become a job-ready certified {item1} professional. Join the
            largest tech community in India. Pay only after you get a job
            above 4 LPA.
          </p>
          <div className="Navcourse-intro-list-container">
            <div className='course-intro-list-container'>
              <IoMdCheckmarkCircle className='course-intro-list-icon' />
              <span className='course-intro-list-text'>{item2}</span>
            </div>
            <div className='course-intro-list-container'>
              <IoMdCheckmarkCircle className='course-intro-list-icon'/>
              <span className='course-intro-list-text'>{item3}</span>
            </div>
            <div className='course-intro-list-container'>
              <IoMdCheckmarkCircle className='course-intro-list-icon' />
              <span>{item4}</span>
            </div>
          </div>
            <div className='NavCourseButtons'>
                <Link to={link}><button className="NavExploreCourseButton">Explore Course</button></Link>
                <Link to="/registration"><button className="NavRegisterNowButton">Register Now</button></Link>
            </div>
          </div>
    )
}

export default Mendix