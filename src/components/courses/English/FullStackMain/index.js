import {Component} from 'react'
import { BannerLeft } from "../../DataScience/BannerLeft";
import {BannerRight} from "../../DataScience/BannerRight"
import DoubtItem from '../../DataScience/DoubtItem';
import FlexibleProgram from "../../DataScience/FlexibleProgram"
import WhyGloriousMindMineCard from '../../DataScience/WhyGMMCard';
import {SiGoogleclassroom} from "react-icons/si"
import {AiOutlineSchedule,AiOutlineCheck,AiOutlineMessage,AiOutlineProject,AiOutlineVideoCamera,AiOutlineQuestionCircle,AiOutlineFileAdd} from "react-icons/ai"
import {MdOutlineAccessAlarms} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {BiTargetLock} from "react-icons/bi"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TransformingCard from "../../DataScience/TransformingCarrerCard"
import FullStack from "../FullStack"
import ReviewCard from '../../DataScience/ReviewCard';
import Intro from '../Introduction'
import Header from '../../../Homes/Headers'
import Footer from '../../../Homes/Footer'
import {Link} from "react-router-dom"
import founder from "../../../Images/founder.png"
import "../../DataScience/FullStackMain/index.css"

import roy from '../../../Images/roy.png'
import Akhila from '../../../Images/Akhila.png'
import saicharan from '../../../Images/saicharan.jpg'
import triveni from '../../../Images/triveni.jpg'
import venu from '../../../Images/venuprofile.jpg'
import umar from '../../../Images/umarprofile.png'
import nagesh from '../../../Images/nagesh.jpg'
import chandana from '../../../Images/chandana.jpg'
import prashanth from '../../../Images/prashanth.png'

const learnersReviews=[
{id:1,image:roy,name:"Vashni Roy",designation:"Senior Developer At Cognizant",review:"I’m elated to share that I’m starting a new journey as Senior Developer at Cognizant! I would like to thank GloriousMindMine for digging out the potential in me and providing the wonderful platform to upskill myself. It is a privilege for me to be able to get guidance and learn from you, Swapnil Jain and Yagnik Pandya. A big thanks to Lalita Choudhary for motivating and believing me throughout this exciting journey. This would not have been possible without your guidance. Kudos to our effort! Laveena V Kukreja Monica Balakrishna Laheri Reddy thank you for helping out me in each and every step of my journey. Looking ahead toward a wonderful journey and professional growth! I'm excited to start my new job!",time:"06:30PM, 18th Aug"},
{id:2,image:Akhila,name:"Akhila",designation:"Data Analyst At TCS",review:"Hello All, I’m happy to share that I’m starting a new position as Data Analyst At TCS! Thanks to GloriousMindMine team for helping me in my career transition",time:"06:00 PM, 11th Apr"},
{id:3,image:saicharan,name:"Saicharan",designation:"Fullstack Developer At Capgemini, India",review:"I’m happy to share that I’m starting a new position as Fullstack Developer at Capgemini, India! Big shoutout to GloriousMindMine for providing the platform to prepare and equip myself to get here. Thanks to my mentors, Swapnil Jain and Varun Nayyar, for their game-changing support, guidance and insights. I'm very grateful for the much-needed assistance and support offered by Nihal Sumesh, Lalita Choudhary, Kinjal Sengupta and my teammates, Mahima Phalkey and Lovejeet Singh, in this journey. Thanks to Team Capgemini for the warm onboarding and the opportunity to help build a better future for the people. Very thrilled and excited!",time:"07:00 PM, 9th Jan"},
{id:4,image:triveni,name:"Triveni",designation:"Salesforce Admin At Wipro",review:"I have some exciting news to share! I have accepted a new position as the Salesforce Admin At Wipro. It has been a fruitful process, and I could not have done it without the learnings from GloriousMindMine. I am very excited to start this new journey",time:"07:15 PM, 11th Apr"},
{id:5,image:venu,name:"Venu",designation:"Mendix Developer At LGS",review:"Hello connections! I’m happy to share that I’ve joined as Mendix Developer At LGS. I would like to thank Mansi T. for a very warm welcome. Thank you Swapnil Jain, Yagnik Pandya, Alok Anand, Vikash Srivastava, Shivam Dutta, Lalita Choudhary, Monica Balakrishna and Varzaan Rana for your constant support and motivation throughout this learning journey of Mendix at GloriousMindMine.",time:"05:00 PM, 16th May"},
{id:6,image:umar,name:"Umar",designation:"Polarion Developer At LGS",review:"I am happy to share that I received my course completion certificate from GloriousMimdMine the journey was not so hard nor easy. I would say it's smooth because of the quality course content and risk-free education. Thank you, Vikash Srivastava and Shivam Dutta for putting together such an amazing course and a wonderful learning experience. Thanks to Alok Anand and Ravi Kumar Gupta for placement support Lalita Choudhary and Monica Balakrishna for student coordination. And lastly thank you career coach Tanishk Sachdeva and champion mentor Shubhankit Sirvaiya for your guidance and motivation during the placement journey. I hope to continue with the community and contribute learning experience as GloriousMindMine Alumni.",time:"12:45 PM, 14th Feb"},
{id:7,image:nagesh,name:"Nagesh",designation:"Digital Marketing analyst at Genpact",review:"I am excited to share that I joined as Digital Marketing analyst at Genpact. As I reflect on my first week, I am thankful to Mounika Arnipalli, Ajit Kumar Sahu, Ridhi Bansal and Shruthi Treasa Jose for the smooth on-boarding and warm welcome. And while I will always value my learning and the network that I made at GloriousMimdMine. It has been an adventure to explore the digital marketing field and I am looking forward to learn, explore and hit milestones????.",time:"04:00 PM, 17th Mar"},
{id:8,image:chandana,name:"Chandana",designation:"Software Developer At EXL",review:"Happy to share that, recently I have joined #EXL #Services as a #Softwaredeveloper. Special Thanks to my mentor Nayan Dharamshi and all my friends from #GloriousMindMine for their support and guidance. Thank you #EXL for such a warm welcome. Glad to be a part of the EXL Family. Looking forward to being full of new learnings and a wonderful journey at EXL.",time:"11:45 AM, 13th Jan"},
{id:9,image:prashanth,name:"Prashanth",designation:"Software Engineer at IBM",review:"Hello family!! I'm excited to announce that I have joined as Software Engineer at IBM .I am excited to learn and grow In this role .I like to thank Ajit Kumar Sahu for smooth recruiting and onboarding process ,also thank you my friend Ankit S. for always supporting and motiving me. I couldn't be more excited to start this next chapter of my career. Special thanks to Sagnik Ganguly and to one of the best data science learning platform GloriousMimdMine",time:"10:30 AM, 16th Dec"},
]

const basicDoubtsTabsList = [
    {tabId: 'Admissions', displayText: 'Admissions'},
    {tabId: 'Learning', displayText: 'Learning'},
    {tabId: 'PayAfterPlacement', displayText: 'Pay After Placement'},
    {tabId: 'Placements', displayText: 'Placements'},
  ]

  const basicDoubtsQuestionAnswerList=[
    {id:1,question:"Who can enrol in Glorious's courses?",answer:"Glorious's courses are open to anyone willing to learn Data Science or Web Development. There is no limitation with respect to your educational background or stage of study. The courses are especially beneficial for people who have jobs or other commitments and therefore want to learn Data Science or Web Development from scratch at their own pace. Also, if you have already done some courses and want our placement services, you can enrol in any of the two courses and be eligible for placements just after clearing the competency tests. To summarise, the courses are suitable for everyone, whether you are a beginner with no coding background or you have done some courses in either Data Science or Web Development.",category:"Admissions"},
    {id:2,question:"What is a Cohort?",answer:"A cohort is just another term used for a batch.",category:"Admissions"},
    {id:3,question:"Is there any selection test for enroling in Glorious's courses?",answer:"No, you don't have to take any test to enrol in the Full Stack courses that we offer.",category:"Admissions"},
    {id:4,question:"Is it mandatory to opt for the Glorious Career Track?",answer:"No, it is not mandatory to opt for Glorious Career Track. However, we strongly recommend opting for Glorious Career Track in order to get placed amongst our 700+ hiring partners.",category:"Admissions"},
    {id:5,question:"What if I am not able to clear a particular module?",answer:"You will get multiple attempts to clear a module.",category:"Learning"},
    {id:6,question:"What is the duration of the courses Glorious offers?",answer:"The Full Stack courses that Glorious offers has a flexible duration. It can be completed between 1-12 months depending upon your commitment and prior knowledge of data science and web development concepts. For example, if you have already done some courses and are confident about your knowledge, you can directly attempt the competency tests. But if you are new to these fields, it may take 8-12 months for mastering all the concepts to become job-ready.",category:"Learning"},
    {id:7,question:"How will I be evaluated during the my learning journey?",answer:"Once you learn and master a particular module, you will be required to attempt a set of tests which includes Competency Challenges, Capstone Projects, and Mentored Mock Interviews. Once you pass all of these, you will be considered competent. Overall, you have to master 6 modules in Full Stack Data Science and 5 modules in Full Stack Web Development.",category:"Learning"},
    {id:8,question:"How much attendance is mandatory for completing any of the 2 courses?",answer:"There is no mandatory attendance policy for the courses we offer. You can attend live sessions or can learn at your own pace by watching recorded lectures.",category:"Learning"},
    {id:9,question:"What are the criteria for passing the Pro Program?",answer:"Passing a module means completing Competency Challenges, Capstone Projects and Mentored Mock Interview.",category:"Learning"},
    {id:10,question:"Will I be given certificate upon course completion?",answer:"Yes, post completion, you will get a certificate post completion of your course. Additionally, you will also get completion certificate for successfully clearing milestone competency tests.",category:"Learning"},
    {id:11,question:"How will the doubts be resolved if I'm learning at my own pace?",answer:"In case you have any doubts or difficulties in learning, you can post your questions on the ‘Discussion forum’ or ‘Community channel’ and it will be resolved quickly. You’ll get exposure to those right after enrolling in the program.",category:"Learning"},
    {id:13,question:"How will the doubts be resolved if I'm learning through Live courses?",answer:"In the Live courses, along with discussion forums and community platforms, you can also ask your doubts on the go in your live classes. In addition to that, there will also be a Live chat room open for doubt clarification on your learning platform.",category:"Learning"},
    {id:12,question:"What is an Income Share Agreement?",answer:"Income Share Agreement or ISA is a legal agreement, which ensures that students share a pre-determined part of their income as Career Services Fee. Our career services fee for Certification Program is INR 10,000 per month up to 15 months if you get a job between 3-5LPA. INR 10,000 per month up to 24 months if you get a job above 5 LPA. You only need to sign ISA if you become eligible and opt to for Glorious Career Services.",category:"PayAfterPlacement"},
    {id:14,question:"When do students sign the ISA?",answer:"The students are required to sign the ISA once they have completed their learning, earned the course completion certificate and have opted for the assured career services through Glorious.",category:"PayAfterPlacement"},
    {id:15,question:"When do I have to start paying as per the ISA?",answer:"You will start paying from the time you get your first salary after joining a high-paying job. The threshold salary has been kept at 3 LPA for the Data Science program and the Web Development program. You don't pay us anything until you get a job that pays above the minimum threshold salary.",category:"PayAfterPlacement"},
    {id:16,question:"Can I see a copy of the ISA?",answer:"Yes, of course. As you go through our ISA signing process, you will be counseled on various aspects of the ISA and a copy of the same will be made available to you at the end.",category:"PayAfterPlacement"},
    {id:17,question:"How will Glorious verify my income?",answer:"As per the ISA, you will be legally bound to furnish all the income relevant documents such as Offer Letter, Salary Slips, Income Tax Returns, Bank Statements, etc. to Glorious.",category:"PayAfterPlacement"},
    {id:18,question:"Will I have to pay if I quit the job or get fired?",answer:"If you voluntarily quit your job, your payment will continue. However, in cases of forced termination, your payment will be paused and we will put our best efforts to get you another job as soon as possible. However, any such arrangement will involve a third party (a NBFC) and a non-payment window will be provided only after proper verification.",category:"PayAfterPlacement"},
    {id:19,question:"What will happen if I do not pay any EMI?",answer:"At Glorious, fee collection happens through a NBFC partner. In case of voluntary non-payments, the NBFC will initiate legal action to recover the pending payments. Also, this will negatively impact your credit score.",category:"PayAfterPlacement"},
    {id:20,question:"When will the placement process start?",answer:"Once you clear the Foundation Track you will earn a certificate of completion. Post that you will be eligible to participate in our placement drive called Glorious.",category:"Placements"},
    {id:21,question:"What are competency tests?",answer:"Competency challenges are meant to solidify your theoretical learning.",category:"Placements"},
    {id:22,question:"How many hiring partners does Glorious have?",answer:"We currently have partnerships with 700+ companies ranging from high growth startups to large MNCs. However, owing to our relentless pursuit, this number keeps increasing as we have been constantly expanding our network of hiring partners.",category:"Placements"},
    {id:23,question:"What if I want to get a job only in my hometown?",answer:"Your job location is solely based on the opportunities available with our hiring partners. We do not commit anything with respect to a preferential job location",category:"Placements"},
    {id:24,question:"Does Glorious provide job-switching assistance?",answer:"Yes, we believe in making a long-term relationship with our students. We will help you in switching jobs through our strong alumni network.",category:"Placements"},
    {id:25,question:"How do you ensure placements for students who come from non-technical background?",answer:"Well, at Glorious, we have an equivalent number of students from non-technical backgrounds who are enthusiastic about learning Data Science & Blockchain, and building a career in the same field from scratch. Therefore, our curriculum is designed in such a way that it caters to the doubts of a layman as well as an expert in this subject. So, do not hesitate to begin your learning journey because you’ll be taught everything beginning from the high school concepts to the advanced level. And once you complete the program, you will have sufficient knowledge to tackle the interviews as well as have hands-on experience in multiple projects which you can add to your profile.",category:"Placements"},
]
const flexibleProgramList=[
    {id:1,Image:SiGoogleclassroom,question:"What if I miss a class?",answer:"Our class timings are 8 PM to 10:30 PM. In case you miss a class, you can watch the recording later. If you miss multiple classes, you can switch to another Cohort."},
    {id:2,Image:AiOutlineSchedule,question:"What if I am not able to manage my job or schedule with the class timings?",answer:"You can complete the program at your own pace through lecture recordings and learning materials."},
    {id:3,Image:MdOutlineAccessAlarms,question:"Do I get lifetime access?",answer:"You will have lifetime access to the entire course content, including recordings, materials, assessments, and projects."},
    {id:4,Image:AiOutlineQuestionCircle,question:"How will I resolve my doubts?",answer:"You can get your doubts resolved by connecting with our subject matter experts over text or video call!"}
]

const whyGloriousMindMineList=[
    {id:0,Image:AiOutlineFileAdd,description:"45 Days Full-fledged Course"},
    {id:1,Image:AiOutlineVideoCamera,description:"365 Days Access Licence: Recoreded Videos"},
    {id:2,Image:AiOutlineProject,description:"Assessments & Exercises"},
    {id:3,Image:AiOutlineMessage,description:"45 days Whatsapp Support"},
    {id:4,Image:CgProfile,description:"Mock interviews with dedicated Mentors "},
    {id:5,Image:BiTargetLock,description:"Course Would Unlocked On a daily basis"},
]

const ScrolllingImages1 = [
    "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg",
    "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg",
    "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/02/HSBC-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png",
    "https://www.popsci.com/uploads/2022/06/07/squarespace-logo-maker-best-free-logo-design-software.jpg?auto=webp&width=800&crop=16:10,offset-x50",
    "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png",
    "https://cdn.cookielaw.org/logos/c2e51c50-8594-41cd-a02a-67907a0f7e2e/2f964a2f-44d3-4b77-b247-1774a38cb40a/3bc2e1ab-a3ef-4954-8e9a-69eef219f6c5/Genpact_Logo.jpg",
    "https://skillate-profile-pictures.s3.ap-south-1.amazonaws.com/org__237/5020af0a-289b-44d0-8e17-8b5ff1f0a985__Tiger_LOGO_new_main.png",
    "https://connect-assets.prosple.com/cdn/ff/WdcdY8IJZrwWmw6ImzA_uboAqko-obLkQ1fkBtT_aqI/1650724772/public/styles/scale_and_crop_center_974x309/public/2022-03/Logo-iit-madras480x480-2022.jpg?itok=bVtnp4G-",
    "https://media.designrush.com/agencies/130184/conversions/Deqode-logo-profile.jpg",
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));
  const ScrolllingImages2 = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Effective_Programming_for_America_logo.svg/1200px-Effective_Programming_for_America_logo.svg.png",
    "https://apn-portal.my.salesforce.com/servlet/servlet.ImageServer?id=0158a000002wx2yAAA&oid=00DE0000000c48tMAA",
    "https://www.wipro.com/content/dam/nexus/en/wipro-logo-new-og-502x263.jpg",
    "https://d1flzashw70bti.cloudfront.net/next-gen/images/zingbus-name-logo.webp",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    "https://t3.ftcdn.net/jpg/05/08/94/32/360_F_508943232_vkwcVPvBPHUPDWLHAZBsSHsTCiXHOHYt.jpg",
    "https://cdn.icon-icons.com/icons2/2699/PNG/512/infor_logo_icon_167926.png",
    "https://d3an9kf42ylj3p.cloudfront.net/uploads/2016/11/del.jpg",
    "https://static.wixstatic.com/media/72c0b2_d120a6e8bf854f9fbcfc44b1856b598e~mv2.jpg/v1/fill/w_640,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/72c0b2_d120a6e8bf854f9fbcfc44b1856b598e~mv2.jpg",
    "https://images-platform.99static.com//cU0qBaO133OuhkyLKG1l25ZX9As=/138x129:869x860/fit-in/590x590/99designs-contests-attachments/84/84068/attachment_84068886",
    "https://static.wixstatic.com/media/72c0b2_555566b6e49a48a09cf53b301fce6769~mv2.jpg/v1/fill/w_640,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/72c0b2_555566b6e49a48a09cf53b301fce6769~mv2.jpg"
].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));
  const ScrolllingImages3 = [
    "https://1000logos.net/wp-content/uploads/2023/03/HCL-Logo-1976.png",
    "https://mma.prnewswire.com/media/633364/Mindtree_Logo.jpg?p=facebook",
    "https://allvectorlogo.com/img/2016/10/virtusa-logo.png",
    "https://eetdbuyersguide.com/logo_rampq/logo_304_6t91202u70zjgo0.jpg",
    "https://dcassetcdn.com/design_img/63266/35394/35394_1143276_63266_image.png",
    "https://mma.prnewswire.com/media/1082756/Mitratech_Logo.jpg?p=facebook",
    "https://1000logos.net/wp-content/uploads/2021/05/Verizon-logo.png",
    "https://images.mid-day.com/images/images/2021/jun/Uplers_d.jpg",
    "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/09211217/Adobe-1024x1024.png",
    "https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png",
].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));
  // eslint-disable-next-line
  const TransformingCarrerList=[
    {id:1, image:Akhila,description:"If I were to name one value for which Glorious Mindmine stands for, it would be 'Excellence'.",name:"Akhila",previousRole:"Non-Technical",Role:"Data Anaylst",company:"TCS",hike:"70% hike"},
    {id:2, image:saicharan, description:"Having the scope to learn and grow amidst the chaos of the pandemic was quite a novel experience.",name:"Sai Charan",previousRole:"Civil Graduate",Role:"Full Stack Developer",company:"Capgemini",hike:"70% hike"},
    {id:3, image:triveni,description:"Mock interviews are great because you get honest, detailed, and timely feedback from industry experts.",name:"Triveni",previousRole:"Non-Tech background",Role:"Salesforce Admin",company:"Wipro",hike:""},
    {id:4, image:umar, description:"A structured curriculum with quality content makes this program stand out.",name:"Umar",previousRole:"Degree Graduate",Role:"Polarian Developer",company:"LGS",hike:"75% hike"},
    {id:5, image:nagesh, description:"I was not financially sound, so Glorious Mindmine proved to be very cost-effective and empowering.",name:"Nagesh",previousRole:"Non-Tech background",Role:"Digital Marketing Specialist",company:"Genpact",hike:"120% hike"},
    {id:6, image:venu, description:"I was not financially sound, so Glorious Mindmine proved to be very cost-effective and empowering.",name:"Venu",previousRole:"Degree Graduate",Role:"Mendix Developer",company:"LGS",hike:"50% hike"},
    {id:7, image:roy, description:"My experience at Glorious Mindmine was fabulous, and I’ll always be thankful to the entire Glorious Mindmine team.",name:"Vashni Roy",previousRole:"Junior Developer",Role:"Senior Developer",company:"Cognizant",hike:""},
]
  const tuitionFeeList=["100+ Live Classes REcordings and real time doubt resolution",
    "4 Accountability Sessions","1:1 Mentorship and dedicated career coach","Daily Action Item For Results",
    "Access to member only community of 20K+ Learners",
    "50 Free Speech Pattern Exercises"
  ]


class English extends Component{
    state={basicDoubtTab:basicDoubtsTabsList[0].tabId}

    changeBasicDoubtTabId = event => {
        this.setState({basicDoubtTab: event.target.value})
      }
    
      getTabApps = () => {
        const {basicDoubtTab} = this.state
        const activeTabList = basicDoubtsQuestionAnswerList.filter(each => each.category === basicDoubtTab)
        return activeTabList
        }
      render() {
        const {basicDoubtTab}=this.state
        const lista=this.getTabApps();
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3, // Show 3 slides in large devices
            slidesToScroll: 1,   
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                    slidesToShow: 2, // Show 1 slide in small devices (e.g., tablets and mobiles)
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 1, // Show 1 slide in small devices (e.g., tablets and mobiles)
                    },
                },
            ],
          }
        return(
            <>
                <Header/>
            
            <div className="All-container">
            <div className="slider-container">
                <div>
                    <Intro/>
                </div>
                <div className='courseTransformingcarrercarouselcontainer'>
                    <h1 className="courseWhyGloriousMindMineMainHeading">Transforming careers with guaranteed outcomes</h1>
                    <p className="Transform-career-sub-heading">We don’t just give certification but outcomes!</p>
                    <Slider {...settings}>
                        {TransformingCarrerList.map(each=>(<TransformingCard key={each.id} cardDetails={each} />))}
                    </Slider>
                </div>
                
            </div>
            <FullStack />
             
            <div className='courseWhyGloriousMindMineMainContainer'>
                <h1 className='courseWhyGloriousMindMineMainHeading'>Why GloriousMindMine?</h1>
                <div className="courseWhyGloriousMindMineSubContainer">
                    <ul className='courseWhyGloriousMindMineList'>
                        {whyGloriousMindMineList.map(each=>(<WhyGloriousMindMineCard key={each.id} eachDetails={each} />))}
                    </ul>
                    <div className="courseWhyGloriousMindMineSideImageContainer">
                        <img src={founder} alt="" className="courseWhyGloriousMindMineSideImage"/>
                    </div>
                </div>
            </div>
            <div className='courseFlexibleProgramContainer'>
                <h1 className='courseFlexibleProgramMainHeading'>A Flexible Program created just for You!</h1>
                <ul className='courseFlexibleProgramList'>
                    {flexibleProgramList.map(each=>(<FlexibleProgram key={each.id} programDetails={each} />))}
                </ul>
            </div>
      
            <div>
                
            </div>
            <div className='courseCompaniesHiringContainer'>
                <h1 className="courseCompaniesHiringHeading">Companies hiring at Glorious Mind Mine</h1>
                <div className="courseBanner">
                    <BannerRight images={ScrolllingImages1} speed={5000} />
                </div>
                <div  className="courseBanner">
                    <BannerLeft images={ScrolllingImages2} speed={7000} />
                </div>
                <div  className="courseBanner">
                    <BannerRight images={ScrolllingImages3} speed={10000} />
                </div>
            </div>
            <div className='courseTutionFeeMainContainer'>
                <h1 className='courseTutionFeeMainHeading'>What You'll Get</h1>
                <div className="courseTutionFeeSubContainer">
                   <ul>
                    {tuitionFeeList.map(each=>(
                        <div className='courseTutionFeeListItemContainer'>
                            <AiOutlineCheck className='courseTutionFeeIcon' />
                            <span className="courseTutionList">{each}</span>
                        </div>
                    ))}
                   </ul>
                   <div className="ButtonContainer">
                        <button className="EnrollNowButton1"><Link to="/registration" className="EnrollNowButton1" style={{textDecoration:"none"}}>Enroll Now</Link></button>
                        {/* <button className="DownloadBroucherButton1">Download Broucher</button> */}
                   </div>
                   
                </div>
            </div>
        <div className='coursesBasicDoubtssMainContainer'>
            <h1 className='coursesBasicDoubtsMainHeading'>Clear all your basic doubts with these FAQs</h1>
            <ul className='coursesBasicDoubtsTabsList'>
                {basicDoubtsTabsList.map(each=>{
                    const activeTab=each.tabId===basicDoubtTab ? "courseBasicDoubtActiveTab1" : ""
                   // console.log(each.id)
                return(
                <li className= {`coursesBasicDoubtsTabsListItem`} key={each.tabId}><button className={`coursesBasicDoubtsTabsListItemButton1 ${activeTab}`} value={each.tabId} onClick={this.changeBasicDoubtTabId}>{each.displayText}</button></li>
                )})}
            </ul>
            <ul className='coursesBasicDoubtsList'>
                {lista.map(each=>(<DoubtItem key={each.id} faqDetails={each} />))}
            </ul>
        </div>
        <div className='courseReviewsMainContainer'>
            <h1 className='courseReviewMainHeading'>What our learners say about GloriousMindMine Programs</h1>
            <ul className='courseReviewList'>
                {learnersReviews.map(each=>(<ReviewCard key={each.id} reviewDetails={each} />))}
            </ul>
        </div>
        </div>
        <Footer/>
        </>
        )
      }
}

export default English;