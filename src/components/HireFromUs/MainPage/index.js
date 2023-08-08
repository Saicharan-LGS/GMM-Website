import HireCard1 from "../Card"
import "./index.css"
import React, { useState } from 'react';
import Card2 from "../Card1"
import Card3 from "../card2"
import Card4 from "../Card4"
import {BiTimeFive,BiMessageAdd} from "react-icons/bi"
import {AiFillFileAdd,AiOutlineSearch} from "react-icons/ai"
import {ImProfile} from "react-icons/im"
import {TbFreeRights} from "react-icons/tb"
import {GiMaterialsScience} from "react-icons/gi"
import {IoIosCloudDone} from "react-icons/io"
import Header from "../../Homes/Headers";
import Footer from "../../Homes/Footer";


const HireFromUsList1=[
    {id:1,Image:"https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",name:"Saicharan",text:"Software Developer"},
    {id:2,Image:"https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",name:"KapilRaj",text:"Mendix developer"},
    {id:3,Image:"https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",name:"Prashanth",text:"Polarion developer"},
    {id:4,Image:"https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",name:"Saicharan",text:"Data Scientist" },
    {id:5,Image:"https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",name:"Saicharan",text:"software developer"},
    {id:6,Image:"https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg",name:"Saicharan Gangula",text:"software developer"},

   ]
   const HireFromUsList3=[
    {id:1,Image:ImProfile,question:"Book Demo",answer:"Book a demo session to get detailed information on our hiring proposition"},
    {id:2,Image:AiOutlineSearch,question:"Shortlist top candidates",answer:"Save time by avoiding scrutiny on a pile of resumes. Talk to our top performers directly"},
    {id:3,Image:BiMessageAdd,question:"Conduct Interviews",answer:"Conduct interviews on your own OR use our in-house video-interview platform to do interviews seamlessly"},
    {id:4,Image:TbFreeRights,question:"Hire free of cost",answer:"We charge zero fee for facilitating quick and trusted hiring for partnered recruiters."},
   ]
   
   const HireFromUsList4=[{id:1,Image:GiMaterialsScience,question:"",answer:"Passed intensive Tech assessments"},
    {id:2,Image:AiOutlineSearch,question:"",answer:"Completed real world Capstone projects"},
    {id:3,Image:BiMessageAdd,question:"",answer:"Completed Mock Interviews"},
    {id:4,Image:IoIosCloudDone,question:"",answer:"Dedicated career coach for mock interviews & career guidance."}

]

   const HireFromUsList2=[
    {id:1,Image:ImProfile,question:"200+",answer:" GloriousMindMine Graduates"},
    {id:2,Image:BiTimeFive,question:"1000+",answer:"Hours of Learning"},
    {id:3,Image:BiMessageAdd,question:"50+",answer:"Mock Interviews"},
    {id:4,Image:AiFillFileAdd,question:"150+",answer:"Capstone projects & Assignments"}
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
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        };
        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                    
              const {name,email,mobileNumber,designation,companyName}=formData
              const response = await fetch(
                "http://localhost:3005/interview",
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
                  email: '',
                  phoneNumber: '',
                  course: '',
                  comment: '',
                });
              } else {
                const data = await response.json();
                console.log(data.error);
                setErrorMsg(data.error);
                setSuccessMsg("");
              }
            } catch (error) {
              console.error(error);
            }
          };
        
      
    return(
        <>
        <Header/>
        <div className="HireFromUsContainer1">
            <div className="HireFromUsContainer1-1">
                <h1 className="HireFromUsContainer2Heading">Hire top 1% IT talent</h1>
                <p className="HireFromUsContainer1Text">Build your Data & Engineering Team with industry ready top skilled tech talent.</p>
                <button onClick={() => document.querySelector("#schedulecallContainer").scrollIntoView({ behavior: "smooth" })} className="HireFromUsContainer1Button">Hire Now</button>
            </div>
            <ul className="HireFromUsContainer1-2">
                {HireFromUsList1.map(each=>(
                        <HireCard1 key={each.id} details={each}/>
                ))}
            </ul>
        </div>
        <div className="HireFromUsContainer1"> 
            <img alt="" src="https://www.almabetter.com/assets/images/hire-from-us/Group%201000002260@2x%201@3x.png" className="HireFromUsContainer2Image" />
            <div className="HireFromUsContainer1-1">
                <h1 className="HireFromUsContainer2Heading">Access top notch Tech Talent</h1>
                <p className="HireFromUsContainer1Text">Our students are trained in our flagship full-stack Data Science program and would be top fit for a multitude of data-oriented roles.</p>
                <button onClick={() => document.querySelector("#schedulecallContainer").scrollIntoView({ behavior: "smooth" })} className="HireFromUsContainer1Button">Hire Now</button>
            </div>
        </div>
        <div className="HireFromUsContainer1"> 
        <div className="HireFromUsContainer1-1">
                <h1 className="HireFromUsContainer3Heading">Intensive Candidate Training</h1>
                <p className="HireFromUsContainer3Text">Our training process is quite intensive simulating a workplace environment for students to work in teams to solve industry relevant projects. With prior hands-on experience, our candidates are productive from Day 1 at the job.</p>
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
                <p className='schedule-call-success-message' >{successMsg}</p>
                <button type="submit" className="schedule-call-button">
                    Submit
                </button>
                </form>

            </div>
            </div>
 
        <Footer/>
        
        </>
    )
}

export default HireFromUs