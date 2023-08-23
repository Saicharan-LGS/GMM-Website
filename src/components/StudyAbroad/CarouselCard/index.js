import { Component } from "react";
import "./index.css"


class CarouselCard extends Component{
    render(){
        const {cardDetails}=this.props
        console.log(cardDetails)
        const {head,text,description,Image}=cardDetails
        return(
            <div className="Carousel-card-main-container">
                <div className="Carousel-card-left-container">
                    <h1 className="Carousel-card-left-heading">{head}</h1>
                    <h5 className="Carousel-card-left-text">{text}</h5>
                    <p className="Carousel-card-left-desc">{description}</p>
                </div>
                    <img src={Image} alt="ss" className="Carousel-card-right-image"/>
            </div>
        )
    }
}

export default CarouselCard