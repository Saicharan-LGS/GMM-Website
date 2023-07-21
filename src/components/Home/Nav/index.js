import { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'

class Nav extends Component{
    render(){
        return(
            <div className="hover-popup">
            <ul className="nav-hover-un-ordered-list-container" id="submenu">
                 
                    <li className="nav-hover-list-container">
                        <Link to="/Fullstack" ><div>Full Stack Web development</div></Link>
                    </li>
                
                <Link to="/productmanagement"  className="nav-hover-reviews-list-link">
                    <li className="nav-hover-list-container">
                        <div>Polarian</div>
                    </li>
                </Link>
                <Link to="/customresourcemanagement" className="nav-hover-reviews-list-link">
                    <li className="nav-hover-list-container">
                        <div>Data Science</div>
                    </li>
                </Link>
                <Link to="/accountingfinanace" className="nav-hover-reviews-list-link">
                    <li className="nav-hover-list-container">
                        <div>Mendix</div>
                    </li>
                </Link>
            </ul>
            </div>
        )

    }

}




export default Nav