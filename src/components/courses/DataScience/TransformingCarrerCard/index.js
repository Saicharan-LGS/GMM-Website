import { Component } from "react";
import "./index.css"
class TransformingCard extends Component{
    render(){
        const {cardDetails}=this.props
        const {description,Role,name,previousRole,hike,company}=cardDetails
        return(
            <div className="courseTransformingcard">
                <div className="courseTransformingContainer1">
                    <p className="courseTransformingDescription">{description}</p>
                </div>
                <div className="courseTransformingContainer2">
                    <div className="courseTransormingContainer2-1">
                        <p className="courseTransformingName">{name}</p>
                        <p className="courseTransformingPrviousrole">{previousRole}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
 
                            <path d="M12 2v16" fill="none" stroke="orange" stroke-width="2" stroke-dasharray="5 2"/>
                            <path d="M7 10l5 5 5-5" fill="none" stroke="orange" stroke-width="2"/>
                        </svg>
                        <p className="courseTransformingRole">{Role}</p>
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