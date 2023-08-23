import { Component } from "react";
import "./index.css"

class CarouselCard1 extends Component{
    render(){
        const {cardDetails}=this.props
        const {head,text,description,Image,}=cardDetails
        return(
            <div className="slider_container_carousal">
                <img src={Image} alt="" className="curriculum_heading"/>
                <div className="Carousel-card-left-container">
                    <h1 className="curriculum_heading_second">{head}</h1>
                    <h5 className="study_abroad_paragraph_carousal">{text}</h5>
                    <p className="study_abroad_paragraph_carousal">{description}</p>
                </div>
            </div>
        )
    }
}

export default CarouselCard1