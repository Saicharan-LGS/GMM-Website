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
      {/*<div className="TotalFooterContainer container-fluid">
        <div className="footerContainer">
          <div className="container">
            <div className="row">
              <div className=" col-12 col-md-3">
                <div className="footerContent pt-3">
                  <p>
                    Glorious Mindmine <br />
                    has the required experience to help architect, design,
                    develop and deliver any technical solution to your
                    organization..
                  </p>

                  <div className="footerIconsContainer p-2">
                    <div>
                      <BiLogoFacebook
                        className="footerIcon bg-secondary"
                        size="30"
                        height="30"
                        color="#0edae8"
                      />
                    </div>

                    <div>
                      <AiOutlineTwitter
                        className="footerIcon bg-secondary"
                        size="30"
                        height="30"
                        color="#0edae8"
                      />
                    </div>

                    <div>
                      <TiSocialLinkedin
                        className="footerIcon bg-secondary"
                        size="30"
                        height="30"
                        color="#0edae8"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-12 col-md-3">
                <div className="footerContact">
                  <h1 className="footerHeader">Contact info</h1>

                  <hr className="footerHorizontalLine" />

                  <ol className="footerContactListClumzi">
                    <li className="footerContactListItem ">
                      <div className="m-1">
                        <BiPhoneCall size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2">080084 68885</p>
                    </li>

                    <li className="footerContactListItem ">
                      <div className="footerIcon m-1">
                        <BiLogoGmail size="12" color="#0edae8" />
                      </div>

                      <div className="Footerdiv">
                        <p className="pl-2">
                          info@gloriousmindmine.com
                          <br />
                          Address: 401, 4th Floor, Mustafa Tower, Lakdi Ka
                          Pool-Khairatabad, Hyderabad, Telangana 500004
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className=" col-12 col-md-3">
                <div className="footerUsefullLinks">
                  <h1 className="footerHeader">Courses</h1>

                  <hr className="footerHorizontalLine" />

                  <ol className="footerContactList">
                    <li className="footerContactListItem ListItem3">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Full Stack Development</p>
                    </li>

                    <li className="footerContactListItem ListItem4">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Data Science</p>
                    </li>

                    <li className="footerContactListItem ListItem5">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2 ">Mendix</p>
                    </li>

                    <li className="footerContactListItem ListItem6">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Polarian</p>
                    </li>
                    <li className="footerContactListItem ListItem6">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Sales Force Developer</p>
                    </li>
                    <li className="footerContactListItem ListItem6">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Digital Marketing</p>
                    </li>
                    <li className="footerContactListItem ListItem6">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Communication</p>
                    </li>
                  </ol>
                </div>
              </div>

              <div className=" col-12 col-md-3">
                <div className="footerServices">
                  <h1 className="footerHeader">Company</h1>

                  <hr className="footerHorizontalLine" />

                  <ol className="footerContactList">
                    <li className="footerContactListItem ListItem7">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Hire FromUs</p>
                    </li>

                    <li className="footerContactListItem ListItem8">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Placements</p>
                    </li>

                    <li className="footerContactListItem ListItem9 m-1">
                      <FaGreaterThan size="10" color="#0edae8" />

                      <p className="pl-2 pt-2">courses</p>
                    </li>

                    <li className="footerContactListItem ListItem4">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Community</p>
                    </li>

                    <li className="footerContactListItem ListItem4">
                      <div className="footerIcon m-1">
                        <FaGreaterThan size="10" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Events</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>*/}
      <div class="Ecommerce-Website-Footer-Section-bg pb-5 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="d-flex flex-column justify-conent-start justify-conent-md-start ">
                        <div class="text-md-left text-sm-center mb-3 footer-section-company-logo">
                            <img src={gmmlogo} alt="" className="Ecommerce-Website-Footer-Section-logo" />
                        </div>
                        <div class="d-flex flex-row justify-content-md-start justify-conent-center mt-3 ml-3 mb-3 footer-section-company-logo">
                            <a href="https://www.facebook.com/gloriousmindmine" target="_blank" class="Ecommerce-Website-Footer-Section-logo-card mr-2">
                                <BiLogoFacebook/>
                            </a>
                            <a href="https://twitter.com/GmmTraining" target="_blank" class="Ecommerce-Website-Footer-Section-logo-card mr-2">
                              <AiOutlineTwitter/>
                            </a>
                            <a href="https://www.linkedin.com/company/glorious-mindmine-consulting-pvt-ltd-/" target="_blank" class="Ecommerce-Website-Footer-Section-logo-card mr-2">
                                <BiLogoLinkedin/>
                            </a>
                            <a href="https://www.instagram.com/gloriousmindmine/" target="_blank" class="Ecommerce-Website-Footer-Section-logo-card">
                                <BsInstagram/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-6 col-lg-3">
                    <div>
                        <h1 class="Ecommerce-Website-Footer-Section-heading mb-4">Quick links</h1>
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
                        <Link
                          to="/aboutus" style={{textDecorationLine:"none",color:"black"}}
                          >
                          <p className="Footer-Each-course" >About Us</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-6 col-lg-3">
                    <div>
                        <h1 class="Ecommerce-Website-Footer-Section-heading mb-4">Courses</h1>
                        <div className="Footer-courses-list">
                          <Link to="/DigitalMarkting"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">DigitalMarketing</p></Link>
                          <Link to="/english"  style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course"> English Communication</p></Link>
                          <Link to="/salesforce" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Salesforce</p></Link>
                          <Link to="/Mendix" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Mendix</p></Link>
                          <Link to="/Polarian" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">Polarion</p></Link>
                          <Link to="/Datascience" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">DataScience</p></Link>
                          <Link to="/FullStackCourse" className="Footer-Each-cours" style={{textDecorationLine:"none",color:"black"}}><p className="Footer-Each-course">FullStack</p></Link>
                        </div>  
                    </div>
                </div>
                <div class="col-6 col-md-6 col-lg-3">
                    <div class="mt-1">
                        <h1 class="Ecommerce-Website-Footer-Section-heading mb-4">Contact Us</h1>
                        <div className="Footer-courses-list-2">
                          <p>+19-800-844885</p>
                          <p>connect@gloriousmindmine</p>
                          <p>201,2nd Floor, Mustafa Towers,</p> 
                            <p>Lakdikapul-500004</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <hr class="Ecommerce-Website-Footer-Section-line" />
            <div class="d-flex flex-row justify-content-center">
                <div class="Ecommerce-Website-Footer-Section-copy-right">
                    <i class="fa fa-copyright" aria-hidden="true"></i>
                </div>
                <div class="ml-2 mt-1">
                    <h1 class="Ecommerce-Website-Footer-Section-address">Copyright © 2022 ZEESHAAN MEHDI | By Zeeshaan Mehdi (a.k.a English Communication Coach)</h1>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Footer