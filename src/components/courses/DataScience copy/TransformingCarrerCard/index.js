import { Component } from "react";
import {TbArrowDownSquare} from "react-icons/tb"
import "./index.css"
class TransformingCard extends Component{
    render(){
        const {cardDetails}=this.props
        const {description,role,name,previousRole,hike,company}=cardDetails
        console.log(cardDetails)
        return(
            <div className="courseTransformingcard">
                <div className="courseTransformingContainer1">
                    <p className="courseTransformingDescription">{description}</p>
                </div>
                <div className="courseTransformingContainer2">
                    <div className="courseTransormingContainer2-1">
                        <p className="courseTransformingName">{name}</p>
                        <p className="courseTransformingPrviousrole">{previousRole}</p>
                        <TbArrowDownSquare className="courseTransformingIcon"/>
                        <p className="courseTransformingRole">{role}</p>
                    </div>
                        <img className="courseReviewProfileImage" alt="profile" src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg" />        
                    </div>
                <div className="courseTransformingContainer3">
                    <p className="courseTransformingCompany">{company}</p>
                    <p className="courseTransformingHike">{hike}</p>
                </div>
            </div>
        )
    }
}

export default TransformingCard