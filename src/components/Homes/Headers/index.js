import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Component} from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
//import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'
import Mendix from "../Text"
import MobileViewCourseList from '../MobileViewCourse'
import gmmlogo from "../../Images/GMM logo.png"
const NavbarCourseList=[

  {id:0, tab:"English Communication",link:"/english",item1:"Certification in English Communication BluePrint", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
  {id:1, tab:"Fullstack Developer",link:"/FullStackCourse",item1:"Certification in Fullstack development", item2:"6 months offline classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
  {id:2, tab:"Data Scientist",link:"/DataScience",item1:"Certification in Data Science", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
  {id:3, tab:"Salesforce",link:"/salesforce",item1:"Certification in Salesforce", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
  {id:4, tab:"Mendix",link:"/Mendix",item1:"Certification in Mendix", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
  {id:5, tab:"Polarion",link:"/Polarian",item1:"Certification in Polarion", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
  {id:6, tab:"Digital Marketing",link:"/DigitalMarkting",item1:"Certification in Digital Marketing", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},

]


class Header extends Component {
  state = {tab:NavbarCourseList[0].id }

  toggleShowNavItems = () => {
    this.setState(prevState => ({showNavItems: !prevState.showNavItems}))
  }

  renderNavItems = () => (
    <div className="nav-items-container">
      <ul className="nav-menu-mobile">
          <div className="Mobile-explore-container">
              <ul className="Mobile-explore-sub-container">
                <li className="nav-menu-item">Explore Programs</li>
                <li className="Mobile-explore-items-list">
                  <MobileViewCourseList/>
                </li>
                </ul>
            </div>
            <Link to="/career" className="nav-link">
                <li className="nav-menu-item">Career Support</li>
              </Link>
              <Link
                to="/success"
                className="nav-link"
                
              >
                <li className="nav-menu-item">Success Stories</li>
              </Link>
              <Link
                to="/enterprise"
                className="nav-link">
                <li className="nav-menu-item">Corporate</li>
              </Link>
              {/* <Link
                to="/studyabroad"
                className="nav-link">
                <li className="nav-menu-item">Study Abroad</li>
              </Link> */}
              <Link
                to="/Hirefromus"
                className="nav-link">
                <li className="nav-menu-item">Hire From Us</li>
              </Link>
              <Link
                to="/aboutus"
                className="nav-link">
                <li className="nav-menu-item">About Us</li>
              </Link>
              <li>
                <Link to="/registration"><button
                  type="button"
                  className="logout-desktop-btn"
                  onClick={this.onClickLogout}
                >
                  Sign In
                </button></Link>
              </li>
        
      </ul>
      {/*<button
        type="button"
        onClick={this.toggleShowNavItems}
        className="nav-mobile-close-button"
      >
        <AiFillCloseCircle />
  </button>*/}
    </div>
  )
  changeNavTabId = event => {
    this.setState({tab: event.target.value})
  }
  render() {
    const {tab,showNavItems} = this.state
    console.log(tab)
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
            <div style={{display:"flex",alignItems:"center", gap:"10px",alignSelf:"center"}}>
            <Link to="/" className="nav-link">
              <img
                className="nav-website-logo"
                src={gmmlogo}
                alt="website logo"
              />
            </Link>
            <ul className="Explore-program">
                    <Link to="/" className="nav-link">
                      <li className="nav-menu-item explore-program-item">Explore Programs</li>
                    </Link> 
                    <div className="display-content">
                        <div className="explore-program-main-container">
                        <ul className='NavcoursesBasicDoubtsTabsList'>
                        {NavbarCourseList.map(each=>{
                            const activeTab=each.id===tab ? "NavcourseBasicDoubtActiveTab" : ""
                            return(
                            <div className='NavcourseslistContainer'>
                              <li className= {`NavcoursesBasicDoubtsTabsListItem`} key={each.id}><button className={`NavcoursesBasicDoubtsTabsListItemButton ${activeTab}`} value={each.id} onMouseOver={this.changeNavTabId}>{each.tab}</button></li>
                              <AiOutlineArrowRight className="NavcoursesBasicDoubtsTabsListItemArrow"/>
                            </div>
                            )})}
                        </ul>
                          <div className='NavcoursesBasicDoubtsTabsDetailsContainer'>
                            <Mendix details={NavbarCourseList[tab]} />
                          </div>                                        
                        </div>                        
                    </div>
                </ul>
            </div>
            <div>
            <ul className="nav-menu">
                <Link
                to="/career"
                className="nav-link">
                <li className="nav-menu-item">Career Support</li>
              </Link>
              <Link
                to="/success"
                className="nav-link" >
                <li className="nav-menu-item">Success Stories</li>
              </Link>
              <Link
                to="/enterprise"
                className="nav-link">
                <li className="nav-menu-item">Corporate</li>
              </Link>
              {/* <Link
                to="/studyabroad"
                className="nav-link">
                <li className="nav-menu-item">Study Abroad</li>
              </Link> */}
              <Link
                to="/Hirefromus"
                className="nav-link">
                <li className="nav-menu-item">Hire From Us</li>
              </Link>
              <Link
                to="/aboutus"
                className="nav-link">
                <li className="nav-menu-item">About Us</li>
              </Link>
            </ul>
            </div>
            <div>
            <li style={{listStyleType:"none"}}>
                <Link to="/registration"><button
                  type="button"
                  className="logout-desktop-btn"
                  onClick={this.onClickLogout}>
                  Contact Us
                </button></Link>
              </li>
            </div>
          </div>
        </div>
        {showNavItems && this.renderNavItems()}
      </nav>
    )
  }
}

export default Header