import {Link} from 'react-router-dom'
import './index.css'
//import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import {TfiTimer} from 'react-icons/tfi'
import {VscBook} from 'react-icons/vsc'

function NavExploreCourse(props){
    const {details}=props
    const {detail} = details
    return(
        <ul className="nav-explore-course-main-container">
            {detail.map((eachItem)=>(
                
                <Link to={eachItem.link} style={{textDecoration:"none"}}><div class="nav-explore-course-main-item-container">
                    <div className="nav-explore-course-left-item-container">
                        <li className="nav-explore-course-main-container-item">{eachItem.course}</li>
                        <p className="nav-explore-status-text">{eachItem.status}</p>
                    </div>
                    <p className="nav-explore-duration">Duration : <span> <TfiTimer className="nav-explore-timer-icon"/> {eachItem.duration}</span> | Case Studies <span><VscBook className="nav-explore-timer-icon"/> {eachItem.casestudy}</span></p>
                </div></Link>
            )
            )
            }
        </ul>
       ) 

    
}
export default NavExploreCourse