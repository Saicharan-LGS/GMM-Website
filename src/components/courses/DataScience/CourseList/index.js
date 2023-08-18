import React, { useState } from 'react';
import './index.css'
const CourseList = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 767);
  const {tabData} = props
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
                    <ul>
                    {tab.content.map((item,index)=>(
                        <li key={index} className="course-Content-list-item">
                            {item}
                        </li>
                    ))}
                    </ul>
                    </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Render content on the right side for large devices
          <div className="course-content-display">
            <h1 className="course-List-Topic-heading">Topics</h1>
          <ul>{tabData[activeTab].content.map((item,index)=>(
                <li key={index} className="course-Content-list-item">{item}</li>
          ))}</ul>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;