import {NavLink,Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Component} from 'react'
//import {AiOutlineArrowRight} from "react-icons/ai"
import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'
import MobileViewCourseList from '../MobileViewCourse'
import gmmlogo from "../../Images/GMM logo.png"
// import HoverData from '../HoverData'
import NavExploreCourse from '../NavExploreCourse'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
// const NavbarCourseList=[
//   {id:0, tab:"English Communication",link:"/english",item1:"Certification in English Communication BluePrint", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
//   {id:1, tab:"Data Science Engineer",link:"/DataScience",item1:"Certification in Data Science", item2:"6 months part-time program with live online classes",item3:"No coding experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
//   {id:2, tab:"Full Stack Developer",link:"/FullStackCourse",item1:"Certification in Fullstack development", item2:"6 months part-time program with live online classes",item3:"No coding experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
//   {id:3, tab:"Mendix Developer",link:"/Mendix",item1:"Certification in Mendix", item2:"6 months part-time program with live online classes",item3:"No coding experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
//   {id:4, tab:"Polarion Expert",link:"/Polarian",item1:"Certification in Polarion", item2:"6 months part-time program with live online classes",item3:"No coding experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
//   {id:5, tab:"Digital Marketing Expert",link:"/DigitalMarkting",item1:"Certification in Digital Marketing", item2:"6 months part-time program with live online classes",item3:"No coding experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
//   {id:6, tab:"Salesforce",link:"/salesforce",item1:"Certification in Salesforce", item2:"6 months part-time program with live online classes",item3:"No coding experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
// ]

const NavContainerList=[
  {id:0,item:"100% Job Guarantee",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"AWS Cloud Technology",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
  {id:1,item:"IT",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#RightChoice",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Digital Marketing Expert",link:"/DigitalMarkting",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Salesforce Admin",link:"/salesforce",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"AWS Cloud Technolgy",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
  {id:2,item:"Soft Skills", detail:[{id:0,course:"English Communication Blue Print",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Business Communication (Corporate)",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Leadership Skills",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Team Building",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"IELTS",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
  
]
class Header extends Component {
  state = {tab:NavContainerList[0].id,showNavMobileItems:false,showNavItems:false,mobileCourseItems:0,showCourses:false }

  toggleShowNavItems = () => {
    this.setState(prevState => ({showNavItems: !prevState.showNavItems,showCourses:false}))
  }
  toggleMobileitems=()=>{
    this.setState(prevState=>({showNavMobileItems: !prevState.showNavMobileItems}))
  }
  toggleShowCourses=()=>{
    this.setState({showCourses: true})
  }
  toggleShowCoursesFalse=()=>{
    this.setState({showCourses: false})
  }
  toggleMobileCourseItems=(value)=>{
    this.setState({mobileCourseItems: value})
  }
  

  renderNavItems = () => {
    const {showNavMobileItems,mobileCourseItems,showCourses}=this.state
    console.log(mobileCourseItems.detail)
    const detail = mobileCourseItems.detail
    return(
    <div className="nav-items-container">
      <div className="nav-explore-course-main-container1">
        {showCourses && 
        <ul className='nav-expolre-list-1'>
          {detail.map((eachItem)=>(
                <li><Link to={eachItem.link} class="nav-explore-course-main-container-item1">{eachItem.course}</Link></li>
              ))}
        </ul> }
        </div>
      <ul className="nav-menu-mobile">
        <div className="Mobile-explore-container">
          <ul className="Mobile-explore-sub-container">
            <li className="nav-menu-item" onClick={this.toggleMobileitems}>Explore Programs</li>
            <li className="Mobile-explore-items-list">
                {showNavMobileItems && <MobileViewCourseList toggleShowCourses={this.toggleShowCourses} toggleMobileCourseItems={this.toggleMobileCourseItems}/> }
            </li>
          </ul>
        </div>
        <NavLink to="/career" className="nav-link">
          <li className="nav-menu-item">Career Support</li>
        </NavLink>
        <NavLink
          to="/success"
          className="nav-link">
          <li className="nav-menu-item">Success Stories</li>
        </NavLink>
        <NavLink
          to="/corporate"
          className="nav-link">
          <li className="nav-menu-item">Corporate</li>
        </NavLink>
        <NavLink
          to="/studyabroad"
          className="nav-link">
          <li className="nav-menu-item">Study Abroad</li>
        </NavLink>
        <NavLink
          to="/Hirefromus"
          className="nav-link">
          <li className="nav-menu-item">Hire From Us</li>
        </NavLink>
        <NavLink
          to="/aboutus"
          className="nav-link">
          <li className="nav-menu-item">About Us</li>
        </NavLink>
        <li>
          <NavLink to="/registration"><button
            type="button"
            className="logout-desktop-btn">
            Contact Us
            </button></NavLink>
        </li>
      </ul>
      {/* <button
        type="button"
        onClick={this.toggleShowNavItems}
        className="nav-mobile-close-button"
      >
        <AiFillCloseCircle />
  </button> */}
    </div>
  )
}
  changeNavTabId = event => {
    this.setState({tab: event.target.value})
  }
  render() {
    const {tab,showNavItems,} = this.state
    return (
      <nav className="nav-header">
        <div className="nav-content">
          <div className="nav-bar-mobile-logo-container">
            <Link to="/" className="nav-link">
              <img
                alt="website logo"
                className="nav-mobile-logo"
                src={gmmlogo}
              />
            </Link>
            <button
              type="button"
              onClick={this.toggleShowNavItems}
              className="nav-mobile-btn"
            >
              <GiHamburgerMenu className="nav-mobile-menu-icon" />
            </button>
          </div>
          <div className="nav-bar-large-container">
            <div style={{display:"flex",marginLeft:"20px",alignItems:"center", gap:"10px",alignSelf:"center"}}>
            <Link to="/" className="nav-link">
              <img
                className="nav-website-logo"
                src={gmmlogo}
                alt="website logo"
              />
            </Link>
            <ul className="Explore-program">
              <NavLink to="/" className="nav-link">
                <li className="nav-menu-item explore-program-item">Explore Programs</li>
              </NavLink> 
                <div className="display-content">
                  <div className="explore-program-main-container">
                    <ul className='NavcoursesBasicDoubtsTabsList'>
                      {NavContainerList.map(each=>{
                        const activeTab=each.id===tab ? "NavcourseBasicDoubtActiveTab" : ""
                          return(
                          <div key={each.id} className='NavcourseslistContainer'>
                            <li className= {`NavcoursesBasicDoubtsTabsListItem`} key={each.id}><button className={`NavcoursesBasicDoubtsTabsListItemButton ${activeTab}`} value={each.id} onClick={this.changeNavTabId}  onMouseOver={this.changeNavTabId}>{each.item}</button></li>
                            <MdOutlineKeyboardDoubleArrowRight className="NavcoursesBasicDoubtsTabsListItemArrow"/>
                          </div>
                      )})}
                    </ul>
                    <div className='NavcoursesBasicDoubtsTabsDetailsContainer'>
                      <NavExploreCourse details={NavContainerList[tab]} />
                    </div>                                        
                  </div>                        
                </div>
              </ul>
            </div>
            <div style={{display:"flex",marginLeft:"20px",alignItems:"center", gap:"10px",alignSelf:"center"}}>
              <ul className="nav-menu">
                <li className="nav-menu-item"><NavLink
                to="/career"
                className="nav-link nav-menu-item" activeclassname="active">Career Support </NavLink></li>
                <li className="nav-menu-item"><NavLink
                to="/success"
                className="nav-link nav-menu-item"activeclassname="active" >Success Stories</NavLink></li>
                <li className="nav-menu-item"><NavLink 
                to="/corporate"
                className="nav-link nav-menu-item" activeclassname="active">Corporate</NavLink></li>
                <li className="nav-menu-item"><NavLink 
                to="/studyabroad"
                className="nav-link nav-menu-item" activeclassname="active">Study Abroad</NavLink></li>  
                <li className="nav-menu-item"><NavLink
                to="/Hirefromus"
                className="nav-link nav-menu-item" activeclassname="active">Hire From Us</NavLink></li>    
                <li className="nav-menu-item"><NavLink
                to="/aboutus"
                className="nav-link nav-menu-item" activeclassname="active">About Us </NavLink></li>
              </ul>
            </div>
            <li style={{listStyleType:"none"}}>
                <Link to="/registration"><button
                  type="button"
                  className="logout-desktop-btn">
                  Contact Us
                </button></Link>
            </li>
          </div>
        </div>
        {showNavItems && this.renderNavItems()}
      </nav>
    )
  }
}

export default Header