import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import CarouselCard1 from './carousel.js'
import one from '../../Images/carousalcard1.png'
import two from '../../Images/carousalcard2.png'
import seven from '../../Images/carousalcard3.png'
import eight from '../../Images/carousalcard4.png'

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };

  const CarouselList=[
    {id:1, Image:one, head:"Bear Down Network",text:"Get access to the online directory of The University of Arizona alumni with features like job board, mentorship opportunities, and much more.",},
    {id:2, Image:two, head:"Wildcat Mentor Society",text:"Join transformative program to build strong professional network and get guidance from mentors",},
    {id:3, Image:seven, head:"Graduate Center",text:"A reliable resource for graduate and postdoctoral learners to enhance their academic and professional success.",},
    {id:4, Image:eight, head:"Lifelab",text:"Personalized career guidance platform to help learners with resume-building, cover letters, LinkedIn profiles, and more.",},
    {id:4, Image:eight, head:"Handshake",text:"Official job board and campus interviewing system for learners to access hiring opportunities, career prep resources, and communities.",},
    {id:4, Image:eight, head:"On-Campus Experience",text:"Interact with top-notch faculty and global peers at the University of Arizona campus in Tucson, ",},
]

const Carousel = () => {

    return (
        <div>
          <h1>Get The University of Arizona Advantage</h1>
          <Slider {...settings} className="study_abroad_carousal_list">
            {CarouselList.map(each=>(<CarouselCard1 key={each.id} cardDetails={each} />))}
          </Slider>
        </div>
  );
};

export default Carousel;