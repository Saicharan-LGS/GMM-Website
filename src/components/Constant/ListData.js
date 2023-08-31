//Images
import pic1 from "../Images/Interview1.jpg"
import pic2 from "../Images/careermen.png"
import pic3 from "../Images/linked.jpg"
import roy from '../Images/roy.png'
import Akhila from '../Images/Akhila.png'
import saicharan from '../Images/saicharan.jpg'
import triveni from '../Images/triveni.jpg'
import venu from '../Images/venuprofile.jpg'
import umar from '../Images/umarprofile.png'
import nagesh from '../Images/nagesh.jpg'

//Corporate Images

import punith from "../Images/punith.jpg"
import mani from "../Images/mani.jpg"
import syed from "../Images/syed.jpeg"
import reddy from "../Images/reddy.png"
import cor1 from "../Images/corporate1.png"
import cor2 from "../Images/corporate2.png"
import cor3 from "../Images/corporate3.png"
import cor4 from "../Images/corporate4.png"

//ICONS
import {LiaBullhornSolid} from 'react-icons/lia'
import {MdWorkOutline} from 'react-icons/md'
import {MdOutlineHealthAndSafety} from 'react-icons/md'
import {HiOutlineUsers} from 'react-icons/hi'
import {PiSimCard} from 'react-icons/pi'
import {GrFormCheckmark} from 'react-icons/gr'

//Corporate Icons
import { BsPuzzle,BsFileBarGraph } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';

import { LuAlarmClock } from 'react-icons/lu';


//Carousel Settings
export const Allsettings = {
    dots: true,
    infinite: true,
    speed: 500,// Show 3 slides in large devices
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
            slidesToShow: 2,
           // Show 1 slide in small devices (e.g., tablets and mobiles)
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
             // Show 1 slide in small devices (e.g., tablets and mobiles)
            },
        },
    ],
  }

//Career-Support-Page-List
export const CareerSupportTransformingCarrerList=[
    {id:1, image:Akhila,description:"If I were to name one value for which GloriousMindMine stands for, it would be 'Excellence'. I'm saying this because the course was excellently designed and executed.",name:"Akhila",previousRole:"Non-Technical",Role:"Data Anaylst",company:"TCS",hike:"70% hike"},
    {id:2, image:saicharan, description:"Having the scope to learn and grow alongside some fascinating cohort members amidst the chaos of the pandemic was quite a novel experience.",name:"Sai Charan",previousRole:"Civil Graduate",Role:"Full Stack Developer",company:"Capgemini",hike:"70% hike"},
    {id:3, image:triveni,description:"Mock interviews are great because you get honest, detailed, and timely feedback from industry experts.",name:"Triveni",previousRole:"Non-Tech background",Role:"Salesforce Admin",company:"Wipro",hike:""},
    {id:4, image:umar, description:"A structured curriculum with quality content makes this program stand out.",name:"Umar",previousRole:"Degree Graduate",Role:"Polarian Developer",company:"LGS",hike:"75% hike"},
    {id:5, image:nagesh, description:"I was not financially sound, so GloriousMindMine proved to be very cost-effective and empowering.",name:"Nagesh",previousRole:"Non-Tech background",Role:"Digital Marketing Specialist",company:"Genpact",hike:"120% hike"},
    {id:6, image:venu, description:"I was not financially sound, so GloriousMindMine proved to be very cost-effective and empowering.",name:"Venu",previousRole:"Degree Graduate",Role:"Mendix Developer",company:"LGS",hike:"50% hike"},
    {id:7, image:roy, description:"My experience at GloriousMindMine was fabulous, and I’ll always be thankful to the entire GloriousMindMine team.",name:"Vashni Roy",previousRole:"Junior Developer",Role:"Senior Developer",company:"Cognizant",hike:""},
]

export const CareerSupportScrolllingImages1 = [
    {id: 0, image: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg"},
    {id: 1, image: "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg"},
    {id: 2, image: "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"},
    {id: 3, image: "https://1000logos.net/wp-content/uploads/2017/02/HSBC-Logo.png"},
    {id: 4, image: "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png"},
    {id: 5, image: "https://www.popsci.com/uploads/2022/06/07/squarespace-logo-maker-best-free-logo-design-software.jpg?auto=webp&width=800&crop=16:10,offset-x50"},
    {id: 6, image: "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png"},
    {id: 7, image: "https://cdn.cookielaw.org/logos/c2e51c50-8594-41cd-a02a-67907a0f7e2e/2f964a2f-44d3-4b77-b247-1774a38cb40a/3bc2e1ab-a3ef-4954-8e9a-69eef219f6c5/Genpact_Logo.jpg"},
    {id: 8, image: "https://skillate-profile-pictures.s3.ap-south-1.amazonaws.com/org__237/5020af0a-289b-44d0-8e17-8b5ff1f0a985__Tiger_LOGO_new_main.png"},
    {id: 9, image: "https://connect-assets.prosple.com/cdn/ff/WdcdY8IJZrwWmw6ImzA_uboAqko-obLkQ1fkBtT_aqI/1650724772/public/styles/scale_and_crop_center_974x309/public/2022-03/Logo-iit-madras480x480-2022.jpg?itok=bVtnp4G-"},
    {id: 10, image: "https://media.designrush.com/agencies/130184/conversions/Deqode-logo-profile.jpg"}
];


  export const CareerSupportPrepList=[
    {id:0,imageurl:pic2,heading:"Career mentoring",list:["LIVE online sessions with experienced industry professionals","Expert mentors guide you on the career path that’s right for you","Suggestions on setting your short term and long term career goals","Mentors from various domains help you gain valuable industry insights"]},
    {id:1,imageurl:pic1,heading:"CV/Linkedin Review",list:["Feedback from experts to make your resume and LinkedIn profiles stand out from the crowd","Personalized and detailed suggestions to improve the content and format of your CV","Tips on customizing your resume for the job profile you are applying to"]},
    {id:2,imageurl:pic3,heading:"Interview Preparation Session",list:["mock interviews with industry experts to help you land your dream job","Guidance from our alumni currently in roles you aspire for","Develop industry context with case studies and learn answers to common technical and HR questions"]}
  ]

  //EnterPrise-Page-List

  export const EnterprisebeginnerList = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Drive Culture Of Learning",enterpriseDesc:"Video content of 1,000+ hours across 700+ courses in emerging technologies",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Empower Your Workforce",enterpriseDesc:"80+ curated career path-based courses to help employees upskill.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Measure Organization Learning Health",enterpriseDesc:"Actionable insights via dashboards & learner metrics to identify HIPOs and key successors.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Learn From Industry Experts",enterpriseDesc:"Access to webinars & masterclasses with Industry leaders.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Courses Designed by Experts",enterpriseDesc:"Content created by world class Ivy faculty & industry experts.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Personalized Learning Experience",enterpriseDesc:"Co-branded LMS & certificates to reward employees with R&R Policy.",color:"#2FA75F"}

]

export const EnterpriseGraduateList = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Culture Of Learning",enterpriseDesc:"Video content of 1,000+ hours across 700+ courses in emerging technologies",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Empower Your Workforce",enterpriseDesc:"80+ curated career path-based courses to help employees upskill.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Measure Organization Learning Health",enterpriseDesc:"Actionable insights via dashboards & learner metrics to identify HIPOs and key successors.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Learn From Industry Experts",enterpriseDesc:"Access to webinars & masterclasses with Industry leaders.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Courses Designed by Experts",enterpriseDesc:"Content created by world class Ivy faculty & industry experts.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Personalized Learning Experience",enterpriseDesc:"Co-branded LMS & certificates to reward employees with R&R Policy.",color:"#2FA75F"}

]


export const EnterpriseEmployeesList = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Culture Of Learning",enterpriseDesc:"Video content of 1,000+ hours across 700+ courses in emerging technologies",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Empower Your Workforce",enterpriseDesc:"80+ curated career path-based courses to help employees upskill.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Measure Organization Learning Health",enterpriseDesc:"Actionable insights via dashboards & learner metrics to identify HIPOs and key successors.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Learn From Industry Experts",enterpriseDesc:"Access to webinars & masterclasses with Industry leaders.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Courses Designed by Experts",enterpriseDesc:"Content created by world class Ivy faculty & industry experts.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Personalized Learning Experience",enterpriseDesc:"Co-branded LMS & certificates to reward employees with R&R Policy.",color:"#2FA75F"}

]

export const EnterpriseContinuousLearnersList = [
    {id:1,EnterpriseIcon:LiaBullhornSolid,enterpriseHeading:"Culture Of Learning",enterpriseDesc:"Video content of 1,000+ hours across 700+ courses in emerging technologies",color:"#651CD5"},
    {id:2,EnterpriseIcon:MdWorkOutline,enterpriseHeading:"Empower Your Workforce",enterpriseDesc:"80+ curated career path-based courses to help employees upskill.",color:"#F1644C"},
    {id:3,EnterpriseIcon:MdOutlineHealthAndSafety,enterpriseHeading:"Measure Organization Learning Health",enterpriseDesc:"Actionable insights via dashboards & learner metrics to identify HIPOs and key successors.",color:"#FFCC00"},
    {id:4,EnterpriseIcon:HiOutlineUsers,enterpriseHeading:"Learn From Industry Experts",enterpriseDesc:"Access to webinars & masterclasses with Industry leaders.",color:"#0084FF"},
    {id:5,EnterpriseIcon:PiSimCard,enterpriseHeading:"Courses Designed by Experts",enterpriseDesc:"Content created by world class Ivy faculty & industry experts.",color:"#D64B9E"},
    {id:6,EnterpriseIcon:GrFormCheckmark,enterpriseHeading:"Personalized Learning Experience",enterpriseDesc:"Co-branded LMS & certificates to reward employees with R&R Policy.",color:"#2FA75F"}

]

//Corporate List 
export const CorporatepartnershipImages=[
    cor1,cor2,cor3,cor4
]

export const CorporateBannerRender = [
    "8.2 Million+ learners globally",
    'Awarded The "Best Corporate training platform,2023"',
    "45000+ employed upskilled"
];

export const CorporateOurPatners=[
    {"title":"Anton Punith" , "subTitle":"Founder & Director Ozzitech Innovations","imageSrc":punith},
    {"title":"Mani Kumar" , "subTitle":"Founder, Director & CEO Innospire Group","imageSrc":mani},
    {"title":"Syed Rizwan" , "subTitle":"Founder & Director SRM 360 Degree Consulting","imageSrc":syed},
    {"title":"Allipuram Rajasekhar Reddy" , "subTitle":"CEO Brio Factors Inc & MD Brio Factors Technologies India Private Limited.","imageSrc":reddy}
]

export const CorporateConsultativeCardData = [
    {
      title: 'Aligning Learning Outcomes with Business Goals',
      listHead: 'Our Sales team will:',
      listItems: [
        'Understand your business goals',
        'Recognize target audience and current challenges',
        'Propose the best learning solution for your business',
      ],
      icon: <BsPuzzle size={40} color="#ffffff" />,
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
        icon: <CgNotes size={40} color="#ffffff"  />,
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
        icon: <BsFileBarGraph size={40} color="#ffffff"  />,
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
        icon: <LuAlarmClock size={40} color="#ffffff"  />,
        backgroundColor: '#0084ff',
      },
    
];

export const CorporateScrollingImages = [
    {id: 0, image: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg"},
    {id: 1, image: "https://news.cognizant.com/image/cognizant-new-logo-400px.jpg"},
    {id: 2, image: "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"},
    {id: 3, image: "https://1000logos.net/wp-content/uploads/2017/02/HSBC-Logo.png"},
    {id: 4, image: "https://1000logos.net/wp-content/uploads/2021/08/Capgemini-Logo.png"},
    {id: 5, image: "https://www.popsci.com/uploads/2022/06/07/squarespace-logo-maker-best-free-logo-design-software.jpg?auto=webp&width=800&crop=16:10,offset-x50"},
    {id: 6, image: "https://1000logos.net/wp-content/uploads/2016/11/Citibank-Logo.png"},
    {id: 7, image: "https://cdn.cookielaw.org/logos/c2e51c50-8594-41cd-a02a-67907a0f7e2e/2f964a2f-44d3-4b77-b247-1774a38cb40a/3bc2e1ab-a3ef-4954-8e9a-69eef219f6c5/Genpact_Logo.jpg"},
    {id: 8, image: "https://skillate-profile-pictures.s3.ap-south-1.amazonaws.com/org__237/5020af0a-289b-44d0-8e17-8b5ff1f0a985__Tiger_LOGO_new_main.png"},
    {id: 9, image: "https://connect-assets.prosple.com/cdn/ff/WdcdY8IJZrwWmw6ImzA_uboAqko-obLkQ1fkBtT_aqI/1650724772/public/styles/scale_and_crop_center_974x309/public/2022-03/Logo-iit-madras480x480-2022.jpg?itok=bVtnp4G-"},
    {id: 10, image: "https://media.designrush.com/agencies/130184/conversions/Deqode-logo-profile.jpg"}
];