import React from 'react'
import CourseList from '../CourseList'
import "../../DataScience/FullStack/index.css"


const foundation = [

  {
    title: "Introduction to Sales Force",
    content: [
      "Overview of Sales Force",
      "Sales Force Architecture",
      "Sales Cloud and Service Cloud",
      "Sales Force Editions",

      "Sales Force Objects and Fields",

      "Sales Force Security Model",

    ],

  },

  {

    title: "Sales Force Setup and Configuration",

    content: [

      "Sales Force Org Setup",

      "User and Role Management",

      "Sales Force Profiles and Permissions",

      "Sales Force Customization",

      "Sales Force Workflows and Approvals",

      "Sales Force Data Validation and Rules",

    ],

  },

  {

    title: "Sales Force Data Management",

    content: [

      "Data Import and Export",

      "Sales Force Data Loader",

      "Data Deduplication",

      "Sales Force Data Relationships",

      "Sales Force Reports and Dashboards",

    ],

  },

  {

    title: "Sales Force Automation",

    content: [

      "Sales Force Sales Cloud",

      "Sales Force Service Cloud",

      "Sales Force Marketing Cloud",

      "Sales Force Lead Management",

      "Sales Force Opportunity Management",

      "Sales Force Case Management",

    ],

  },

  {

    title: "Sales Force Integration",

    content: [

      "Sales Force API Integration",

      "Sales Force AppExchange",

      "Sales Force Connect",

      "Sales Force Web-to-Lead Forms",

    ],

  },

  {

    title: "Sales Force Best Practices",

    content: [

      "Sales Force Admin Best Practices",

      "Sales Force Performance Optimization",

      "Sales Force Troubleshooting",

      "Sales Force Tips and Tricks",

    ],

  },

];


  const specialisationTrack=[
    {

      title: "Sales Force Mobile App",
  
      content: [
  
        "Sales Force Mobile App Features",
  
        "Sales Force Mobile Configuration",
  
        "Sales Force Mobile Security",
  
      ],
  
    },
  
    {
  
      title: "Sales Force Lightning Experience",
  
      content: [
  
        "Introduction to Lightning Experience",
  
        "Sales Force Lightning Components",
  
        "Sales Force Lightning App Builder",
  
        "Sales Force Lightning Pages",
  
      ],
  
    },
  
    {
  
      title: "Sales Force Community Cloud",
  
      content: [
  
        "Sales Force Community Cloud Setup",
  
        "Sales Force Community Cloud Management",
  
        "Sales Force Community Cloud Customization",
  
        "Sales Force Community Cloud Engagement",
  
      ],
  
    },
  
    {
      title: "Sales Force Security and Compliance",
      content: [
        "Sales Force Data Security",
        "Sales Force Compliance Standards",
        "Sales Force GDPR Compliance",
      ],
    },
  ]

  const careerTrack=[
    {
      title: "Business Communication",
      content: [
            "7 Cs of Business Communication",
            "Grammar: Tenses, Adjectives, and Verbs",
            "Body Language & Modals",
            "Ace your Business Presentations",
            "Email Writing",
            "Telephonic Communication and Business Vocab",
            "Networking and building Interpersonal Skills"
  
          ]
    },
    {
      title: "Profile and Resume Building",
      content: [
            "Build highly optimized Resumes and Cover Letters",
            "Build your LinkedIn Profile",
            "Build your GitHub Portfolio",
            "Build your own website"
          ]
    },
    {
      title: "Interview Prep and Mock Interview",
      content: [
            "Interview Best Practices",
            "10+ Mock Coding Interviews",
            "10+ Mock Analytics Interviews",
            "10+ Mock Communication Interviews",
            "Company-wise Interview Guides"
          ]
    },
    {
      title: "Coding and Techanical Revision",
      content: [
        "20+ Coding Challenges",
        "50+ Assignments",
        "Advanced JavaScript",
        "React Project",
        "Node Project",
        "System Design Project",
      ]
    }
  ]

  
const FullStack=()=> {
  return (
    <div className="Fullstack-main-container">
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> Glorious Mind Mine</span></h2>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Foundation</span> Track </h2>
          <p className="Foundation-track-description">GloriousMindMine's Salesforce Admin course begins by cementing your foundation in Salesforce Admin concepts.</p>
          <CourseList tabData={foundation}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialisation</span> Track</h2>
          <p className="Foundation-track-description">Our SalesForce Admin course syllabus covers specialisations that help you become a nice SalesForce professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our SalesForce Admin course syllabus covers specialisations that help you become a nice SalesForce professional.</p>
          <CourseList tabData={careerTrack}/>
        </div>
        <div>
            <h2 className="Foundation-track-heading">Congratulations! You are now placed at one of the tech companies as a Web Development Professional</h2>
            <div className="Fullstack-company-image-container">
                <img src="https://www.almabetter.com/assets/courses/companies.png" alt="" className="Fullstack-company-image"/>
            </div>
  </div>
        
    </div>
 )
}


export default FullStack