import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from "../../Images/signupimage.jpeg"

import {BiSolidUser} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {BiSolidCategory} from 'react-icons/bi'
import {PiCertificateFill} from 'react-icons/pi'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {FaCommentDots} from 'react-icons/fa'

const SelectCourseList=[
  {id:0,item:"100% Job Guarantee"},{id:1,item:"IT"},{id:2,item:"Soft Skills"},{id:3,item:"Study Abroad"}]


const SelectCourseList1={
  "100% Job Guarantee":{id:0,item:"100% Job Guarantee",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"AWS Cloud Technology",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
  "IT":{id:1,item:"IT",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#RightChoice",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Digital Marketing Expert",link:"/DigitalMarkting",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Salesforce Admin",link:"/salesforce",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"AWS Cloud Technolgy",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
  "Soft Skills":{id:2,item:"Soft SkillsSoft Skills", detail:[{id:0,course:"English Communication Blue Print",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Business Communication (Corporate)",link:"/businesscorporate",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Leadership Skills",link:"/leadership",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Team Building",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"IELTS",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]}, 
  "Study Abroad":{id:3,item:"Study Abroad",detail:[{id:0,course:"America"},{course:"Australia"},{course:"Canada"},{course:"Germany"},{course:"NewZealand"},{id:1,course:"Uk"},]}
}

const FirstTimePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [Category,setCategory]=useState("100% Job Guarantee");
  const [course, setCourse] = useState('English Communication Blue Print');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState('');
  const [successMsg, setSuccessMsg] = useState("");
  const [labelName,setLabelName]=useState("course");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(()=>{
    if(Category==="Study Abroad"){
     setLabelName("Country")
    }else{
      setLabelName("Course")
    }
  },[Category])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3005/register",
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
            comment,
            Category
          })
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        setErrorMsg("");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setCategory("100% Job Guarantee");
        setCourse("English Communication Blue Print");
        setComment("");
      } else {
        const data = await response.json();
        setErrorMsg(data.error)
        setSuccessMsg("");
      }
    } catch (error) {
    }
  };
  return (
    <>
      {showPopup && (
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
             <button type="submit" className='popup-button1' onClick={handleSubmit}>Submit</button>
             </div>
           </div>
         </form>
       </div>
      )}
    </>
  );
};

export default FirstTimePopup;