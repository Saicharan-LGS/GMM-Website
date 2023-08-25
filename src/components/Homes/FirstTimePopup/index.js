import React, { useState, useEffect } from 'react';
import './index.css';
import image1 from "../../Images/signupimage.jpeg"

const FirstTimePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('English Communication Blue Print');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [comment, setComment] = useState('');
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

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
        console.log(data.error);
        setErrorMsg(data.error);
        setSuccessMsg("");
      }
    } catch (error) {
      console.error(error);
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
             <label htmlFor="course" className="ppr-popup-label-name1">Select Course *</label>
             <select
               id="course"
               value={course}
               onChange={(e) => setCourse(e.target.value)}
               className="ppr-popup-input1 ppr-popup-select1"
               required>
               <option value="English Communication Blue Print" >English Communication Blue Print</option>
               <option value="Full Stack Developer" >Full Stack Developer</option>
               <option value="Data Science" >Data Science</option>
               <option value="Sales Force Admin" >Sales Force Admin</option>
               <option value="Mendix" >Mendix</option>
               <option value="Polarion">Polarion</option>
               <option value="Digital Marketing Expert">Digital Marketing Expert</option>
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