import "./index.css"
import React, { useState } from 'react';
import {AiOutlineForm} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
const StudyAbroadPopUp=()=>{
        const [email, setEmail] = useState('');
        const [name, setName] = useState('');
        const [course, setCourse] = useState('English Communication Blue Print');
        const [phoneNumber, setPhoneNumber] = useState(null);
        const [comment, setComment] = useState('');
        const [successMsg, setSuccessMsg] = useState('');
        const [errorMsg, setErrorMsg] = useState('');
        const [showPopup, setShowPopup] = useState(true);
        const navigate = useNavigate();
        const closePopup = () => {
          setShowPopup(false);
          navigate("/");
        };
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

    return(
        <div className="study-abroad-popup-container">
            <div className="study-abroad-popup-container1">
                <div className="study-abroad-popup-icon-container">
                    <AiOutlineForm className="study-abroad-popup-icon" />
                </div>
                <div className="study-abroad-popup-icon-right-container">
                    <h3 className="study-abroad-popup-icon-right-container-heading">Register Now To Consult A Counsellor</h3>
                    <p className="study-abroad-popup-icon-right-container-text">Get details and latest updates</p>
                </div>
            </div>
            <hr />
            <div className="study-abroad-popup-inputs-container">
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="study-ppr-popup-input"
                    required
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="study-ppr-popup-input"
                    required
                />
                <select
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="study-ppr-popup-input study-ppr-popup-select"
                    required>
                    <option value="English Communication Blue Print" >English Communication Blue Print</option>
                    <option value="Full Stack Developer" >Full Stack Developer</option>
                    <option value="Data Science" >Data Science</option>
                    <option value="Sales Force Admin" >Sales Force Admin</option>
                    <option value="Mendix" >Mendix</option>
                    <option value="Polarion">Polarion</option>
                    <option value="Digital Marketing Expert">Digital Marketing Expert</option>
                </select>
                <input
                    type="number"
                    id="phoneNumber"
                    placeholder="Country"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="study-ppr-popup-input"
                    required/>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="study-ppr-popup-input"
                    required
                />
                <input
                    type="text"
                    id="comment"
                    placeholder="Enter your Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="study-ppr-popup-input"/>
            </div>
            <button type="submit" className="study-abroad-popup-button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default StudyAbroadPopUp


