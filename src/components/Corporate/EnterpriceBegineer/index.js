import './index.css'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import EnterpriseCard from '../EnterpriseCard'

import { EnterprisebeginnerList } from '../../Constant/ListData'
import {EnterpriseGraduateList} from '../../Constant/ListData'
import {EnterpriseEmployeesList} from '../../Constant/ListData'
import {EnterpriseContinuousLearnersList} from '../../Constant/ListData'

const Enterprisesettings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4, // Show 3 slides in large devices
    slidesToScroll: 1, 
    arrows: true,
    autoplay:true,  
    responsive: [
        {
            breakpoint: 1400,
            settings: {
            slidesToShow: 3, 
            },
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 2,
            
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            centerMode:true,
            variableWidth:true,
            arrows: false,
            },
        },
    ],
  }

function EnterpriseBeginner(){
    return(
        <div className="Enterprise-card-main-beginner-container">
            <div>
                <div className="Enterprise-card-main-text-container">
                    <p className="Enterprise-card-beginner-main-heading">For Beginners</p>
                    <h2 className="Enterprise-card-beginner-sub-heading">Foundation Skill Library</h2>
                </div>
                <div className="Enterprise-beginner-slider-container">
                        <Slider {...Enterprisesettings} className="Enterprise-beginner-slider">
                            {EnterprisebeginnerList.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
                        </Slider>
                </div>
            </div>
            <div className="Enterprise-video-container">
                <div className="Enterprise-video-sub-container">
                    <ReactPlayer url="https://www.youtube.com/embed/4PVnFsogysk" className="Enterprise-video-sub-container" controls />
                </div>
            </div>
            <div>
                <div className="Enterprise-card-main-text-container">
                    <p className="Enterprise-card-beginner-main-heading">For Fresh Graduates</p>
                    <h2 className="Enterprise-card-beginner-sub-heading">Freshers Academy</h2>
                </div>
                <div className="Enterprise-beginner-slider-container">
                        <Slider {...Enterprisesettings} className="Enterprise-beginner-slider">
                            {EnterpriseGraduateList.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
                        </Slider>
                </div>
            </div>
            <div className="Enterprise-review-main-container">
                <div className="Enterprise-review-of-recruiters">
                    <p className="Enterprise-review-of-recruiters-heading">Growth Story: Campus Recruiters</p>
                    <p className="Enterprise-review-of-recruiters-description">We helped 400+ freshers get trained in data science which eventually helped the business gain 2x in revenue and cut HR costs by INR 1.7 billion.</p>
                    <p className="Enterprise-review-of-recruiters-case-study">READ FULL CASE STUDY</p>
                </div>
                <div className="Enterprise-review-of-partner">
                    <p className="Enterprise-review-of-partner-heading">We highly recommend Great Learning for Business as a learning partner.</p>
                    <p className="Enterprise-review-of-partner-description">“Their attention to detail, innovative ideas, rigorous curricula, and commitment to delivering the highest quality of learning programs have been very impressive.”</p>
                    <p className="Enterprise-review-of-partner-analytics">VP,Analytics</p>
                </div>
            </div>
            <div>
                <div className="Enterprise-card-main-text-container">
                    <p className="Enterprise-card-beginner-main-heading">For Mid-Senior Level Employees</p>
                    <h2 className="Enterprise-card-beginner-sub-heading">Digital Skills Certificate</h2>
                </div>
                <div className="Enterprise-beginner-slider-container">
                        <Slider {...Enterprisesettings} className="Enterprise-beginner-slider">
                            {EnterpriseEmployeesList.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
                        </Slider>
                </div>
            </div>
            <div className="Enterprise-review-main-container">
                <div className="Enterprise-review-of-recruiters">
                    <p className="Enterprise-review-of-recruiters-heading">Growth Story: Campus Recruiters</p>
                    <p className="Enterprise-review-of-recruiters-description">We helped 400+ freshers get trained in data science which eventually helped the business gain 2x in revenue and cut HR costs by INR 1.7 billion.</p>
                    <p className="Enterprise-review-of-recruiters-case-study">READ FULL CASE STUDY</p>
                </div>
                <div className="Enterprise-review-of-partner">
                    <p className="Enterprise-review-of-partner-heading">We highly recommend Great Learning for Business as a learning partner.</p>
                    <p className="Enterprise-review-of-partner-description">“Their attention to detail, innovative ideas, rigorous curriculam, and commitment to delivering the highest quality of learning programs have been very impressive.”</p>
                    <p className="Enterprise-review-of-partner-analytics">VP,Analytics</p>
                </div>
            </div>
            <div>
                <div className="Enterprise-card-main-text-container">
                    <p className="Enterprise-card-beginner-main-heading">For Continuous Learners</p>
                    <h2 className="Enterprise-card-beginner-sub-heading">Premium Executive Programs</h2>
                </div>
                <div className="Enterprise-beginner-slider-container">
                    <Slider {...Enterprisesettings} className="Enterprise-beginner-slider">
                            {EnterpriseContinuousLearnersList.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
                    </Slider>
                </div>
            </div>
        </div>
        
    )
}
export default EnterpriseBeginner