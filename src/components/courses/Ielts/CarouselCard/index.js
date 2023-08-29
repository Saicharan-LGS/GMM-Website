import { Component } from "react";
import "./index.css"


class CarouselCard extends Component{
    render(){
        const {cardDetails}=this.props
        const {head,text,description,Image}=cardDetails
        return(
            <div className="Carousel-card-main-container">
                <div className="Carousel-card-left-container">
                    <h1 className="Carousal-card-heading-first-ielts">{head}</h1>
                    <h5 className="Carousal-card-second-heading-ielts">{text}</h5>
                    <button className="Carousal-card-button-ielts">{description}</button>
                </div>
                    <img src={Image} alt="ss" className="Carousel-card-right-image"/>
                    
            </div>
        )
    }
}

export default CarouselCard