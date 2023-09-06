import HireCard1 from "../Card"
import "./index.css"
import React, { useState } from 'react';
import Card2 from "../Card1"
import Card3 from "../card2"
import Card4 from "../Card4"
import {BiTimeFive,BiMessageAdd} from "react-icons/bi"
import {AiFillFileAdd,AiOutlineSearch} from "react-icons/ai"
import {ImProfile} from "react-icons/im"
import {FiPhoneCall} from "react-icons/fi"
import {TbFreeRights} from "react-icons/tb"
import {GiMaterialsScience} from "react-icons/gi"
import {IoIosCloudDone} from "react-icons/io"
import Header from "../../Homes/Headers";
import Footer from "../../Homes/Footer";
import roy from '../../Images/roy.png'
import saicharan from '../../Images/saicharan.jpg'
import venu from '../../Images/venuprofile.jpg'
import umar from '../../Images/umarprofile.png'
import chandana from '../../Images/chandana.jpg'
import prashanth from '../../Images/prashanth.png'
import courses from "../../Images/courses.png"
import Button from "../../Button";
import SocialIcons from "../../Homes/Socialicons";
const placmentUrl  = process.env.REACT_APP_API_BASE_URL

const HireFromUsList1=[
    {id:1,Image:saicharan,name:"Saicharan",text:"Software Developer"},
    {id:2,Image:venu,name:"venu",text:"Software Developer"},
    {id:3,Image:prashanth,name:"Prashanth",text:"Software Engineer"},
    {id:4,Image:chandana,name:"Chandana",text:"Data Scientist" },
    {id:5,Image:roy,name:"Vashini Roy",text:"Senior developer"},
    {id:6,Image:umar,name:"Umar",text:"Data Scientist"},

   ]
   const HireFromUsList3=[
    {id:1,Image:FiPhoneCall,question:"Book Demo",answer:"Schedule a demonstration session to receive in-depth insights into our hiring proposition."},
    {id:2,Image:AiOutlineSearch,question:"Shortlist",answer:"Efficiently narrow down your selection and save time by avoiding the need to review numerous resumes."},
    {id:3,Image:BiMessageAdd,question:"Interviews",answer:"Choose to conduct interviews independently or utilize our in-house platform for streamlined interview processes."},
    {id:4,Image:TbFreeRights,question:"Hire free of cost",answer:"Experience cost-free and expedited hiring, as we do not charge any fees for our services."},
   ]
   
   const HireFromUsList4=[
    {id:1,Image:GiMaterialsScience,question:"",answer:"Passed intensive Tech assessments"},
    {id:2,Image:AiOutlineSearch,question:"",answer:"Completed real world projects"},
    {id:3,Image:BiMessageAdd,question:"",answer:"Completed Mock Interviews  and Mentor connects"},
    {id:4,Image:IoIosCloudDone,question:"",answer:"Dedicated career coach for mock interviews"}

]

   const HireFromUsList2=[
    {id:1,Image:ImProfile,question:"200+",answer:" Glorious Mindmine Graduates"},
    {id:2,Image:BiTimeFive,question:"1000+",answer:"Hours of Learning"},
    {id:3,Image:BiMessageAdd,question:"50+",answer:"Mock Interviews"},
    {id:4,Image:AiFillFileAdd,question:"150+",answer:"Projects & Assignments"}
]

const HireFromUs=()=>{
        const [formData, setFormData] = useState({
          name: '',
          email:'',
          companyName: '',
          mobileNumber: '',
          designation: '',
        });
        const [errorMsg,setErrorMsg]=useState("");
        const [successMsg,setSuccessMsg]=useState("")
        const [showLoader, setShowLoader] = useState(false)
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        };
        const handleSubmit = async (event) => {
            event.preventDefault();
            setShowLoader(true)
            try {
                    
              const {name,email,mobileNumber,designation,companyName}=formData
              const response = await fetch(
                `${placmentUrl}/placement`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    designation,
                    mobileNumber,
                    companyName
                  })
                }
              );
          
              if (response.ok) {
                const data = await response.json();
                setSuccessMsg(data.success);
                setErrorMsg("");
                setFormData({
                    name: '',
                    email:'',
                    companyName: '',
                    mobileNumber: '',
                    designation: '',
                });
                setShowLoader(false)
              } else {
                const data = await response.json();
                setErrorMsg(data.message);
                setSuccessMsg("");
                setFormData({
                    name: '',
                    email:'',
                    companyName: '',
                    mobileNumber: '',
                    designation: '',
                });
                setShowLoader(false)
              }
            } catch (error) {
                setErrorMsg(error);
                setSuccessMsg("");
            }
        };
    return(
        <>
        <Header/>
        <SocialIcons/>
        <div className="HireFromUsContainer1">
            <div className="HireFromUsContainer1-1">
                <h1 className="HireFromUsContainer2Heading">Attract the top 5% of IT professionals</h1>
                <p className="HireFromUsContainer1Text">Assemble your Data and Engineering Team with highly skilled tech talent prepared for the industry.</p>
                <button onClick={() => document.querySelector("#schedulecallContainer").scrollIntoView({ behavior: "smooth" })} className="HireFromUsContainer1Button">Hire Now</button>
            </div>
            <ul className="HireFromUsContainer1-2">
                {HireFromUsList1.map(each=>(
                        <HireCard1 key={each.id} details={each}/>
                ))}
            </ul>
        </div>
        <div className="HireFromUsContainer1"> 
            <img alt="" src={courses} className="HireFromUsContainer2Image" />
            <div className="HireFromUsContainer1-1">
                <h1 className="HireFromUsContainer2Heading">Gain entry to exceptional tech talent.</h1>
                <p className="HireFromUsContainer1Text">Our students have undergone comprehensive training in our flagship full-stack Data Science program and are exceptionally well-suited for a wide range of data-focused positions.</p>
                <button onClick={() => document.querySelector("#schedulecallContainer").scrollIntoView({ behavior: "smooth" })} className="HireFromUsContainer1Button">Hire Now</button>
            </div>
        </div>
        <div className="HireFromUsContainer1"> 
        <div className="HireFromUsContainer1-1">
                <h1 className="HireFromUsContainer3Heading">Comprehensive Candidate Development</h1>
                <p className="HireFromUsContainer1Text">Our training program is designed to immerse students in a realistic workplace setting, where they collaborate in teams to address industry-specific projects. Equipped with practical experience, our candidates are immediately effective upon starting their job.</p>
            </div>
            <ul className="HireFromUsContainer3-2">
                {HireFromUsList2.map(each=>(
                    <Card2 key={each.id} details={each}/>
                ))}
            </ul>
        </div>
        <h1 className="HireFromUsheading2">How it Works</h1>
        <ul className="HireFromUsContainer4">
                {HireFromUsList3.map(each=>(
                    <Card3 key={each.id} details={each}/>
                ))}
        </ul>
        <div className="HireFromUsContainer1">
            <ul className="HireFromUsContainer4-2">
                {HireFromUsList4.map(each=>(
                    <Card4 key={each.id} details={each}/>
                ))}
            </ul>
            <div className="HireFromUsContainer1-1" id="schedulecallContainer">
            <form onSubmit={handleSubmit} className="schedule-call-form-container">
                <h1 className="HireFromUsContainer3Heading">
                    Schedule a demo call with our placement team
                </h1>
                <div className="schedule-call-container" >
                    <label htmlFor="name" className="schedule-call-label">
                    Name:
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="schedule-call-input"
                    required
                    placeholder="Enter your name"
                    />
                </div>
                <div className="schedule-call-container">
                    <label htmlFor="email" className="schedule-call-label">
                    Email:
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="schedule-call-input"
                    required
                    placeholder="Enter your email"
                    />
                </div>
                <div className="schedule-call-container">
                    <label htmlFor="companyName" className="schedule-call-label">
                    Company Name:
                    </label>
                    <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="schedule-call-input"
                    required
                    placeholder="Enter your company name"
                    />
                </div>
                <div className="schedule-call-container">
                    <label htmlFor="mobileNumber" className="schedule-call-label">
                    Mobile Number:
                    </label>
                    <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="schedule-call-input"
                    required
                    placeholder="Enter your mobile number"
                    />
                </div>
                <div className="schedule-call-container">
                    <label htmlFor="designation" className="schedule-call-label">
                    Designation:
                    </label>
                    <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    className="schedule-call-input"
                    required
                    placeholder="Enter your designation"
                    />
                </div>
                <p className='schedule-call-error-message'>{errorMsg}</p>
                <p className='schedule-call-success-message'>{successMsg}</p>
                <Button text="Submit"
                    onSubmit={handleSubmit}
                    loading={showLoader}
                    disabled={showLoader}/>
                </form>

            </div>
            </div>
 
        <Footer/>
        
        </>
    )
}

export default HireFromUs