import React, { useState } from 'react';

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
    <div className="course-tab-content-container">
      {!isMobileView && ( // Render tabs on the left side for large devices
        <ul className="course-tab-list">
          {tabData.map((tab, index) => (
            <li
              key={index}
              className={`${activeTab === index ? 'course-active-tab' : ''} course-tab-list-item`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      )}
      <div className="course-main-container">
        {isMobileView ? ( // Render accordion for mobile devices
          <div className="course-accordion-content-display">
            {tabData.map((tab, index) => (
              <div key={index} className="course-accordion">
                <div
                  className={`course-accordion-header ${activeTab === index ? 'course-active-accordion' : ''}`}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.title}
                </div>
                {activeTab === index && (
                  <div className="course-accordion-content">
                    <img src={tabData.images} alt="" />
                    </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Render content on the right side for large devices
          <div className="course-content-display">
          <img src={tabData[activeTab].images} alt=""/>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseJobReady