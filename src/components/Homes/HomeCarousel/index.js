import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import photo4 from "../../Images/roycarousel.png"
import photo3 from "../../Images/6.png"
import photo1 from "../../Images/sai.png"
import photo5 from "../../Images/umarcarousel.png"

import CarouselCard from '../CarouselCard';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true
  };

  const CarouselList=[
    {id:1,link:"/english",head:"English Communication Blueprint",text:"Master The Art Of Effective Communication",description:"Fast Track Your Career By Becoming An Effective English Communicator",Image:photo5},
    {id:2,link:"/DataScience",head:"Data Science Engineer",text:"Join The Brigade Of Data Science Engineers",description:"Learn Data Science From Industry Experts",Image:photo4},
    {id:3,link:"/FullStackCourse",head:"Full Stack Web Developer",text:"Become A Full Stack Web Developer In 12 Weeks",description:"Accelerate & Super-Fast Your IT Career",Image:photo1},
    {id:4,link:"/DigitalMarkting",head:"Digital Marketing Expert",text:"Unleashing The Potential Of Digital Marketing",description:"Learn The Art Of Empowering Any Brand Online",Image:photo3},
]

const Carousel = () => {

    return (
          <Slider {...settings} className="carousel-slider-home">
            {CarouselList.map(each=>(<CarouselCard key={each.id} cardDetails={each} />))}
          </Slider>
  );
};

export default Carousel;


                  