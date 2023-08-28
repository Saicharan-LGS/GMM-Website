import "./index.css"
import React ,{useState}from 'react';
import Header from "../../Homes/Headers"
import Footer from "../../Homes/Footer"
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
import America from "../../Images/America.png"
import { useNavigate } from 'react-router-dom';

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

    

const StudentReviewVideoList = [
    {id:0,video:"https://www.youtube.com/watch?v=GzKs-rtLoiY",Name:"Ayush Bhardwaj , Studying in Humber College, Canada",description:"From shortlisting university till attending my first class, Collegedunia has been there throughout, says Ayush Bhardwaj."},
    {id:1,video:"https://www.youtube.com/watch?v=GzKs-rtLoiY",Name:"Nidhi Mittal , Studying in University of Melbourne, Australia",description:"Getting a detailed profile evaluation by a team of counsellors at Collegedunia ensured my safe transition to the University of Melbourne, says Nidhi Mittal."},
    {id:2,video:"https://www.youtube.com/watch?v=GzKs-rtLoiY",Name:"Srishti Das , Studying in Columbia University, USA",description:"All-time support from counsellors through emails, calls or texts made my process to study abroad much easier than I imagined, says Srishti Das."}
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
const StudyAbroadCountryList=[
    {id:0,image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-canada1.png",heading:"Canada Still is Top Destination Amongst Prospective Immigrants",description:"According to a recent poll performed by World Education Services, Canada continues to be the #1 destination for immigrants. Since the epidemic occurred two years ago, the organization has been performing the same poll, analyzing the effects of the pandemic on immigration plans to Canada."},
    {id:1,image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-canada1.png",heading:"Canada Still is Top Destination Amongst Prospective Immigrants",description:"According to a recent poll performed by World Education Services, Canada continues to be the #1 destination for immigrants. Since the epidemic occurred two years ago, the organization has been performing the same poll, analyzing the effects of the pandemic on immigration plans to Canada."},
    {id:2,image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-canada1.png",heading:"Canada Still is Top Destination Amongst Prospective Immigrants",description:"According to a recent poll performed by World Education Services, Canada continues to be the #1 destination for immigrants. Since the epidemic occurred two years ago, the organization has been performing the same poll, analyzing the effects of the pandemic on immigration plans to Canada."},
    {id:3,image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-canada1.png",heading:"Canada Still is Top Destination Amongst Prospective Immigrants",description:"According to a recent poll performed by World Education Services, Canada continues to be the #1 destination for immigrants. Since the epidemic occurred two years ago, the organization has been performing the same poll, analyzing the effects of the pandemic on immigration plans to Canada."},
    {id:4,image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-canada1.png",heading:"Canada Still is Top Destination Amongst Prospective Immigrants",description:"According to a recent poll performed by World Education Services, Canada continues to be the #1 destination for immigrants. Since the epidemic occurred two years ago, the organization has been performing the same poll, analyzing the effects of the pandemic on immigration plans to Canada."},
    {id:5,image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-canada1.png",heading:"Canada Still is Top Destination Amongst Prospective Immigrants",description:"According to a recent poll performed by World Education Services, Canada continues to be the #1 destination for immigrants. Since the epidemic occurred two years ago, the organization has been performing the same poll, analyzing the effects of the pandemic on immigration plans to Canada."},
]

const StudyAbroadExamsList=[
    {id:0,Exam:"International English Language Testing System [IELTS]",Description:"IELTS is an English language proficiency test that is widely accepted by over 3000 universities worldwide for the purpose of migration or higher education in countries like UK, USA, Canada, New Zealand, and Australia. It is available in two formats: IELTS Academic and IELTS General. To register for IELTS, candidates need to select a suitable test center and date. The exam fee for pen and paper based IELTS is INR 16,250. The total duration of the test is 2 hours and 45 minutes. Candidates can take the test up to four times a month. The IELTS score is usually available within 2-5 days after the test.",register:"IELTS REGISTRATION",link:""},
    {id:1,Exam:"Test of a English as Foreign [TOEFL]",Description:"The TOEFL iBT (Test of English as a Foreign Language Internet-Based Test) is an exam that standardizes the evaluation of English language proficiency for non-native speakers. The test evaluates four language skills: Reading, Listening, Speaking, and Writing. TOEFL Registration fee is 195 USD(INR 16046). The test is taken online at authorized test centers worldwide and takes around three hours to complete. The TOEFL iBT is a widely recognized assessment tool by universities, employers, and immigration authorities to evaluate an individual's English language abilities.",register:"TOEFL REGISTRATION",link:""},
    {id:2,Exam:"Pearson Test of English [PTE]",Description:"PTE is a computer-based English language proficiency test that assesses a candidate's English language proficiency for academic or immigration purposes. The test assesses non-native English speakers' reading, writing, speaking, and listening abilities. PTE is recognized by over 3000+ universities, institutions, and governments all around the world, including the UK, Australia, Canada, and New Zealand. PTE registration can be done by creating an account on the official website, completing their profile, selecting their preferred test date and center, and paying the registration fee of INR.15,900.",register:"PTE REGISTRATION",link:""},
    {id:3,Exam:"Graduate Record Examination [GRE]",Description:"The GRE is an entrance exam required for pursuing postgraduate degrees in the USA, Canada, and select other countries. Due to the impact of COVID-19, candidates can now register for the GRE from the comfort of their homes as an alternative to taking the exam at a testing center. The GRE exam consists of three sections - Verbal Reasoning, Quantitative Reasoning, and Analytical Writing - with scores for the verbal and quant sections ranging from 130 to 170 each. The total GRE score ranges from 260 to 340, while the AWA score is measured on a scale of 0.0 to 6.0. Top universities typically require a GRE score of 150 to 160 for both verbal and quant. The GRE exam fee for 2023 in India is INR 18,863 ($228), while for other parts of the world, it is $220 (INR 18210.61)",register:"GRE REGISTRATION",link:""},
    {id:4,Exam:"Graduate Management Admission Test [GMAT]", Description:"GMAT is an adaptive computerized test taken by students pursuing management studies abroad. As a result of the pandemic, candidates have the option to take the GMAT either at a test center or online. A new exam pattern which is GMAT Focus Edition for the GMAT 2023 has been introduced, with a shorter set of topics now being covered. The registration for The GMAT Exam- Focus Edition will open on August 29, 2023, while the existing GMAT exam will continue to run till early next year, so for some time candidates will have a choice to register for either of the exams or both exams.",register:"GMAT REGISTRATION",link:""},
    {id:5,Exam:"Scholastic Aptitude Test [SAT]",Description:"SAT is administered by the College Board for undergraduate studies abroad, especially in the US, Canada, Europe, Singapore, and India. Candidates can register for the SAT exam up to five weeks before the test date and must pay an exam fee of $60 (INR 4,965.63). Indian candidates are required to pay a non-US regional fee of $49 (INR 3,600), making the total SAT exam fees for Indian nationals $104 (INR 7,700). The first SAT 2023 Digital Test is scheduled on March 11, 2023.",register:"SAT REGISTRATION",link:""}
]


const StudyAbroadChooseList=[{id:0,Icon:FaBusinessTime,title:"BUSINESS",text:"1435 COLLEGES"},
{id:1,Icon:MdScience,title:"SCIENCE",text:"COLLEGES"},{id:2,Icon:MdEngineering,title:"ENGINEERING",text:"COLLEGES"},
{id:3,Icon:MdDraw,title:"DRAWING",text:"COLLEGES"},{id:4,Icon:GiWatch,title:"SOCIAL STUDIES",text:"COLLEGES"},
{id:5,Icon:TbMedicineSyrup,title:"MEDICINE",text:"COLLEGES"},{id:6,Icon:TbMedicalCrossFilled,title:"BIOLOGY",text:"COLLEGES"},
{id:7,Icon:MdOutlinePsychologyAlt,title:"PSYCHOLOGY",text:"COLLEGES"},
{id:8,Icon:FaCalculator,title:"ACCOUNTING",text:"COLLEGES"},{id:9,Icon:CgProfile,title:"HUMANITIES",text:"COLLEGES"},
{id:10,Icon:MdCastForEducation,title:"EDUCATION",text:"COLLEGES"},{id:11,Icon:TbCoinRupee,title:"FINANCE",text:"COLLEGES"},
{id:12,Icon:TbLanguage,title:"LANGUAGE",text:"COLLEGES"},{id:13,Icon:FaHistory,title:"HISTORY",text:"COLLEGES"},
{id:14,Icon:BiLeaf,title:"ENVIRONMENTAL STUDIES",text:"COLLEGES"},{id:15,Icon:TbMathSymbols,title:"MATHMATICS",text:"COLLEGES"},
{id:16,Icon:BsGraphUp,title:"ECONOMICS",text:"COLLEGES"},{id:17,Icon:GiChemicalDrop,title:"CHEMISTRY",text:"COLLEGES"},
{id:18,Icon:GoLaw,title:"LAW",text:"COLLEGES"},{id:19,Icon:GiMaterialsScience,title:"SCIENCE",text:"COLLEGES"},
{id:20,Icon:GiMicrophone,title:"JOURNALISM",text:"COLLEGES"},
{id:21,Icon:MdBiotech,title:"BIOTECHNOLOGY",text:"COLLEGES"},{id:22,Icon:GiNurseFemale,title:"NURSING",text:"COLLEGES"},
{id:23,Icon:GiPoloShirt,title:"DESIGN",text:"COLLEGES"},{id:24,Icon:SiSimpleanalytics,title:"DATA SCIENCE AND ANALYSIS",text:"COLLEGES"},
{id:25,Icon:TbInfoSquareFilled,title:"INFORMATION STUDIES",text:"COLLEGES"},{id:26,Icon:MdArchitecture,title:"ARCHITECTURE",text:"COLLEGES"},
{id:27,Icon:GiWorld,title:"GEOGRAPHY",text:"COLLEGES"},{id:28,Icon:MdOutlineColorLens,title:"GRAPHIC DESIGN",text:"COLLEGES"},
{id:29,Icon:MdOutlineTour,title:"TOURISM AND HOSPITALITY",text:"COLLEGES"},{id:30,Icon:MdLocalPharmacy,title:"PHARMACY",text:"COLLEGES"},
{id:31,Icon:MdAgriculture,title:"AGRICULTURE",text:"COLLEGES"},{id:32,Icon:GiTShirt,title:"FASHION DESIGN",text:"COLLEGES"},
{id:33,Icon:BsGraphUp,title:"MANAGEMENT",text:"COLLEGES"},{id:34,Icon:LuShoppingCart,title:"COMMERCE",text:"COLLEGES"},
{id:35,Icon:MdFlight,title:"AVIATION",text:"COLLEGES"},{id:36,Icon:PiHandshakeFill,title:"SOCIAL WORK",text:"COLLEGES"},
]
const studyAbroadAboutList=[{id:0,Icon:FaSchool,title:"3400+",text:"Universities"},{id:1,Icon:FaGraduationCap,title:"150K+",text:"Courses"},{id:2,Icon:FaWpforms,title:"800+",text:"Applications Made"},{id:3,Icon:SiGooglescholar,title:"$2.1",text:"Million Scholarships"}]

const studyAbroadDestination=[
    {id:0,text:"Study in USA",image:America,colleges:"932",study:"27.8 L/Yr",living:"31.6 L/Yr",fact1:"Acceptance Rate for Student Visa is 80%",fact2:"62% of students get a job after completing degree",fact3:"1.08 Million International Students study in US",fact4:"Intake Seasons- Fall & Spring",},
    {id:1,text:"Study in CANADA",image:America,colleges:"175",study:"13.9 L/Yr",living:"20.3 L/Yr",fact1:"622,000 International Students study in Canada",fact2:"35% of total international applicants are Indian",fact3:"27% South Asian Students Study in Canada",fact4:"Intake Seasons- Fall, Winter, & Summer",},
    {id:2,text:"Study in UK",image:America,colleges:"154",study:"21.4 L/Yr",living:"15.6 L/Yr",fact1:"Acceptance Rate for Student Visa is 85%",fact2:"458,520 International Students studying in the UK",fact3:"54% International Freshman Enrolments",fact4:"Intake Seasons- October & January"},
    {id:3,text:"Study in AUSTRALIA",image:America,colleges:"65",study:"18.2 L/Yr",living:"21.4 L/Yr",fact1:"Visa Acceptance Rate for Student Visa in 90-95%",fact2:"79% students get a job after degree completion",fact3:"Numerous scholarships for international students",fact4:"Intake Seasons- February & July",},
    {id:4,text:"Study in NEW ZEALAND",image:America,colleges:"9",study:"18.3 L/Yr",living:"15.5 L/Yr",fact1:"68% students get a job after completing their degree",fact2:"7 universities amongst top 100 by 2020 QS Ranking",fact3:"More than $870M spent on research annually",fact4:"niversities ranked in the top 3% in the world",},
    {id:5,text:"Study in GERMANY",image:America,colleges:"131",study:"4.3 L/Yr",living:"14.4 L/Yr",fact1:"Acceptance Rate in Germany is 92%",fact2:"2.3% of students are unemployed after degree completion",fact3:"No Tuition Fee",fact4:"Intake Seasons- Summer & Winter",}
    ]

    
const letUsGuide = [
    {
      mainHeading: 'Profile',
      spainHeading: 'Evaluation',
      icon: ImProfile,
      desc:
        'Once you submit your application, our expert team evaluates your profile on education, work exp. & objectives',
      button: 'Register',
    },
    {
      mainHeading: "Admission",
      spainHeading: 'Guidance',
      icon: BiSolidDirections,
      desc:
        'Our counsellors will help you in identifying the right country, college and program or arrange mentorship from existing students',
      button: 'Get Mentorship',
    },
    {
      mainHeading: "Test Prep &",
      spainHeading: 'Webinar',
      icon: CgProfile,
      desc:
        'Get Free Tips and Tricks to crack study abroad exams like IELTS, TOEFL, SAT, GRE, GMAT. Also get cut off scores for top universities.',
      button: 'Register For-Webinar',
    },
    {
      mainHeading: 'Application Document',
      spainHeading: '& Essay',
      icon: TfiWrite,
      desc:
        'Our expert team, checks every application & essay before submitting. We assist you in every step while preparing this documents.',
      button: 'Avail Services',
    },
    {
      mainHeading: "Visa &",
      spainHeading: 'Interview',
      icon: GrContactInfo,
      desc:
        'With Best VISA approval rates in the industry, our team guides you for the best ways to earn a study visa at your dream destination',
      button: 'Get Information',
    },
    {
      mainHeading: "Scholarships &",
      spainHeading: 'Financial Aid',
      icon: SiGooglescholar,
      desc:
        'Our team will also guide you in planning your expenses, getting internship, education loan and scholarships',
      button: 'Find Scholarships',
    }
  ];
  
  const howDoWeWork=[
    {
      id:0,
      heading:"Register Yourself",
      icon:SiReacthookform,
      button:"Register"
  },
      {   
          id:1,
          heading:"Career Counselling",
          icon:TbMessageDots,
          desc:"Talk to our counsellors and know which country, course and college is better for you."
      },
      {   
          id:2,
          heading:"Entrance Test",
          icon:GoChecklist,
          desc:"Identify the best entance test based on country and prepration tips."
      },
      {
          id:3,
          heading:"University Shortlist",
          icon:FaUniversity,
          desc:"Our counsellors will help you shortlist best college as per the score"
      },
      {
          id:4,
          heading:"Documentation",
          icon:AiOutlineFolder,
          desc:"We will help you in preparing documents for the application like SOPs, LOR, Essays, Resume Scholarship Essay etc."
      },
      {
          id:5,
          heading:"Applications",
          icon:AiOutlineIdcard,
          desc:"Application to the colleges, online or offline will be guided by our team"
      },
      {
          id:6,
          heading:"Financial Documentation",
          icon:GiWallet,
          desc:"Talk to our counsellors and know which country, course and college is better for you"
      },
      {   
          id:7,
          heading:"VISA Application",
          icon:FaAddressCard,
          desc:"We help in VISA application form filling and interviews if needed"
      },
      {
        id:8,
        heading:"Post Visa",
        icon:MdFlightTakeoff,
        desc:"We even help you in getting accommodation, mentorship for jobs, flight booking, forex, connect to the existing students"
    },
    {   
        id:9,
        heading:"Talk to Counselor",
        icon:FiPhoneCall,
        button:"Talk to Counselor"
    },
  ]
  
    const meetOur=[
      {
        image:"https://images.collegedunia.com/public/asset/img/studyabroad/counselors/himanshi-garg.jpeg?h=262&w=262&mode=strech",
        iamgeDesc:"Himanshi is a competent leader and skilled communicator, dedicated to offering unwavering support to students aspiring to study abroad. With over a decade of experience in the study abroad sector, she strongly focuses on US universities. She has successfully guided more than 3500 students in their search for the perfect academic opportunity.",
        heading:"Himanshi Garg",
        desc:"Senior Counsellor, 10+ Years of Experience, USA",
        button:"Fix an Appoinment"
      },
      {
        image:"https://images.collegedunia.com/public/asset/img/studyabroad/counselors/rohit-soni.jpeg?h=262&w=262&mode=strech",
        iamgeDesc:"Rohit is known for his exceptional patience and popularity among students seeking guidance for studying abroad. Over the past three years, he has assisted numerous students in selecting suitable institutions in the United Kingdom. Rohit possesses extensive knowledge of UK higher education institutions and has facilitated the successful journey.",
        heading:"Rohit Soni",
        desc:"Senior Counsellor,3+ Years of Experience, United Kingdom",
        button:"Fix an Appoinment"
      },
      {
        image:"https://images.collegedunia.com/public/asset/img/studyabroad/counselors/aadhya-chadha.jpeg?h=262&w=262&mode=strech",
        iamgeDesc:"Aadya is an accomplished leader with excellent communication skills who prioritizes compassionate support for study abroad aspirants without compromising on quality. Her extensive knowledge of European & Australian universities has benefited approximately 1800 students in finding the perfect academic institution that meets their individual requirements.",
        heading:"Aadhya Chadha",
        desc:"Senior Counsellor, 2+ Years of Experience, Australia",
        button:"Fix an Appoinment"
      },
      {
        image:"https://images.collegedunia.com/public/asset/img/studyabroad/counselors/rohit-soni.jpeg?h=262&w=262&mode=strech",
        iamgeDesc:"Sakshee is a compassionate and student-focused leader who excels in guiding students through the study abroad process for Canada. From university selection to securing offers, Sakshee's expertise ensures a seamless journey. She is dedicated to providing personalized support and ensuring her students feel supported every step of the way.",
        heading:"Sakshee Banerjee",
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
    <div className='studyaboard-entire-conatiner'>
    <div className='studyaboard-main-conatiner'>
      <div className='study-abroad-let-us-guide-container'>
        <h1 className='study-abroad-let-us-guide-title'>
        Glorious Mindmine Free Counselling: Let Us Guide You
        </h1>
        <p className='study-abroad-let-us-guide-sub-title'>
          Looking into Study Abroad colleges and universities as an international
          student can be a challenge, but it's one you can overcome! From how
          to look for accredited schools to what you should write about on your
          applications, our expert counsellors will help you at every step
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
            <div className="study-abroad-aboutus-card">
                <each.Icon className="study-abroad-aboutus-icon" />
                <h1 className="study-abroad-aboutus-title">{each.title}</h1>
                <h6 className="study-abroad-aboutus-text">{each.text}</h6>
            </div>
        ))}
        </ul>
    </div>


    <div>
        <h3 className="student-review-video-main-heading">Our Student Loves us</h3>
        <ul className="student-review-video-player-list-container">
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
        </ul>
    </div>


    <div className="study-abroad-destination-container">
        <h1 className="student-review-video-main-heading">Choose Your Study Destination</h1>
        <ul className="study-abroad-destination-list">
            {studyAbroadDestination.map(each=>(
                <div className="study-abroad-destination-card">
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
                    <button class="study-abroad-destination-card-button" onClick={showStudyabroadPopup}>Get Counselling</button>
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
                    <li className="study-abraod-article-section-list-container-item">
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
                    <li className="study-abroad-country-list-container-item">
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
                    <li className="study-aboad-exam-list-container-item">
                        <h1 className="study-aboad-exam-list-container-item-heading">{eachExam.Exam}</h1>
                        <p className="study-aboad-exam-list-container-item-description">{eachExam.Description}</p>
                        <p className="study-aboad-exam-list-container-item-register">{eachExam.register}</p>
                    </li>
                ))}
            </ul>
    </div>


    <div className="study-abroad-choose-container">
        <h1 className="study-abroad-choose-main-heading">Choose Your Future</h1>
        <p className="study-abroad-choose-main-text">Glorious Mimdmine is an extensive search engine for the students, parents,and education industry players who are seeking information</p>
        <div className="study-abroad-choose-cards-container">
            <ul className="study-abroad-choose-cards-list">
                {StudyAbroadChooseList.map(each=>(
                    <div className="study-abroad-choose-card">
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