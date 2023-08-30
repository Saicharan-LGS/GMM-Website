import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css'; // Create this CSS file for styling



const StudyabroadCarousel = ({ slides }) => {
  return (
    <div className="study-abroad-carousel-main-container">
    <Carousel showThumbs={false} autoPlay={true} interval={2000} style={{color:"#196AE5"}}>
      {slides.map((slide, index) => (
        <div key={index} className="study-abroad-carousel-slide">
          <img src={slide.image} alt={`Slide ${index}`}  className="study-abroad-carousel-image"/>
          <div className="study-abroad-carousel-text">
            <h3 className="study-abroad-carousel-heading">{slide.Heading}</h3>
            <p className="study-abroad-carousel-sub-heading">{slide.Subheading}</p>
        </div>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default StudyabroadCarousel;