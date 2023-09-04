import "./index.css"
import React ,{useState}from 'react';
import Header from "../../Homes/Headers"
import Footer from "../../Homes/Footer"
import SocialIcons from "../../Homes/Socialicons";
import StudyabroadCarousel from "../StudyabroadCarousel";

import {FaSchool,FaGraduationCap,FaWpforms,FaBusinessTime,FaCalculator,FaHistory,} from "react-icons/fa"
import {MdScience,MdEngineering,MdDraw,MdOutlinePsychologyAlt,MdCastForEducation,MdBiotech,MdFlight,MdLocalPharmacy,MdAgriculture,MdArchitecture,MdOutlineColorLens,MdOutlineTour} from "react-icons/md"
import {SiGooglescholar} from "react-icons/si"
import {GiWatch,GiMaterialsScience,GiMicrophone,GiNurseFemale,GiPoloShirt,GiWorld,GiTShirt,GiChemicalDrop,GiWallet} from "react-icons/gi"
import {BiLeaf} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import {BsGraphUp} from "react-icons/bs"
import {SiSimpleanalytics} from "react-icons/si"
import {TbMedicineSyrup,TbArrowBadgeRightFilled,TbMedicalCrossFilled,TbCoinRupee,TbLanguage,TbMathSymbols,TbInfoSquareFilled} from "react-icons/tb"
import {GoLaw} from "react-icons/go"
import {LuShoppingCart} from "react-icons/lu"
import {PiHandshakeFill} from "react-icons/pi"
//import America from "../../Images/America.png"
import { useNavigate } from 'react-router-dom';

import uk from "../../Images/uk.jpg"
import australia from "../../Images/australia.jpg"
import canada from "../../Images/canada.jpg"
import newzealand from "../../Images/newzealand.jpg"
import germany from "../../Images/germany.jpg"
//{id:0,Icon:,title:"",text:"COLLEGES"},

import ReactPlayer from 'react-player'
import {LiaUniversitySolid} from 'react-icons/lia'
import {CgFileDocument} from 'react-icons/cg'
import {ImProfile} from 'react-icons/im'
import {FaPiggyBank} from 'react-icons/fa'
import {RiVisaFill} from 'react-icons/ri'
import {BsGlobeCentralSouthAsia} from 'react-icons/bs'
import {PiCertificate} from 'react-icons/pi'
import {BsGlobe} from 'react-icons/bs'

import { BiSolidDirections } from 'react-icons/bi';
import {TfiWrite} from 'react-icons/tfi';
import {GrContactInfo} from 'react-icons/gr';
import {TbMessageDots} from "react-icons/tb";
import {GoChecklist} from "react-icons/go";
import {AiOutlineArrowLeft,AiOutlineIdcard} from "react-icons/ai";
import {FaUniversity,FaAddressCard} from "react-icons/fa";
import {AiOutlineFolder} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {SiReacthookform } from "react-icons/si";
import {MdFlightTakeoff} from "react-icons/md"
import {FiPhoneCall} from "react-icons/fi"
import germany1 from "../../Images/germanybanner.jpg"
import america1 from "../../Images/americabanner.jpg" 
import canada1 from "../../Images/canadabanner.jpeg"
import uk1 from "../../Images/ukbanner.jpg"
import newzealand1 from "../../Images/newzealandbanner.jpg"
import australia1 from "../../Images/australiabanner.jpg"

import study1 from "../../Images/studyaustralia.jpg"
import study2 from "../../Images/studyamerica.jpg"
import study3 from "../../Images/studycanada.jpg"
import study4 from "../../Images/studyuk.jpg"
import study5 from "../../Images/studygermany.jpg"
import study6 from "../../Images/studynewzealand.jpg"

import studyaboardImg1 from "../../Images/studyabord1.JPG"
import studyaboardImg2 from "../../Images/studyabord2.JPG"
import studyaboardImg3 from "../../Images/studyabord3.JPG"
import studyaboardImg4 from "../../Images/studyabord4.JPG"

import reviewstudy1 from "../../Images/reviewstudy1.JPG"
import reviewstudy2 from "../../Images/reviewstudy2.JPG"
import reviewstudy3 from "../../Images/reviewstudy3.JPG"

const slides = [
  {
    image: study5, 
    Heading: "Germany's Delights: Where Historic Heritage Meets Modern Excellence",
    Subheading: "Explore the Heart of Europe – Rich History, Artistic Treasures, and Culinary Delicacies"
    
  },
  {
    image: study4, 
    Heading:"Exploring the Enchanting UK: A Journey Through History and Culture",
    Subheading: "Discover the Charm of England, Scotland, Wales, and Northern Ireland",
  },
  {
    image: study1, 
    Heading: "Captivating Australia: Sun, Sand, and Adventure Down Under",
    Subheading: "From Iconic Landscapes to Thriving Cities – Experience the Best of Australia"
    
  },
  {
    image: study2, 
    Heading: "The USA Unveiled: Diversity, Landscapes, and the American Dream",
    Subheading: "Travel Across 50 States for a Taste of Everything – Natural Wonders to Urban Marvels"
    
  },
  {
    image: study6, 
    Heading: "New Zealand: Nature's Wonderland in the Southern Hemisphere",
    Subheading: "Immerse Yourself in Breathtaking Landscapes, Maori Culture, and Epic Adventures"
    
  },
  {
    image: study3 , 
    Heading: "Canada's Splendor: A Tapestry of Wilderness and Urban Allure",
    Subheading: "From the Rockies to the Maple Syrup Trails – Embrace the Vastness of Canada"
    
  },
  // Add more slides as needed
];

const StudentReviewVideoList = [
    {id:0,video:"https://youtu.be/4BQaEI52ZaY?si=1RrL0hLBuic9MnaG",Name:"Ayush Bhardwaj , Studying in Humber College, Canada",description:"From shortlisting university till attending my first class, Collegedunia has been there throughout, says Ayush Bhardwaj."},
    {id:1,video:"https://youtu.be/7yjYDRcW2zg?si=AhSXugcxXhH9lyik",Name:"Nidhi Mittal , Studying in University of Melbourne, Australia",description:"Getting a detailed profile evaluation by a team of counsellors at Collegedunia ensured my safe transition to the University of Melbourne, says Nidhi Mittal."},
    {id:2,video:"https://youtu.be/aZmtNKtUtPE?si=9velTEwnH6TbbGsy",Name:"Srishti Das , Studying in Columbia University, USA",description:"All-time support from counsellors through emails, calls or texts made my process to study abroad much easier than I imagined, says Srishti Das."}
]

const ArticleSectionList=[
    {id:0,Image:LiaUniversitySolid,Name:"University"},
    {id:1,Image:CgFileDocument,Name:"TEST PREP"},
    {id:2,Image:ImProfile,Name:"APPLICATION"},
    {id:3,Image:FaPiggyBank,Name:"FUNDING"},
    {id:4,Image:RiVisaFill,Name:"VISA"},
    {id:5,Image:BsGlobeCentralSouthAsia,Name:"TRAVEL"},
    {id:6,Image:PiCertificate,Name:"POST DEGREE"}
]
const StudyAbroadStudentReviewList=[
  {id:0,image:reviewstudy1,heading:"Studying Abroad in the UK: A Transformative Journey",description:"The UK's rich history and world-class universities provided an unforgettable academic and cultural experience. I discovered new perspectives, made lifelong friends, and explored historic sites while pursuing my degree."},
  {id:1,image:reviewstudy2,heading:"Canada: A Perfect Blend of Nature and Education",description:"Studying in Canada was a dream come true. The pristine landscapes and diverse communities complemented my rigorous coursework perfectly. I gained not only knowledge but also an appreciation for the great outdoors."},
  {id:2,image:reviewstudy3,heading:"America: Unlocking Opportunities and Diversity",description:"My study abroad adventure in the United States was a game-changer. I was exposed to cutting-edge research, diverse cultures, and countless opportunities for personal and professional growth."},
 ]

const StudyAbroadCountryList=[
    {id:0,image:america1,heading:"Education Excellence in America: Diverse Universities, Global Opportunities",description:"America is often considered a prime study destination due to its diverse and world-renowned universities, offering a wide range of programs. It provides ample research opportunities, a multicultural environment, and access to global job markets, enhancing students' academic and career prospects."},
    {id:1,image:canada1,heading:"Pursue Excellence: Studying in Canada's Inclusive Academic Haven",description:"Canada is an excellent study destination due to its high-quality education, diverse multicultural environment, and welcoming policies for international students. Its renowned universities, research opportunities, and post-graduation work options make it an attractive choice for those seeking a well-rounded educational experience."},
    {id:2,image:germany1,heading:"Germany: A Premier Study Destination",description:"Germany is an excellent choice for studying due to its renowned quality of education, affordability with tuition-free or low-cost programs, diverse range of English-taught courses, strong economy fostering job opportunities, leadership in research and innovation, and rich cultural experiences."},
    {id:3,image:uk1,heading:"Prime Destination for Academic Excellence: Studying in the UK",description:"The UK is often preferred for its prestigious universities, offering world-class education and a diverse range of programs. It provides a conducive environment for academic growth, cultural exposure, and extensive networking opportunities. The English language instruction, historical significance, and strong emphasis on research contribute to its appeal as a top study destination."},
    {id:4,image:newzealand1,heading:"Studying in New Zealand: A Blend of Education, Nature, and Diversity",description:"New Zealand is an excellent study destination due to its world-class education system, breathtaking natural landscapes, and welcoming multicultural environment. Its universities offer high-quality education, and the country's emphasis on research and innovation adds to its appeal. Additionally, students can enjoy a safe and inclusive society while exploring the stunning beauty of its diverse geography."},
    {id:5,image:australia1,heading:"Studying in Australia: A Destination of Excellence, Diversity, and Opportunity",description:"Australia is often considered a prime destination for studying due to its exceptional education system, diverse and welcoming society, stunning natural landscapes, and vibrant cities. Renowned for its high-quality universities and research opportunities, Australia offers a wide array of programs catering to various interests."}]

const StudyAbroadExamsList=[
    {id:0,Exam:"International English Language Testing System [IELTS]",Description:"IELTS, a globally recognized English language proficiency test, enjoys widespread acceptance by more than 3000 universities worldwide, particularly for those pursuing higher education or migration to countries such as the UK, USA, Canada, New Zealand, and Australia. The IELTS exam comes in two formats: IELTS Academic and IELTS General. To enroll for IELTS, candidates must choose a suitable test center and date. The examination fee for the pen-and-paper-based IELTS stands at INR 16,250. The entire test takes approximately 2 hours and 45 minutes to complete.",register:"IELTS REGISTRATION",link:"https://www.ieltsidpindia.com/information/international-english-language-exam-tests-registration/?utm_source=google&utm_medium=cpc&utm_campaign=Top_Keywords&utm_term=ielts%20registration&gclid=Cj0KCQjwl8anBhCFARIsAKbbpyT5hJZlE0uzAaHL8quaWjTHZVbKE6JWDGwGXEF4G6XYF3GrmH_482MaAlM8EALw_wcB"},
    {id:1,Exam:"Test of a English as Foreign [TOEFL]",Description:"The TOEFL iBT (Test of English as a Foreign Language Internet-Based Test) is a standardized assessment that measures English language proficiency among non-native speakers. This exam assesses proficiency in four language skills: Reading, Listening, Speaking, and Writing. The registration fee for the TOEFL is 195 USD (equivalent to INR 16,046). The test is administered online at authorized test centers globally and typically takes approximately three hours to complete. The TOEFL iBT is widely acknowledged and accepted by universities, employers, and immigration authorities.",register:"TOEFL REGISTRATION",link:""},
    {id:2,Exam:"Pearson Test of English [PTE]",Description:"PTE, or the Pearson Test of English, is a computer-based assessment designed to evaluate an individual's English language proficiency for academic and immigration purposes. This test measures the reading, writing, speaking, and listening skills of non-native English speakers. PTE enjoys recognition from over 3000+ universities, institutions, and governments worldwide, including countries like the UK, Australia, Canada, and New Zealand. Registering for the PTE involves creating an account on the official website, completing the profile, selecting the preferred test date and center.",register:"PTE REGISTRATION",link:""},
    {id:3,Exam:"Graduate Record Examination [GRE]",Description:"The GRE (Graduate Record Examination) is a mandatory entrance exam for individuals seeking postgraduate programs in the USA, Canada, and select other nations. In response to the COVID-19 pandemic, candidates now have the option to register for the GRE and take it from the convenience of their homes, offering an alternative to testing center attendance.The GRE exam encompasses three sections: Verbal Reasoning, Quantitative Reasoning, and Analytical Writing, with scores for the verbal and quantitative sections ranging from 130 to 170 each. The total GRE score spans from 260 to 340, while the Analytical Writing Assessment (AWA) score is measured on a scale of 0.0 to 6.0. ",register:"GRE REGISTRATION",link:""},
    {id:4,Exam:"Graduate Management Admission Test [GMAT]", Description:"GMAT, the Graduate Management Admission Test, is an adaptive computerized examination taken by students aspiring to pursue management studies abroad. In response to the pandemic, candidates now have the flexibility to choose between taking the GMAT at a physical test center or online.An updated exam pattern, known as the GMAT Focus Edition for GMAT 2023, has been introduced. This version covers a narrower set of topics. The registration for The GMAT Exam - Focus Edition will commence on August 29, 2023. Concurrently, the existing GMAT exam will continue to be available until early next year.",register:"GMAT REGISTRATION",link:""},
    {id:5,Exam:"Scholastic Aptitude Test [SAT]",Description:"The SAT, conducted by the College Board, is an essential examination for students pursuing undergraduate studies abroad, particularly in the United States, Canada, Europe, Singapore, and India. Aspiring candidates have the opportunity to register for the SAT exam up to five weeks before the designated test date. The examination fee stands at $60 (equivalent to INR 4,965.63). For Indian candidates, there is an additional non-US regional fee of $49 (INR 3,600), bringing the total SAT exam fees for Indian nationals to $104 (INR 7,700). The inaugural SAT 2023 Digital Test is slated for March 11, 2023.",register:"SAT REGISTRATION",link:""}
]


const StudyAbroadChooseList=[{id:0,Icon:FaBusinessTime,title:"BUSINESS",text:"1535 COLLEGES"},
{id:1,Icon:MdScience,title:"SCIENCE",text:" 800 COLLEGES"},{id:2,Icon:MdEngineering,title:"ENGINEERING",text:"2000 COLLEGES"},
{id:3,Icon:MdDraw,title:"DRAWING",text:"200 COLLEGES"},{id:4,Icon:GiWatch,title:"SOCIAL STUDIES",text:"600 COLLEGES"},
{id:5,Icon:TbMedicineSyrup,title:"MEDICINE",text:" 1000 COLLEGES"},{id:6,Icon:TbMedicalCrossFilled,title:"BIOLOGY",text:"900 COLLEGES"},
{id:7,Icon:MdOutlinePsychologyAlt,title:"PSYCHOLOGY",text:"500 COLLEGES"},
{id:8,Icon:FaCalculator,title:"ACCOUNTING",text:"400 COLLEGES"},{id:9,Icon:CgProfile,title:"HUMANITIES",text:" 100 COLLEGES"},
{id:10,Icon:MdCastForEducation,title:"EDUCATION",text:"2000 COLLEGES"},{id:11,Icon:TbCoinRupee,title:"FINANCE",text:" 700 COLLEGES"},
{id:12,Icon:TbLanguage,title:"LANGUAGE",text:" 1000 COLLEGES"},{id:13,Icon:FaHistory,title:"HISTORY",text:"300 COLLEGES"},
{id:14,Icon:BiLeaf,title:"ENVIRONMENTAL STUDIES",text:"600 COLLEGES"},{id:15,Icon:TbMathSymbols,title:"MATHMATICS",text:"1200 COLLEGES"},
{id:16,Icon:BsGraphUp,title:"ECONOMICS",text:"1100 COLLEGES"},{id:17,Icon:GiChemicalDrop,title:"CHEMISTRY",text:"587 COLLEGES"},
{id:18,Icon:GoLaw,title:"LAW",text:" 430 COLLEGES"},{id:19,Icon:GiMaterialsScience,title:"SCIENCE",text:" 768 COLLEGES"},
{id:20,Icon:GiMicrophone,title:"JOURNALISM",text:"554 COLLEGES"},
{id:21,Icon:MdBiotech,title:"BIOTECHNOLOGY",text:"660 COLLEGES"},{id:22,Icon:GiNurseFemale,title:"NURSING",text:" 890 COLLEGES"},
{id:23,Icon:GiPoloShirt,title:"DESIGN",text:"480 COLLEGES"},{id:24,Icon:SiSimpleanalytics,title:"DATA SCIENCE AND ANALYSIS",text:"750 COLLEGES"},
{id:25,Icon:TbInfoSquareFilled,title:"INFORMATION STUDIES",text:" 1077 COLLEGES"},{id:26,Icon:MdArchitecture,title:"ARCHITECTURE",text:" 820 COLLEGES"},
{id:27,Icon:GiWorld,title:"GEOGRAPHY",text:" 140 COLLEGES"},{id:28,Icon:MdOutlineColorLens,title:"GRAPHIC DESIGN",text:"700 COLLEGES"},
{id:29,Icon:MdOutlineTour,title:"TOURISM AND HOSPITALITY",text:"390 COLLEGES"},{id:30,Icon:MdLocalPharmacy,title:"PHARMACY",text:" 900 COLLEGES"},
{id:31,Icon:MdAgriculture,title:"AGRICULTURE",text:"776 COLLEGES"},{id:32,Icon:GiTShirt,title:"FASHION DESIGN",text:" 890 COLLEGES"},
{id:33,Icon:BsGraphUp,title:"MANAGEMENT",text:"798 COLLEGES"},{id:34,Icon:LuShoppingCart,title:"COMMERCE",text:"877 COLLEGES"},
{id:35,Icon:MdFlight,title:"AVIATION",text:"765 COLLEGES"},{id:36,Icon:PiHandshakeFill,title:"SOCIAL WORK",text:"987 COLLEGES"},
]
const studyAbroadAboutList=[{id:0,Icon:FaSchool,title:"3500+",text:"Universities"},{id:1,Icon:FaGraduationCap,title:"140K+",text:"Courses"},{id:2,Icon:FaWpforms,title:"900+",text:"Applications Made"},{id:3,Icon:SiGooglescholar,title:"$1.1",text:"Million Scholarships"}]

const studyAbroadDestination=[
    {id:0,text:"Study in USA",image:america1,colleges:"942",study:"26.8 L/Yr",living:"32.6 L/Yr",fact1:"Acceptance Rate for Student Visa is 82%",fact2:"72% of students get a job after completing degree",fact3:"1.09 Million International Students study in US",fact4:"Intake Seasons- Fall & Spring",},
    {id:1,text:"Study in CANADA",image:canada,colleges:"179",study:"15.9 L/Yr",living:"26.3 L/Yr",fact1:"626,000 International Students study in Canada",fact2:"38% of total international applicants are Indian",fact3:"26% South Asian Students Study in Canada",fact4:"Intake Seasons- Fall, Winter, & Summer",},
    {id:2,text:"Study in UK",image:uk,colleges:"158",study:"23.4 L/Yr",living:"17.6 L/Yr",fact1:"Acceptance Rate for Student Visa is 87%",fact2:"455,520 International Students studying in the UK",fact3:"57% International Freshman Enrolments",fact4:"Intake Seasons- October & January"},
    {id:3,text:"Study in AUSTRALIA",image:australia,colleges:"67",study:"14.2 L/Yr",living:"23.4 L/Yr",fact1:"Visa Acceptance Rate for Student Visa in 92-95%",fact2:"89% students get a job after degree completion",fact3:"Numerous scholarships for international students",fact4:"Intake Seasons- February & July",},
    {id:4,text:"Study in NEW ZEALAND",image:newzealand,colleges:"11",study:"19.3 L/Yr",living:"18.5 L/Yr",fact1:"65% students get a job after completing their degree",fact2:"11 universities amongst top 100 by 2020 QS Ranking",fact3:"More than $880M spent on research annually",fact4:"Universities ranked in the top 5% in the world",},
    {id:5,text:"Study in GERMANY",image:germany,colleges:"135",study:"5.3 L/Yr",living:"16.4 L/Yr",fact1:"Acceptance Rate in Germany is 95%",fact2:"3.3% of students are unemployed after degree completion",fact3:"No Tuition Fee",fact4:"Intake Seasons- Summer & Winter",}
    ]

    
const letUsGuide = [
    {
      mainHeading: 'Profile',
      spainHeading: 'Assessment',
      icon: ImProfile,
      desc:
        'After you ve submitted your application, our skilled team assesses your profile, considering factors such as your educational background, work experience, and career objectives.',
      button: 'Register',
    },
    {
      mainHeading: "Admission",
      spainHeading: 'Support',
      icon: BiSolidDirections,
      desc:
        'Our counselors will assist you in determining the ideal country, college, and program or arrange for mentorship opportunities with current students.',
      button: 'Get Mentorship',
    },
    {
      mainHeading: "Test Preparation &",
      spainHeading: 'Webinars',
      icon: CgProfile,
      desc:
        'Access valuable insights and strategies to excel in international exams such as IELTS, TOEFL, SAT, GRE, and GMAT. Additionally, discover the admission cutoff scores for prestigious universities.',
      button: 'Register For-Webinar',
    },
    {
      mainHeading: 'Application Documents',
      spainHeading: '& Essay Review',
      icon: TfiWrite,
      desc:
        'Our expert team thoroughly reviews each application and essay before submission. We provide guidance and support at every stage of document preparation.',
      button: 'Avail Services',
    },
    {
      mainHeading: "Visa Application  &",
      spainHeading: 'Interview Preparation',
      icon: GrContactInfo,
      desc:
        'Achieving the highest visa approval rates in the industry, our team offers expert guidance on securing a study visa for your desired destination.',
      button: 'Get Information',
    },
    {
      mainHeading: "Scholarship Opportunities &",
      spainHeading: 'Financial Assistance',
      icon: SiGooglescholar,
      desc:
        'Our team will also provide guidance on budget planning, securing internships, obtaining education loans, and exploring scholarship opportunities.',
      button: 'Find Scholarships',
    }
  ];
  
  const howDoWeWork=[
    {
      id:0,
      heading:"Enroll Yourself",
      icon:SiReacthookform,
      button:"Register"
  },
      {   
          id:1,
          heading:"Vocational Guidance",
          icon:TbMessageDots,
          desc:"Engage with our counselors to discover optimal country,program for your needs."
      },
      {   
          id:2,
          heading:"Admission Exam",
          icon:GoChecklist,
          desc:"Determine the most suitable admission examination based on your preference chosen country."
      },
      {
          id:3,
          heading:"College Selection",
          icon:FaUniversity,
          desc:"Our counselors will assist you in selecting the most suitable college based on your scores."
      },
      {
          id:4,
          heading:"Paperwork",
          icon:AiOutlineFolder,
          desc:"We will assist you in crafting application documents, including Statements of Purpose, Essays, and Scholarship."
      },
      {
          id:5,
          heading:"Submissions",
          icon:AiOutlineIdcard,
          desc:"Our team will provide guidance for the submission of your college applications, whether online or offline."
      },
      {
          id:6,
          heading:"Financial Records",
          icon:GiWallet,
          desc:"Consult with our counselors to determine the most suitable country, college for your needs."
      },
      {   
          id:7,
          heading:"Visa Request",
          icon:FaAddressCard,
          desc:"We assist with completing visa application forms and offer support for interviews, if required."
      },
      {
        id:8,
        heading:"Post Visa",
        icon:MdFlightTakeoff,
        desc:"We also provide support for securing house, job , flight reservations, and connections with current students."
    },
    {   
        id:9,
        heading:"Consult with an Advisor",
        icon:FiPhoneCall,
        button:"Talk to Advisor"
    },
  ]
  
    const meetOur=[
      {
        image:studyaboardImg1,
        iamgeDesc:"Noor Syed is a competent leader and skilled communicator, dedicated to offering unwavering support to students aspiring to study abroad. With over a decade of experience in the study abroad sector, she strongly focuses on US universities. She has successfully guided more than 3500 students in their search for the perfect academic opportunity.",
        heading:"Noor Syed",
        desc:"Senior Counsellor, 10+ Years of Experience, USA",
        button:"Fix an Appoinment"
      },
      {
        image:studyaboardImg2 ,
        iamgeDesc:"Syed Ibrahim is known for his exceptional patience and popularity among students seeking guidance for studying abroad. Over the past three years, he has assisted numerous students in selecting suitable institutions in the United Kingdom. Syed Ibrahim possesses extensive knowledge of UK higher education institutions and has facilitated the successful journey.",
        heading:"Syed Ibrahim",
        desc:"Senior Counsellor,3+ Years of Experience, United Kingdom",
        button:"Fix an Appoinment"
      },
      {
        image:studyaboardImg3 ,
        iamgeDesc:"Syed Ali Shafiullah is an accomplished leader with excellent communication skills who prioritizes compassionate support for study abroad aspirants without compromising on quality. Her extensive knowledge of European & Australian universities has benefited approximately 1800 students in finding the perfect academic institution that meets their individual requirements.",
        heading:"Syed Ali Shafiullah",
        desc:"Senior Counsellor, 2+ Years of Experience, Australia",
        button:"Fix an Appoinment"
      },
      {
        image:studyaboardImg4,
        iamgeDesc:"Neymath Furqan is a compassionate and student-focused leader who excels in guiding students through the study abroad process for Canada. From university selection to securing offers, Neymath Furqan's expertise ensures a seamless journey. She is dedicated to providing personalized support and ensuring her students feel supported every step of the way.",
        heading:"Neymath Furqan",
        desc:"Senior Counsellor, 2+ Years of Experience, Canada",
        button:"Fix an Appoinment"
      }
    ]


const Studyabroad=()=>{
    
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const cardsPerPage = 4; // Number of cards to display per page

  const handleNextClick = () => {
        const totalCards = howDoWeWork.length;
        const maxPage = Math.ceil(totalCards / cardsPerPage) - 1;
        const nextPage = Math.min(currentPage + 1, maxPage);
        setCurrentPage(nextPage);
      };
      
      // Function to handle the click of the "Prev" button
      const handlePrevClick = () => {
        const prevPage = Math.max(currentPage - 1, 0);
        setCurrentPage(prevPage);
      };

      const showStudyabroadPopup=()=>{
        navigate("/studypopup");
      }

return(
    <>
    <Header />
    <SocialIcons/>
    <StudyabroadCarousel slides={slides}/>
    <div className='studyaboard-entire-conatiner'>
    <div className='studyaboard-main-conatiner'>
      <div className='study-abroad-let-us-guide-container'>
        <h1 className='study-abroad-let-us-guide-title'>
        Glorious Mindmine Free Counseling: Allow Our Expertise to Lead the Way.
        </h1>
        <p className='study-abroad-let-us-guide-sub-title'>
        Exploring overseas colleges and universities as an international student may seem daunting, but it's a challenge you can conquer! Our experienced counselors are here to assist you at every stage, from finding accredited institutions to crafting compelling application materials.
        </p>
        <div className='study-abroad-let-us-guide-cards-conatiner'>
          {letUsGuide.map((guide, index) => (
            <div
              className='study-abroad-let-us-guide-card-conatiner'
              key={index}
            >
              <div className='study-abroad-let-us-guide-card-conatiner-top'>
                <h1 className='study-abroad-let-us-guide-card-conatiner-top-heading'>
                  {guide.mainHeading} <br />
                  <span className='study-abroad-let-us-guide-card-conatiner-top-span'>
                    {guide.spainHeading}
                  </span>
                </h1>
                <guide.icon className="study-abroad-let-us-guide-card-conatiner-icon"
                />
              
                
              </div>
              <p className='study-abroad-let-us-guide-card-conatiner-subtitle'>
                {guide.desc}
              </p>
              <button className='study-abroad-let-us-guide-card-conatiner-button' onClick={showStudyabroadPopup}>
                {guide.button}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='study-abroad-how-do-we-work-container'>
      <h1 className='study-abroad-let-us-guide-title'>How Do We Work</h1>
      <div className='study-abroad-how-do-we-work-button-container'>
        <div className='study-abroad-how-do-we-work-button-container-button'>{currentPage > 0 && (
              <AiOutlineArrowLeft color='blue'  className="study-abroad-how-do-we-work-button-arrow" onClick={handlePrevClick}/>
          )}</div>
          
          <div className='study-abroad-how-do-we-work-cards-container'>
        {howDoWeWork.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((step, index) => (
            <div className='study-abroad-how-do-we-work-card-container' key={index}>
            <h1 className='study-abroad-how-do-we-work-cards-heading'>
                {step.heading}
            </h1>
            {step.id === 0 || step.id===9 ? ( // Only show button for the first card
                  <>
                  <step.icon className="study-abroad-how-do-we-work-cards-container-icon"/>
                  <button className='study-abroad-let-us-guide-card-conatiner-button' onClick={showStudyabroadPopup}>
                    {step.button}
                  </button>
                  </>
                ) : (
                  <>
                    <step.icon className="study-abroad-how-do-we-work-cards-container-icon"/>
                    <p className='study-abroad-how-do-we-work-cards-subtitle'>
                      {step.desc}
                    </p>
                  </>
                )}
            </div>
                ))}
        </div>
        <div className='study-abroad-how-do-we-work-button-container-button'>
        {currentPage < Math.ceil(howDoWeWork.length / cardsPerPage) - 1 && (
              <AiOutlineArrowRight color='blue' className="study-abroad-how-do-we-work-button-arrow" onClick={handleNextClick}/>
          )}
        </div>
          
      </div>
      </div>
      <div className='study-abroad-meet-our-container'>
        <h1 className='study-abroad-let-us-guide-title'>Meet Our Counsellors</h1>
        <div className='study-abroad-meet-our-cards-container'>
          {meetOur.map((counselor, index) => (
            <div className='study-abroad-meet-our-card-container' key={index}>
              <div className='study-abroad-meet-our-card'>
                <div className='study-abroad-meet-our-card-image-container'>
                  <img src={counselor.image} alt={counselor.heading} className='study-abroad-meet-our-card-image'/>
                </div>
                <div className='study-abroad-meet-our-card-content'>
                  <p className='study-abroad-meet-our-card-content-desc'>{counselor.iamgeDesc}</p>
                </div>
              </div>
              <div className='study-abroad-meet-our-card-content-container'>
                <h1 className='study-abroad-meet-our-card-content-container-heading'>{counselor.heading}</h1>
                <p className='study-abroad-meet-our-card-content-container-desc'>{counselor.desc}</p>
                <button className='study-abroad-let-us-guide-card-conatiner-button' onClick={showStudyabroadPopup}>{counselor.button}</button>
              </div>
            </div>
          ))}
        </div>
        
    </div>
    </div>





    <div className="study-abroad-aboutus-container">
        <h1 className="study-abroad-aboutus-main-heading ">Few Facts About Us</h1>
        <ul className="study-abroad-aboutus-list">
        {studyAbroadAboutList.map(each=>(
            <div key={each.id} className="study-abroad-aboutus-card">
                <each.Icon className="study-abroad-aboutus-icon" />
                <h1 className="study-abroad-aboutus-title">{each.title}</h1>
                <h6 className="study-abroad-aboutus-text">{each.text}</h6>
            </div>
        ))}
        </ul>
    </div>


    <div>
        <h3 className="student-review-video-main-heading">Our Student Loves us</h3>
        {/*<ul className="student-review-video-player-list-container">
            {StudentReviewVideoList.map((eachStudentReview)=>(
                <li className="student-review-video-player-display-container" key={eachStudentReview.id}>
                    <div className="responsive-container student-review-video-player-container">
                        <ReactPlayer width="100%" height="100%" url={eachStudentReview.video} controls />
                    </div>
                    <div className="student-review-video-player-description-container">
                        <h1 className="student-review-video-player-title">{eachStudentReview.Name}</h1>
                        <p className="student-review-video-player-description">{eachStudentReview.description}</p>
                    </div>
                </li>
            
            ))}
            </ul>*/}
            <div className="study-abroad-country-list-main-container">
            <ul className="study-abroad-country-list-container">
                {StudyAbroadStudentReviewList.map((eachCountry)=>(
                    <li key={eachCountry.id} className="study-abroad-country-list-container-item">
                        <img src={eachCountry.image} alt="" className="study-abroad-country-list-container-item-image"/>
                        <div className="study-abroad-country-list-container-item-description-container">
                            <h1 className="study-abroad-country-list-container-item-heading">{eachCountry.heading}</h1>
                            <p className="study-abroad-country-list-container-item-description">{eachCountry.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
    </div>


    <div className="study-abroad-destination-container">
        <h1 className="student-review-video-main-heading">Choose Your Study Destination</h1>
        <ul className="study-abroad-destination-list">
            {studyAbroadDestination.map(each=>(
                <div key={each.image} className="study-abroad-destination-card">
                    <div className="study-abroad-destination-card1">
                        <p className="study-abroad-destination-card-text">{each.text}</p>
                        <img alt="" src={each.image} className="study-abroad-destination-card-image"/>
                    </div>
                    <hr className="study-abroad-destination-line" />
                    <div className="study-abroad-destination-card2">
                        <div className="study-abroad-destination-card2-sub">
                            <p className="study-abroad-destination-card2-text">{each.colleges} Total</p>
                            <p className="study-abroad-destination-card2-text2">Colleges</p>
                        </div>
                        <hr />
                        <div className="study-abroad-destination-card2-sub">
                            <p className="study-abroad-destination-card2-text">INR {each.study} Total</p>
                            <p className="study-abroad-destination-card2-text2">Avg. Study Cost</p>
                        </div>
                        <hr className="study-abroad-destination-line1" />
                        <div className="study-abroad-destination-card2-sub">
                            <p className="study-abroad-destination-card2-text">INR {each.living} Total</p>
                            <p className="study-abroad-destination-card2-text2">Avg. Living Cost</p>
                        </div>
                    </div>
                    <hr className="study-abroad-destination-line"  />
                    <h5 className="study-abroad-destination-key-facts-heading">Key Facts</h5>
                    <div className="study-abroad-destination-key-facts-container">
                        <div className="study-abroad-destination-key-facts-subcontainer">
                            <TbArrowBadgeRightFilled className="study-abroad-destination-key-facts-icon" />
                            <p className="study-abroad-destination-key-facts-text">{each.fact1}</p>
                        </div>
                        <div className="study-abroad-destination-key-facts-subcontainer">
                            <TbArrowBadgeRightFilled className="study-abroad-destination-key-facts-icon" />
                            <p className="study-abroad-destination-key-facts-text">{each.fact2}</p>
                        </div>
                        <div className="study-abroad-destination-key-facts-subcontainer">
                            <TbArrowBadgeRightFilled className="study-abroad-destination-key-facts-icon" />
                            <p className="study-abroad-destination-key-facts-text">{each.fact3}</p>
                        </div><div className="study-abroad-destination-key-facts-subcontainer">
                            <TbArrowBadgeRightFilled className="study-abroad-destination-key-facts-icon" />
                            <p className="study-abroad-destination-key-facts-text">{each.fact4}</p>
                        </div>
                    </div>
                    <button className="study-abroad-destination-card-button" onClick={showStudyabroadPopup}>Get Counselling</button>
                </div>
            ))}
        </ul>
    </div>
    <div>
            <h3 className="study-abroad-article-section-main-heading">Articles Section</h3>
            <div className="study-abroad-article-section-main-container">
            <div className="study-abroad-article-section-left-container">
                <BsGlobe className="study-abroad-article-section-left-icon"/>
                <p className="study-abroad-article-section-left-icon-text">Why Study Abroad</p>
            </div>
            <ul className="study-abraod-article-section-list-container">
                {ArticleSectionList.map((eachArticle)=>(
                    <li key={eachArticle.Image} className="study-abraod-article-section-list-container-item">
                        <hr className="study-abraod-article-section-list-line-icon"/>
                        <div className="study-abraod-article-section-list-logo-main-container">
                        <div className="study-abraod-article-section-list-logo-container">
                            <eachArticle.Image className="study-abraod-article-section-list-logo"/>
                        </div>
                        <p className="study-abraod-article-section-list-logo-name">{eachArticle.Name}</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
        </div>
        <div className="study-abroad-country-list-main-container">
            <ul className="study-abroad-country-list-container">
                {StudyAbroadCountryList.map((eachCountry)=>(
                    <li key={eachCountry.id} className="study-abroad-country-list-container-item">
                        <img src={eachCountry.image} alt="" className="study-abroad-country-list-container-item-image"/>
                        <div className="study-abroad-country-list-container-item-description-container">
                            <h1 className="study-abroad-country-list-container-item-heading">{eachCountry.heading}</h1>
                            <p className="study-abroad-country-list-container-item-description">{eachCountry.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
    </div>
    <div className="study-aboad-exam-main-container">
            <h3 className="study-aboad-exam-main-heading">Study Abroad Exams</h3>
            <ul className="study-aboad-exam-list-container">
                {StudyAbroadExamsList.map((eachExam)=>(
                    <li key={eachExam.id} className="study-aboad-exam-list-container-item">
                        <h1 className="study-aboad-exam-list-container-item-heading">{eachExam.Exam}</h1>
                        <p className="study-aboad-exam-list-container-item-description">{eachExam.Description}</p>
                        <p className="study-aboad-exam-list-container-item-register">{eachExam.register}</p>
                        
                    </li>
                ))}
            </ul>
    </div>


    <div className="study-abroad-choose-container">
        <h1 className="study-abroad-let-us-guide-title">Shape Your Destiny</h1>
        <p className="study-abroad-choose-main-text">Glorious Mindmine serves as an expansive search engine catering to students, parents, and stakeholders in the education industry who are in search of information.</p>
        <div className="study-abroad-choose-cards-container">
            <ul className="study-abroad-choose-cards-list">
                {StudyAbroadChooseList.map(each=>(
                    <div key={each.id} className="study-abroad-choose-card">
                        <each.Icon className="study-abroad-choose-card-icon" />
                        <p className="study-abroad-choose-card-title">{each.title}</p>
                        <p className="study-abroad-choose-card-text">{each.text}</p>
                    </div>
                ))}
            </ul>
        </div>
    </div>
    </div>
    <Footer />
    </>
)
}

export default Studyabroad