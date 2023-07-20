import { Component } from "react";
import "./index.css"
class ReviewCard extends Component{
    render(){
        const {reviewDetails}=this.props
        const {name,review,designation,time}=reviewDetails
        return(
            <div className="courseReviewCard">
                <div className="courseReviewFirstContainer">
                    <img className="courseReviewProfileImage" alt="profile" src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg" />
                    <div>
                        <p className="courseReviewName">{name}</p>
                        <p className="courseReviewDesignation">{designation}</p>
                    </div>
                    <img className="courseLinkedInImage" alt="linked" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" />
                </div>
                <div>
                    <p>{review}</p>
                    <p>{time}</p>
                </div>
            </div>
        )
    }
}

export default ReviewCard