import { Component } from "react";
import "./index.css";
//import {Link} from "react-router-dom"

class SuccessCarousel extends Component {
  render() {
    const { cardDetails } = this.props;
    const { title, text1, text2, text3, image } = cardDetails;
    return (
      <div className="successCarousel-card-main-container">
        <div className="success-Carousel-card-left-container">
          <h1 className="success-Carousel-card-left-title">{title}</h1>
          <p className="success-Carousel-card-left-text">{text1}</p>
          <p className="success-Carousel-card-left-text">{text2}</p>
          <p className="success-Carousel-card-left-text">{text3}</p>
        </div>
        <img src={image} alt="" className="successCarousel-card-right-image" />
      </div>
    );
  }
}

export default SuccessCarousel;
