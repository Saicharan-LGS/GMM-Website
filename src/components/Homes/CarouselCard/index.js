import { Component } from "react";
import "./index.css"
import {Link} from "react-router-dom"

class CarouselCard extends Component{
    render(){
        const {cardDetails}=this.props
        const {head,text,description,Image,link}=cardDetails
        return( 
            <div className="Carousel-card-main-container">
                <div className="Carousel-card-left-container">
                    <h1 className="Carousel-card-left-heading">{head}</h1>
                    <h5 className="Carousel-card-left-text">{text}</h5>
                    <p className="Carousel-card-left-desc">{description}</p>
                    <Link to={link} style={{textDecoration:"none"}}><button className="Carousel-card-left-button">Explore Now</button></Link>
                </div>
                <img src={Image} alt="" className="Carousel-card-right-image"/>
            </div>
        )
    }
}

export default CarouselCard

