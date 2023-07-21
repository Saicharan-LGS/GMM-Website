import React from "react";
import "bootstrap/dist/css/bootstrap.css";
//import { Link } from "react-router-dom";
import "../HomeMain/index.css";
//import Nav from "../Nav";
import './index.css'
import { FaGreaterThan } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";

//import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BiPhoneCall, BiLogoFacebook, BiLogoGmail } from "react-icons/bi";

 const Footer = () => {
  return (
    <>
      <div className="TotalFooterContainer container-fluid">
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
                    <li className="footerContactListItem ListItem1">
                      <div>
                        <BiPhoneCall size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2">080084 68885</p>
                    </li>

                    <li className="footerContactListItem ListItem2">
                      <div className="footerIcon">
                        <BiLogoGmail size="15" color="#0edae8" />
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
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Full Stack Development</p>
                    </li>

                    <li className="footerContactListItem ListItem4">
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Data Science</p>
                    </li>

                    <li className="footerContactListItem ListItem5">
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Mendix</p>
                    </li>

                    <li className="footerContactListItem ListItem6">
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Polarian</p>
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
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Hire FromUs</p>
                    </li>

                    <li className="footerContactListItem ListItem8">
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Placements</p>
                    </li>

                    <li className="footerContactListItem ListItem9">
                      <FaGreaterThan size="15" color="#0edae8" />

                      <p className="pl-2 pt-2">courses</p>
                    </li>

                    <li className="footerContactListItem ListItem4">
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Community</p>
                    </li>

                    <li className="footerContactListItem ListItem4">
                      <div className="footerIcon">
                        <FaGreaterThan size="15" color="#0edae8" />
                      </div>

                      <p className="pl-2 pt-2">Events</p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer