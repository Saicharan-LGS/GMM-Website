import './index.css'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import EnterpriseCard from '../EnterpriseCard'

import {LiaBullhornSolid} from 'react-icons/lia'
import {MdWorkOutline} from 'react-icons/md'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {HiOutlineUsers} from 'react-icons/hi'
import {PiSimCard} from 'react-icons/pi'
import {GrFormCheckmark} from 'react-icons/gr'
const Enterprisebeginner = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Learning-Centric Culture",enterpriseDesc:"Over 700 courses in emerging technologies, offering more than 1,000 hours of video content.",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Strengthen Your Workforce",enterpriseDesc:"Over 80 meticulously curated courses designed to assist employees in advancing their skills based on career paths.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Evaluate Organizational Learning Well-being",enterpriseDesc:"Obtain practical insights using dashboards and learner metrics to pinpoint High-Potential (HIPO) individuals and critical successors.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Gain Knowledge from Seasoned Industry Professionals",enterpriseDesc:"Enjoy Webinars and Masterclasses Featuring Industry Pioneers.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Expert-Crafted Courses",enterpriseDesc:"Materials developed by distinguished Ivy League faculty and industry authorities.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Tailored Learning Journey",enterpriseDesc:"Customized Learning Management System (LMS) and Certificates to Recognize and Reward Employees in Line with Our R&R Policy.",color:"#2FA75F"}

]

const EnterpriseGraduate = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Pre-Commencement Training Program",enterpriseDesc:"Initiate training for new hires prior to their onboarding, featuring a comprehensive 12-week curriculum.",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Enhanced Operational Efficiency",enterpriseDesc:"Trust the professionals and enable your employees to concentrate on the core aspects of your business.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Cost-Efficient Results",enterpriseDesc:"Achieve a minimum savings of 75% compared to your current campus hiring and training model.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Explore a Selection of 6+ Domains",enterpriseDesc:"Including Data Science, AI, Machine Learning, Full Stack Development, Cybersecurity, and Cloud Computing.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Attain a 100% Completion Rate",enterpriseDesc:"Ensure your learners are trained according to your business schedule without any delays.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Assess Freshmen Engagement",enterpriseDesc:"Recognize the percentage of disengaged learners early on to facilitate resource allocation.",color:"#2FA75F"}

]


const EnterpriseEmployees = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Over 35 Job-Role Specific Certifications",enterpriseDesc:"Offering programs across 7+ domains including AI/ML, Cloud Computing, Data Science, Cybersecurity, and Full Stack Development.",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Bespoke Short Programs",enterpriseDesc:"Obtain tailored learning journeys spanning 3-6 months, aligned with your business needs.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Reduce Attrition and Enhance Staff Retention",enterpriseDesc:"Leverage your existing workforce to lower recruitment expenditures and expedite the achievement of business objectives.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Harness Emerging Technologies",enterpriseDesc:"Elevate your workforce's proficiency in cutting-edge technologies and gain a competitive edge.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Certification from Prestigious Global Academies",enterpriseDesc:"Our academic team comprises over 3,000 Ivy League faculty and industry experts.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Personalized Learning Experience",enterpriseDesc:"Co-branded LMS & certificates to reward employees with R&R Policy.",color:"#2FA75F"}

]

const EnterpriseContinuousLearners = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Global Programs",enterpriseDesc:"Offer Your Team a Range of Options with 35+ Programs from Global Academies",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Reward High-Achieving Talent",enterpriseDesc:"Support employees who contribute significantly to your business outcomes by sponsoring their participation in these programs.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Provide Growth Opportunities",enterpriseDesc:"Empower employees to enroll in premium programs and receive reimbursements as part of our Education Policy.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Facilitate Skill Advancement",enterpriseDesc:"Explore internal career progression opportunities to remain current and valuable within the industry.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Track Learner Progress",enterpriseDesc:"Provide insights to both the organization and the learner for enhanced learning patterns.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Committed Program Assistance",enterpriseDesc:"Provide dedicated support to employees to encourage high engagement and completion rates.",color:"#2FA75F"}

]

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
                    <h2 className="Enterprise-card-beginner-sub-heading">Fundamental Skill Resource</h2>
                </div>
                <div className="Enterprise-beginner-slider-container">
                        <Slider {...Enterprisesettings} className="Enterprise-beginner-slider">
                            {Enterprisebeginner.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
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
                            {EnterpriseGraduate.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
                        </Slider>
                </div>
            </div>
            <div className="Enterprise-review-main-container">
                <div className="Enterprise-review-of-recruiters">
                    <p className="Enterprise-review-of-recruiters-heading">Success in Campus Recruitment: Our Impact</p>
                    <p className="Enterprise-review-of-recruiters-description">We've supported over 400 recent graduates in mastering data science, leading to a twofold increase in revenue and a reduction of INR 1.7 billion in HR expenses for our business.</p>
                    <p className="Enterprise-review-of-recruiters-case-study">READ FULL CASE STUDY</p>
                </div>
                <div className="Enterprise-review-of-partner">
                    <p className="Enterprise-review-of-partner-heading">We strongly endorse GloriousMindMine for Business as a learning collaborator.</p>
                    <p className="Enterprise-review-of-partner-description">“Their meticulous approach, inventive concepts, comprehensive curricula, and unwavering dedication to delivering top-notch learning initiatives have left a remarkable impression.”</p>
                    <p className="Enterprise-review-of-partner-analytics">VP,Analytics</p>
                </div>
            </div>
            <div>
                <div className="Enterprise-card-main-text-container">
                    <p className="Enterprise-card-beginner-main-heading">For Mid-Senior Level Employees</p>
                    <h2 className="Enterprise-card-beginner-sub-heading">Certificate in Digital Skills</h2>
                </div>
                <div className="Enterprise-beginner-slider-container">
                        <Slider {...Enterprisesettings} className="Enterprise-beginner-slider">
                            {EnterpriseEmployees.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
                        </Slider>
                </div>
            </div>
            <div className="Enterprise-review-main-container">
                <div className="Enterprise-review-of-recruiters">
                    <p className="Enterprise-review-of-recruiters-heading">Success Story: Mid-Senior Level Employees</p>
                    <p className="Enterprise-review-of-recruiters-description">We revolutionized the Data Analytics & Modeling workforce, resulting in a threefold increase in revenue and a threefold boost in productivity for the business.</p>
                    <p className="Enterprise-review-of-recruiters-case-study">Read the Complete Case Study</p>
                </div>
                <div className="Enterprise-review-of-partner">
                    <p className="Enterprise-review-of-partner-heading">GloriousMindMine for Business has been a valued learning collaborator for several years.</p>
                    <p className="Enterprise-review-of-partner-description">“Their meticulous approach, creative thinking, rigorous course content, and dedication to providing top-quality customized learning programs have left a strong impression. The mentor-led sessions consistently garner excellent reviews and feedback.”</p>
                    <p className="Enterprise-review-of-partner-analytics">VP,Analytics</p>
                </div>
            </div>
            <div>
                <div className="Enterprise-card-main-text-container">
                    <p className="Enterprise-card-beginner-main-heading">For Continuous Learners</p>
                    <h2 className="Enterprise-card-beginner-sub-heading">Exclusive Executive Programs</h2>
                </div>
                <div className="Enterprise-beginner-slider-container">
                    <Slider {...Enterprisesettings} className="Enterprise-beginner-slider">
                            {EnterpriseContinuousLearners.map(each=>(<EnterpriseCard key={each.id} cardDetails={each} />))}
                    </Slider>
                </div>
            </div>
        </div>
        
    )
}
export default EnterpriseBeginner