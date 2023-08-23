import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import picture19 from "../../picture/picture19.jpg";
import picture20 from "../../picture/picture20.jpg";
import picture21 from "../../picture/picture21.jpg";
import picture22 from "../../picture/picture22.jpg";
import picture23 from "../../picture/picture23.jpg";

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
    {id:1,head:"Experience learning at a world-class campus",text:"Master The Art Of Effective Communication",description:"Fast Track Your Career By Becoming An Effective English Communicator",Image:picture19},
    {id:2,head:"Living On-campus at Tucson, Arizona",text:"Join The Brigade Of Data Science Engineers",description:"Learn Data Science From Industry Experts",Image:picture20},
    {id:3,head:"International Student Services",text:"Become A Full Stack Web Developer In 12 Weeks",description:"Accelerate & Super-Fast Your IT Career",Image:picture21},
    {id:4,head:"600+ Student Clubs and Organizations",text:"Unleashing The Potential Of Digital Marketing",description:"Learn The Art Of Empowering Any Brand Online",Image:picture22},
    {id:4,head:"24X7 Technical Support",text:"Unleashing The Potential Of Digital Marketing",description:"Learn The Art Of Empowering Any Brand Online",Image:picture23},
]

const Carousel = () => {
    return (
          <Slider {...settings} className="carousel-slider1">
            {CarouselList.map(each=>(<CarouselCard key={each.id} cardDetails={each} />))}
          </Slider>
  );
};

export default Carousel;


                  