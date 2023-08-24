import React, { useState } from 'react';
import projectsImage from "../../../Images/projects.png"
import mockImage from "../../../Images/interview.png"
import gameImage  from "../../../Images/game.png"
import "../../DataScience/CourseJobReady/index.css"

const CourseJobReady = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  const tabData=[
    {
        title: "Capstone Projects",
        description:"Undertake industry level capstone projects in teams.",
        images: projectsImage 
    },
    {
        title: "Mock Interviews",
        description:"Interview prep through 20+ live mock interviews with real time feedback evaluation",
        images:mockImage 
      }
      ,
    {
      title: "Gamified Experiment",
      description:"learn complex concepts through games & experiments at GloriousMindMine Labs",
      images: gameImage
    }
    
  
  ]
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Listen for window resize to detect mobile view changes
  window.addEventListener('resize', () => {
    setIsMobileView(window.innerWidth <= 767);
  });

  return (
    <div className="courseReady-tab-content-container">
      {!isMobileView && ( // Render tabs on the left side for large devices
        <ul className="courseReady-tab-list">
          {tabData.map((tab, index) => (
            <li
              key={index}
              className={`${activeTab === index ? 'courseReady-active-tab' : ''} courseReady-tab-list-item`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      )}
      <div className="courseReady-main-container">
        {isMobileView ? ( // Render accordion for mobile devices
          <div className="courseReady-accordion-content-display">
            {tabData.map((tab, index) => (
              <div key={index} className="courseReady-accordion">
                <div
                  className={`courseReady-accordion-header ${activeTab === index ? 'courseReady-active-accordion' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </div>
                {activeTab === index && (
                  <div className="courseReady-accordion-content">
                    <img src={tabData[index].images} alt="" className="courseReady-accordion-image" />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Render content on the right side for large devices
          <div className="courseReady-content-display">
          <img src={tabData[activeTab].images} alt="" className="courseReady-content-image"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseJobReady