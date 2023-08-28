import React, { useState,useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import '../FirstTimePopup/index.css'
import image1 from "../../Images/signupimage.jpeg";


const SelectCourseList=[
  {item:"100% Job Guarantee"},{item:"IT"},{item:"Soft Skills"},{item:"Study Abroad"}]


const SelectCourseList1={
  "100% Job Guarantee":{item:"100% Job Guarantee",detail:[{course:"Data Science Engineer"},{course:"Full Stack Developer",},{course:"AWS Cloud Technology"}]},
  "IT":{item:"IT",detail:[{course:"Data Science Engineer" },{course:"Full Stack Developer"},{course:"Digital Marketing Expert"},{course:"Salesforce Admin"},{course:"AWS Cloud Technolgy"}]},
  "Soft Skills":{item:"Soft SkillsSoft Skills", detail:[{course:"English Communication Blue Print"},{course:"Business Communication (Corporate)"},{course:"Leadership Skills"},{course:"Team Building"},{course:"IELTS"}]}, 
  "Study Abroad":{item:"Study Abroad",detail:[{course:"canada"},{course:"uk"}]}
}

const PopupForm = ({ onSubmit }) => {

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


  const navigate = useNavigate();
  const closePopup = () => {
    setShowPopup(false);
    navigate("/");
  };
  useEffect(()=>{
    if(Category==="Study Abroad"){
     setLabelName("Country")
    }else{
      setLabelName("Course")
    }
  })


  console.log(showPopup)
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
            comment
          })
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        setErrorMsg('');
      } else {
        const data = await response.json();
        console.log(data.error);
        setErrorMsg(data.error);
        setSuccessMsg('');
      }
    } catch (error) {
      console.error(error);
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
             <input
               type="text"
               id="name"
               placeholder="Enter your name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="ppr-popup-input1"
               required
             />
             <label htmlFor="email" className="ppr-popup-label-name1">Email Address *</label>
             <input
               type="email"
               id="email"
               placeholder="Enter your email address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="ppr-popup-input1"
               required
             />
             <label htmlFor="course" className="ppr-popup-label-name1">Select Category *</label>
             <select
               id="course"
               value={Category}
               onChange={(e) => setCategory(e.target.value)}
               className="ppr-popup-input1 ppr-popup-select1"
               required>
              {SelectCourseList.map(each=>(
                <option>{each.item}</option>
              ))}
             </select>
             <label htmlFor="course" className="ppr-popup-label-name1">{`Select ${labelName} *`}</label>
             <select
               id="course"
               value={course}
               onChange={(e) => setCourse(e.target.value)}
               className="ppr-popup-input1 ppr-popup-select1"
               required>
                {SelectCourseList1[Category].detail.map((each)=>(
                <option>{each.course}</option>
              ))}
             </select>
             <label htmlFor="phoneNumber" className="ppr-popup-label-name1">Phone Number * </label>
             <input
               type="number"
               id="phoneNumber"
               placeholder="Enter your phone number"
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
               className="ppr-popup-input1"
               required
             />
             <label htmlFor="comment" className="ppr-popup-label-name1">Comment</label>
             <input
               type="text"
               id="comment"
               placeholder="Enter your Comment"
               value={comment}
               onChange={(e) => setComment(e.target.value)}
               className="ppr-popup-input1"
             />
             <p className='ppr-success-message1'>{successMsg}</p>
             <p className='ppr-error-message1'>{errorMsg}</p>
             <button type="submit" className='popup-button1' onClick={handleSubmit}>Submit</button>
             </div>
           </div>
         </form>
       </div>
  );
};

export default PopupForm;