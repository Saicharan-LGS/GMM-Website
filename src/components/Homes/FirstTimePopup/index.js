import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from "../../Images/signupimage.jpeg"
import { BiCategory } from 'react-icons/bi';

const SelectCourseList=[
  {id:0,item:"100% Job Guarantee",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"AWS Cloud Technology",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
  {id:1,item:"IT",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#RightChoice",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Digital Marketing Expert",link:"/DigitalMarkting",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Salesforce Admin",link:"/salesforce",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"AWS Cloud Technolgy",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
  {id:2,item:"Soft Skills", detail:[{id:0,course:"English Communication Blue Print",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Business Communication (Corporate)",link:"/businesscorporate",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Leadership Skills",link:"/leadership",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Team Building",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"IELTS",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]}, 
  {id:3,item:"Study Abroad",detail:[{id:0,course:"canada"},{id:1,course:"uk"}]}
]

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
  const [Id,setId]=useState(0);

  useEffect(()=>{
    if(Category==="100% Job Guarantee"){
      setId(0)
      setLabelName("course")
    }else if (Category==="Soft Skills"){
      setId(2)
      setLabelName("course")
    }else if (Category==="IT"){
      setId(1)
      setLabelName("course")
    }
    else{
      setId(3)
      setLabelName("country")
    }
  })

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
            comment
          })
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSuccessMsg(data.success);
        setErrorMsg("");
      } else {
        const data = await response.json();

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
                {SelectCourseList[Id].detail.map((each)=>(
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
      )}
    </>
  );
};

export default FirstTimePopup;