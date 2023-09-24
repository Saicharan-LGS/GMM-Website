import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import photo1 from "../../Images/homecarousel/zeeshan.png"
import photo2 from "../../Images/5.png"
import photo3 from "../../Images/7.png"
import photo4 from "../../Images/homeimage4.png"


import CarouselCard from '../CarouselCard';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true,
    responsive:[
      {
        breakpoint:512,
        settings:{
          arrows:false
        }
        
      }
    ]
      
    
  };

  const CarouselList=[
    {id:1,link:"/english",head:"English Communication Blueprint",text:"Master The Art Of Effective Communication",description:"Fast Track Your Career By Becoming An Effective English Communicator",Image:photo1},
    {id:2,link:"/DataScience",head:"Data Science Engineer",text:"Join The Brigade Of Data Science Engineers",description:"Learn Data Science From Industry Experts",Image:photo2},
    {id:3,link:"/FullStackCourse",head:"Full Stack Web Developer",text:"Become A Full Stack Web Developer In 12 Weeks",description:"Accelerate & Super-Fast Your IT Career",Image:photo3},
    {id:4,link:"/DigitalMarkting",head:"Digital Marketing Expert",text:"Unleashing The Potential Of Digital Marketing",description:"Learn The Art Of Empowering Any Brand Online",Image:photo4},
]

const Carousel = () => {

    return (
          <Slider {...settings} className="carousel-slider-home">
            {CarouselList.map(each=>(<CarouselCard key={each.id} cardDetails={each} />))}
          </Slider>
  );
};

export default Carousel;


                  