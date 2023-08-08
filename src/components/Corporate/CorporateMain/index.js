import React, { useState, useEffect } from 'react';
import { BsPuzzle,BsFileBarGraph } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
//import { AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';
import { LuAlarmClock } from 'react-icons/lu';
import { BannerLeft } from "../../courses/DataScience/BannerLeft"
import ReactPlayer from 'react-player'
import "./index.css";
import Header from "../../Homes/Headers"
import Footer from "../../Homes/Footer"
import EnterpriseBeginner from "../EnterpriceBegineer"
import picture1 from "../../Images/Corporates.jpg"
import punith from "../../Images/punith.jpg"
import mani from "../../Images/mani.jpg"
import syed from "../../Images/syed.jpeg"
import reddy from "../../Images/reddy.png"

const bannerRender = [
    "8.2 Million+ learners globally",
    'Awarded The "Best Corporate training platform,2023"',
    "45000+ employed upskilled"
];

const ourPatners=[
    {"title":"Anton Punith" , "subTitle":"Founder & Director Ozzitech Innovations","imageSrc":punith},
    {"title":"Mani Kumar" , "subTitle":"Founder, Director & CEO Innospire Group","imageSrc":mani},
    {"title":"Syed Rizwan" , "subTitle":"Founder & Director SRM 360 Degree Consulting","imageSrc":syed},
    {"title":"Allipuram Rajasekhar Reddy" , "subTitle":"CEO Brio Factors Inc & MD Brio Factors Technologies India Private Limited.. Partner Terra Liva Estates LLP","imageSrc":reddy}
]

const consultativeCardData = [
    {
      title: 'Aligning Learning Outcomes with Business Goals',
      listHead: 'Our Sales team will:',
      listItems: [
        'Understand your business goals',
        'Recognize target audience and current challenges',
        'Propose the best learning solution for your business',
      ],
      icon: <BsPuzzle size={45} color="#ffffff" />,
      backgroundColor: '#651cd5',
    },
    {
        title: 'Aligning Learning Outcomes with Business Goals',
        listHead: 'Our Sales team will:',
        listItems: [
          'Understand your business goals',
          'Recognize target audience and current challenges',
          'Propose the best learning solution for your business',
        ],
        icon: <CgNotes size={45} color="#ffffff"  />,
        backgroundColor: '#f1644c',
      },
      {
        title: 'Aligning Learning Outcomes with Business Goals',
        listHead: 'Our Sales team will:',
        listItems: [
          'Understand your business goals',
          'Recognize target audience and current challenges',
          'Propose the best learning solution for your business',
        ],
        icon: <BsFileBarGraph size={45} color="#ffffff"  />,
        backgroundColor: '#ffcc00',
      },
      {
        title: 'Aligning Learning Outcomes with Business Goals',
        listHead: 'Our Sales team will:',
        listItems: [
          'Understand your business goals',
          'Recognize target audience and current challenges',
          'Propose the best learning solution for your business',
        ],
        icon: <LuAlarmClock size={45} color="#ffffff"  />,
        backgroundColor: '#0084ff',
      },
    
];

const partnershipImages=[
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/stanford-business.png",
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/texas-austin.png",
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/great-lakes.png",
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/northwestern.png",
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/mit-idss.png",
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/iit-roorkee.png",
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/iiith.png",
    "https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/page-banners/home/univ-logos/nus.png"
]

const ScrolllingImages = [
    "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg",
    "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg",
    "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/02/HSBC-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png",
    "https://www.popsci.com/uploads/2022/06/07/squarespace-logo-maker-best-free-logo-design-software.jpg?auto=webp&width=800&crop=16:10,offset-x50",
    "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png",
    "https://cdn.cookielaw.org/logos/c2e51c50-8594-41cd-a02a-67907a0f7e2e/2f964a2f-44d3-4b77-b247-1774a38cb40a/3bc2e1ab-a3ef-4954-8e9a-69eef219f6c5/Genpact_Logo.jpg",
    "https://skillate-profile-pictures.s3.ap-south-1.amazonaws.com/org_237/5020af0a-289b-44d0-8e17-8b5ff1f0a985_Tiger_LOGO_new_main.png",
    "https://connect-assets.prosple.com/cdn/ff/WdcdY8IJZrwWmw6ImzA_uboAqko-obLkQ1fkBtT_aqI/1650724772/public/styles/scale_and_crop_center_974x309/public/2022-03/Logo-iit-madras480x480-2022.jpg?itok=bVtnp4G-",
    "https://media.designrush.com/agencies/130184/conversions/Deqode-logo-profile.jpg",
].map((image) => ({
    id: crypto.randomUUID(),
    image
}));


const mediaData=[
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},

]

const awardsData=[
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/entrepreneur-india-85ebb7e3c9d9ee92b054003fc26e55961a6749c5600122ab39c5ed8853fbc5ec.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/franchise-india-logo-1235c8c56282d461daedcf31fab142213b925c11d3515bcf62553b16183c5d2b.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/entrepreneur-india-85ebb7e3c9d9ee92b054003fc26e55961a6749c5600122ab39c5ed8853fbc5ec.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/edtech-review-ee1df5ed298be62500550dfccd7a3611ba1e00f8853049faf42816db56649693.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/assets/home-new/analytics-india-819a9661623205762d9a1b6669567381039a966d085dc03175d81dea039d912b.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/healthworld.png",content:"Conversational Wellness Bots: The Future of Mental Health Therapy",date:"14 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},
    {image:"https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/media-partners/investors-observer.png",content:"Wharton Online Kickstarts the First Cohort for Its 12-Week Advanced Digital Marketing and Growth Strategies Program in Collaboration With Great Learning",date:"12 June 2023"},

]

export default function Corporate() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // State to keep track of the current page index
const [currentPage, setCurrentPage] = useState(0);
const [awardsCurrentPage, setAwardsCurrentPage] = useState(0);
const awardsCardsPerPage = 5; // Number of cards to display per page

const cardsPerPage = 5; // Number of cards to display per page

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerRender.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleNextClick = () => {
        const totalCards = mediaData.length;
        const maxPage = Math.ceil(totalCards / cardsPerPage) - 1;
        const nextPage = Math.min(currentPage + 1, maxPage);
        setCurrentPage(nextPage);
      };
      
      // Function to handle the click of the "Prev" button
      const handlePrevClick = () => {
        const prevPage = Math.max(currentPage - 1, 0);
        setCurrentPage(prevPage);
      };

      const handleAwardsNextClick = () => {
        const totalAwardsCards = awardsData.length;
        const maxAwardsPage = Math.ceil(totalAwardsCards / awardsCardsPerPage) - 1;
        const nextAwardsPage = Math.min(awardsCurrentPage + 1, maxAwardsPage);
        setAwardsCurrentPage(nextAwardsPage);
      };
      
      const handleAwardsPrevClick = () => {
        const prevAwardsPage = Math.max(awardsCurrentPage - 1, 0);
        setAwardsCurrentPage(prevAwardsPage);
      };
      


    return (
        <div>
            <Header />
            <div className='enterprise-banner-section'>
                <div className='enterprise-banner-section-conatiner'>
                    <h1 className='enterprise-banner-section-title'>Delivering Learning Outcomes for Businesses</h1>
                    <p className='enterprise-banner-section-subtitle'>We are a lifelong learning partner for enterprises, helping them build skills in emerging technologies at scale</p>
                    <p className='enterprise-banner-section-change-text'>{bannerRender[currentIndex]}</p>
                    <button className='enterprise-banner-section-button'>Learn More</button>
                </div>
                <img className='enterprise-banner-section-image' src={picture1} alt="" />
            </div>
            <div className='enterprise-industry-section'> 
                <p className='enterprise-partners-section-conatiner-subtitle'>200+ Industry Wide</p>
                <h1 className='enterprise-partners-section-title'>Our Enterprise Partners</h1>
                <BannerLeft  images={ScrolllingImages} speed={10000} />
                <div className='enterprise-industry-section-certificate-conatiner'>
                    <img className='enterprise-industry-section-image' src="https://d1vwxdpzbgdqj.cloudfront.net/assets/enterprise-new/iso-logo-1f29cec08343f009564ec969b6e154b1d1175213c214de1f97c02859b055dea8.jpg" alt="" />
                    <div className='enterprise-industry-section-certificate-conatiner-content'>
                        <p className='enterprise-industry-section-certificate-heading'>Great Learning is ISO 27001 Certified</p>
                        <p className='enterprise-industry-section-certificate-content'>ISO/IEC 27001 is the world's best-known standard for information security management systems (ISMS) and their requirements. We at Great Learning have the industry best Data Privacy & Security practices, and the ISO 27001 certification from ISOQAR of UK is a testament of the same.</p>
                    </div>
                </div>
            </div>
            <div className='enterprise-partners-section-conatiner'>
                <p className='enterprise-partners-section-conatiner-subtitle'>Helping Our Partners</p>
                <h1 className='enterprise-partners-section-title'>Solutions To Empower Enterprises</h1>
                <div className='enterprise-partners-section-cards-conatiner'>
                    {ourPatners.map((partner, index) => (
                            <div key={index} className='enterprise-partners-section-card-conatiner'> 
                                <img className='enterprise-partners-section-card-image' src={partner.imageSrc} alt="" />
                                <div className="enterprise-partners-section-card-content">
                                    <h1 className='enterprise-partners-section-card-content-title'>{partner.title}</h1>
                                    <p className='enterprise-partners-section-card-content-sub-title'>{partner.subTitle}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className='enterprise-consultative-section-conatiner'>
                <p className='enterprise-partners-section-conatiner-subtitle'>Consultative Methodology</p>
                <h1 className='enterprise-partners-section-title'>How We Help Businesses Grow</h1>
                <div className='enterprise-consultative-section-cards-container'>
                    {consultativeCardData.map((card, index) => (
                    <div key={index} className='enterprise-consultative-section-card-container'>
                    <div className='enterprise-consultative-section-card-image-container' style={{ backgroundColor: card.backgroundColor }}>
                    {card.icon}
                    </div>
                    <div className='enterprise-consultative-section-card-container-content'>
                        <p className='enterprise-consultative-section-card-container-content-title'>
                        {card.title}
                        </p>
                        <p className='enterprise-consultative-section-card-container-content-list-head'>
                        {card.listHead}
                        </p>
                        <ol className='enterprise-consultative-section-card-container-content-ul'>
                        {card.listItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                        </ol>
                    </div>
                    </div>
                ))}
                </div>
                <button className='enterprise-partners-section-button'>TALK TO US</button>
            </div>
            <EnterpriseBeginner />
            <div className='enterprise-partnership-section-container'>
                <p className='enterprise-partners-section-conatiner-subtitle'>In Partnership With</p>
                <h1 className='enterprise-partnership-section-conatiner-title'>World's Top Universities</h1>
                <div className='enterprise-partnership-section-image-conatiner'>
                    {partnershipImages.map((imageUrl) => (
                        <img key={imageUrl} className='enterprise-partners-section-conatiner-image' src={imageUrl} alt="" />
                    ))}
                </div>
            </div>
            <div className='enterprise-business-section-container'>
                <div className='enterprise-business-section-container-content'>
                    <p className='enterprise-business-section-subtitle'>500+ enterprises use </p>
                    <h1 className='enterprise-business-section-title'>Great Learning for Business</h1>
                    <p className='enterprise-business-section-pargargh'>Get in touch with our team to discuss how Great Learning for Business can power your Enterprise Learning.</p>
                    <div>
                    <button className='enterprise-partners-section-button'>TALK TO US</button>
                    </div>
                </div>
                <div className="enterprise-business-section-player-conatiner">
                    <ReactPlayer url="https://youtu.be/fLOkfDNDZRY" controls  className="enterprise-business-section-video"/>
                </div>
            </div>
            {/* <div className='enterprise-media-section-container'>
                <p className='enterprise-business-section-subtitle'>Featured In</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 className='enterprise-business-section-title'>Media Spotlight</h1>
                <div className='enterprise-business-section-button-conatiner'>
                    {currentPage > 0 && (
                        <button className='enterprise-business-section-button-conatiner-button' onClick={handlePrevClick}><AiOutlineArrowLeft color='blue'  size={52}/></button>
                    )}
                    {currentPage < Math.ceil(mediaData.length / cardsPerPage) - 1 && (
                        <button className='enterprise-business-section-button-conatiner-button' onClick={handleNextClick}><AiOutlineArrowRight color='blue' size={52}/></button>
                    )}
                </div>
                </div>
                <div className='enterprise-media-section-cards-container'>
                    {mediaData
                        .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
                        .map((media, index) => (
                        <div key={index} className={`enterprise-media-section-container-card`}>
                            <img className='enterprise-media-section-container-card-image' src={media.image} alt='' />
                            <p className='enterprise-media-section-container-card-content'>{media.content}</p>
                            <p className='enterprise-media-section-container-card-date'>{media.date}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='enterprise-awards-section-container'>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h1 className='enterprise-business-section-title'>Awards and Recognitions</h1>
                <div className='enterprise-business-section-button-conatiner'>
                    {awardsCurrentPage > 0 && (
                    <button className='enterprise-business-section-button-conatiner-button' onClick={handleAwardsPrevClick}>
                        <AiOutlineArrowLeft color='blue' size={52} />
                    </button>
                    )}
                    {awardsCurrentPage < Math.ceil(awardsData.length / awardsCardsPerPage) - 1 && (
                    <button className='enterprise-business-section-button-conatiner-button' onClick={handleAwardsNextClick}>
                        <AiOutlineArrowRight color='blue' size={52} />
                    </button>
                    )}
                </div>
                </div>
                <div className='enterprise-media-section-cards-container'>
                    {awardsData.slice(awardsCurrentPage * awardsCardsPerPage, (awardsCurrentPage + 1) * awardsCardsPerPage).map((award, index) => (
                    <div key={index} className={`enterprise-media-section-container-card`}>
                        <img className='enterprise-awards-section-container-card-image' src={award.image} alt='' />
                        <p className='enterprise-media-section-container-card-content'>{award.content}</p>
                        <p className='enterprise-media-section-container-card-date'>{award.date}</p>
                    </div>
                    ))}
                </div>
            </div> */}
            <Footer />
        </div>
    );
}
