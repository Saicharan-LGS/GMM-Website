import React, { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import '../FirstTimePopup/index.css'
import image1 from "../../Images/signupimage.jpeg";

import {BiSolidUser} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {BiSolidCategory} from 'react-icons/bi'
import {PiCertificateFill} from 'react-icons/pi'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {FaCommentDots} from 'react-icons/fa'
import Button from "../../Button"

const SelectCourseList=[
  {item:"100% Job Guarantee"},{item:"IT"},{item:"Soft Skills"},{item:"Study Abroad"}]


const SelectCourseList1={
  "100% Job Guarantee":{item:"100% Job Guarantee",detail:[{course:"Data Science Engineer"},{course:"Full Stack Developer",},{course:"AWS Cloud Technology"}]},
  "IT":{item:"IT",detail:[{course:"Data Science Engineer" },{course:"Full Stack Developer"},{course:"Digital Marketing Expert"},{course:"Salesforce Admin"},{course:"AWS Cloud Technolgy"}]},
  "Soft Skills":{item:"Soft SkillsSoft Skills", detail:[{course:"English Communication Blue Print"},{course:"Business Communication (Corporate)"},{course:"Leadership Skills"},{course:"Team Building"},{course:"IELTS"}]}, 
  "Study Abroad":{id:3,item:"Study Abroad",detail:[{id:0,course:"America"},{course:"Australia"},{course:"Canada"},{course:"Germany"},{course:"NewZealand"},{id:1,course:"Uk"},]}
}

const popupFormUrl  = process.env.REACT_APP_API_BASE_URL

const PopupForm = ({ onSubmit }) => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [Category,setCategory]=useState("100% Job Guarantee");
  const [course, setCourse] = useState('English Communication Blue Print');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState('');
  const [successMsg, setSuccessMsg] = useState("");
  const [labelName,setLabelName]=useState("course");
  const [errorMsg, setErrorMsg] = useState("");
  const [showLoader, setShowLoader] = useState(false)


  const navigate = useNavigate();
  const closePopup = () => {
    navigate("/");
  };
  useEffect(()=>{
    if(Category==="Study Abroad"){
     setLabelName("Country")
    }else{
      setLabelName("Course")
    }
  },[Category])


  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowLoader(true);
    try {
      const response = await fetch(
        `${popupFormUrl}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            course,
            phoneNumber,
            Category,
            comment
          })
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        setErrorMsg('');
        setName("");
        setEmail("");
        setPhoneNumber("");
        setCategory("100% Job Guarantee");
        setCourse("English Communication Blue Print");
        setComment("");
        setShowLoader(false);
      } else {
        const data = await response.json();
        
        setErrorMsg(data.error);
        setSuccessMsg('');
        setName("");
        setEmail("");
        setPhoneNumber("");
        setCategory("100% Job Guarantee");
        setCourse("English Communication Blue Print");
        setComment("");
        setShowLoader(false);
      }
    } catch (error) {
      setErrorMsg(error);
        setSuccessMsg('');
    }
  };

  return ( 
    <div className="ppr-popup1">
         <form className="ppr-popup-content1">
           <div className='ppr-pop-content-image-container1' >
             <img src={image1} alt="" className='ppr-callback-logo1' />
           </div>
           <div className='ppr-pop-content-content-container1'>
            <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
             <h2 className="ppr-request-call-back1">Request a Callback!</h2>
             <span className="ppr-close1" onClick={closePopup}>
               &times;
             </span>
            </div>
            <div className='popup-inputcontainer'>
             <label className="ppr-popup-label-name1" htmlFor="name">Name *</label>
             <div className="ppr-popup-input1-container">
              <BiSolidUser className="ppr-popup-input1-icon"/>
             <input
               type="text"
               id="name"
               placeholder="Enter your name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="ppr-popup-input1"
               required
             />
             </div>
             <label htmlFor="email" className="ppr-popup-label-name1">Email Address *</label>
             <div className="ppr-popup-input1-container">
              <MdEmail className="ppr-popup-input1-icon"/>
             <input
               type="email"
               id="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="ppr-popup-input1"
               required
             />
             </div>
             
             <label htmlFor="course" className="ppr-popup-label-name1">Select Category *</label>
             <div className="ppr-popup-input1-container">
              <BiSolidCategory className="ppr-popup-input1-icon"/>         
             <select
               id="category"
               value={Category}
               onChange={(e) => setCategory(e.target.value)}
               className="ppr-popup-input1 ppr-popup-select1"
               required>
              {SelectCourseList.map(each=>(
                <option key={each.item}>{each.item}</option>
              ))}
             </select>
             </div>
             <label htmlFor="course" className="ppr-popup-label-name1">{`Select ${labelName} *`}</label>
             <div className="ppr-popup-input1-container">
              <PiCertificateFill className="ppr-popup-input1-icon"/>   
             <select
               id="course"
               value={course}
               onChange={(e) => setCourse(e.target.value)}
               className="ppr-popup-input1 ppr-popup-select1"
               required>
                {SelectCourseList1[Category].detail.map((each)=>(
                <option key={each.course}>{each.course}</option>
              ))}
             </select>
             </div>
             <label htmlFor="phoneNumber" className="ppr-popup-label-name1">Phone Number * </label>
             <div className="ppr-popup-input1-container">
              <BiSolidPhoneCall className="ppr-popup-input1-icon"/> 
             <input
               type="number"
               id="phoneNumber"
               placeholder="Enter your phone number"
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
               className="ppr-popup-input1"
               required
             />
             </div>
             <label htmlFor="comment" className="ppr-popup-label-name1">Comment</label>
             <div className="ppr-popup-input1-container">
              <FaCommentDots className="ppr-popup-input1-icon"/> 
             <input
               type="text"
               id="comment"
               placeholder="Enter your Comment"
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               className="ppr-popup-input1"
             />
             </div>
             <p className='ppr-message1'>{successMsg}{errorMsg}</p>
             <div className='buttton-popupform-conatiner1'>
             <Button text="Submit"
                    onSubmit={handleSubmit}
                    loading={showLoader}
                    disabled={showLoader}/>
             </div>
             
             </div>
           </div>
         </form>
       </div>
  );
};

export default PopupForm;