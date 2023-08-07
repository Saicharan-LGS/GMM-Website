import React, { useState } from 'react';
import './index.css'
const CourseJobReady = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  const tabData=[
    {
        title: "Capstone Projects",
        description:"Undertake industry level capstone projects in teams.",
        images: "https://res.cloudinary.com/dhqtirwdn/image/upload/v1689830788/lu0xj2wxccgehihfrhj6.png"
    },
    {
        title: "Mock Interviews",
        description:"Interview prep through 20+ live mock interviews with real time feedback evaluation",
        images: "https://www.almabetter.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmock-interview.a9b5d677.webp&w=1920&q=75"
      }
      ,
    {
      title: "Gamified Experiment",
      description:"learn complex concepts through games & experiments at AlamBetter Labs",
      images: "https://raccoongang.com/wp-content/uploads/2021/09/Gamification_in_Education_and_Its_Examples.png"
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

export default CourseJobReady