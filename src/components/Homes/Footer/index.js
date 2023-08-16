import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './index.css'
//import { FaGreaterThan } from "react-icons/fa";
//import { TiSocialLinkedin } from "react-icons/ti";

//import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
//import { BiPhoneCall, BiLogoFacebook, BiLogoGmail } from "react-icons/bi";

import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import gmmlogo from '../../Images/GMM logo.png'

const Footer = () => {
  return (
    <>
      <div className="Ecommerce-Website-Footer-Section-bg pb-5 pt-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="d-flex flex-column justify-conent-start justify-conent-md-start ">
                        <div className="text-md-left text-sm-center mb-3 footer-section-company-logo">
                            <img src={gmmlogo} alt="" className="Ecommerce-Website-Footer-Section-logo" />
                        </div>
                        <div className="d-flex flex-row justify-content-md-start justify-conent-center mt-3 ml-3 mb-3 footer-section-company-logo">
                            <a href="https://www.facebook.com/gloriousmindmine" rel="noreferrer" target="_blank" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                                <BiLogoFacebook/>
                            </a>
                            <a href="https://twitter.com/GmmTraining" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                              <AiOutlineTwitter/>
                            </a>
                            <a href="https://www.linkedin.com/company/glorious-mindmine-consulting-pvt-ltd-/" rel="noreferrer" target="_blank" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                                <BiLogoLinkedin/>
                            </a>
                            <a href="https://www.instagram.com/gloriousmindmine/" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card">
                                <BsInstagram/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div>
                        <h1 className="Ecommerce-Website-Footer-Section-heading mb-4">Quick links</h1>
                        <div className="Footer-courses-list">
                        <Link
                          to="/career" style={{textDecorationLine:"none",color:"black"}}
                        >
                          <p className="Footer-Each-course">Career Support</p>
                        </Link>
                        <Link
                          to="/success" style={{textDecorationLine:"none",color:"black"}}
                        >
                          <p className="Footer-Each-course" >Success Stories</p>
                        </Link>
                        <Link style={{textDecorationLine:"none",color:"black"}}
                          to="/Hirefromus"
                          >
                          <p className="Footer-Each-course" >Hire From Us</p>
                        </Link>
                        <Link style={{textDecorationLine:"none",color:"black"}}
                          to="/corporate"
                          >
                          <p className="Footer-Each-course" >Corporate</p>
                        </Link>
                        <Link
                          to="/aboutus" style={{textDecorationLine:"none",color:"black"}}
                          >
                          <p className="Footer-Each-course" >About Us</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div>
                        <h1 className="Ecommerce-Website-Footer-Section-heading mb-4">Courses</h1>
                        <div className="Footer-courses-list">
                          <Link to="/english"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course"> English Communication</p></Link>
                          <Link to="/Datascience" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Data Science Engineer</p></Link>
                          <Link to="/FullStackCourse" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Full Stack Developer</p></Link>
                          <Link to="/Mendix" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Mendix Developer</p></Link>
                          <Link to="/Polarian" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Polarion Expert</p></Link>
                          <Link to="/DigitalMarkting"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Digital Marketing</p></Link>
                          <Link to="/salesforce" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Salesforce Admin</p></Link>
                          </div>  
                    </div>
                </div>
                <div className="col-6 col-md-6 col-lg-3">
                    <div className="mt-1">
                        <h1 className="Ecommerce-Website-Footer-Section-heading mb-4">Contact Us</h1>
                        <div className="Footer-courses-list-2">
                          <p>+19-800-844885</p>
                          <p>connect@gloriousmindmine</p>
                          <p>201,2nd Floor, Mustafa Towers,</p> 
                            <p>Lakdikapul-500004</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="Ecommerce-Website-Footer-Section-line" />
            <div className="d-flex flex-row justify-content-center">
                <div className="Ecommerce-Website-Footer-Section-copy-right">
                    <i className="fa fa-copyright" aria-hidden="true"></i>
                </div>
                <div className="ml-2 mt-1">
                    <h1 className="Ecommerce-Website-Footer-Section-address">Copyright @2023 By Glorious Mindmine</h1>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer