import { Component } from "react";
import "./index.css"
class ReviewCard extends Component{
    render(){
        const {reviewDetails}=this.props
        const {image,name,review,designation,time}=reviewDetails
        return(
            <div className="courseReviewCard">
                <div className="courseReviewFirstContainer">
                    <img className="courseReviewProfileImage" alt="profile" src={image} />
                    <div>
                        <p className="courseReviewName">{name}</p>
                        <p className="courseReviewDesignation">{designation}</p>
                    </div>
                    <img className="courseLinkedInImage" alt="linked" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" />
                </div>
                <div >
                    <p className="courseReviewDescripation">{review}</p>
                    <p className="courseReviewTime">{time}</p>
                </div>
            </div>
        )
    }
}

export default ReviewCard