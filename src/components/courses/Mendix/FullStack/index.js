import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"

const foundation = [
    { title: 'Induction Programme and Agile', content:[
      "Introduction to Front-end Development in Mendix",
      "Creating Pages and Layouts",
      "Mendix UI Components",
      "Styling and Theming in Mendix",
      "Responsive Web Design",
      "Implementing Navigation and Menus",
      "Agile Software Development Methodology",
        "Scrum Framework",
        "Agile Principles and Values",
        "Roles in Agile Teams",
        "Sprint Planning and Execution",
        "Daily Stand-ups and Sprint Reviews",
        "Retrospectives and Continuous Improvement",
      ]  },
      {
        title: "Pages/FE - UI/UX - Take 1 and Take 2",
        content: [
          "Introduction to Front-end Development in Mendix",
          "Creating Pages and Layouts",
          "Mendix UI Components",
          "Styling and Theming in Mendix",
          "Responsive Web Design",
          "Implementing Navigation and Menus",
          "Advanced UI Techniques in Mendix",
            "Working with Custom Widgets",
            "Client-Side Events and Actions",
            "Dynamic UI Elements",
            "Integrating External Libraries and CSS",
            "Accessibility in Mendix Applications",
          ]
      },
      {
        title: "Database - Domain Model and XPATH ",
        content: [
          "Introduction to Mendix Domain Model",
          "Entities and Attributes",
          "Data Types and Constraints",
          "Creating Associations and References",
          "Security in Mendix Apps",
          "Entity Access Rules",
          "Understanding XPATH in Mendix",
          "XPATH Expressions and Functions",
          "Filtering and Sorting Data with XPATH",
          "Aggregations and Grouping",
          "Advanced XPATH Techniques",
          "Using XPATH in Microflows"
          ]
      },
      {
        title: "Microflows - Take 1 and Take 2 ",
        content: [
          "Introduction to Microflows",
          "Building Simple Microflows",
          "Microflow Actions and Activities",
          "Decision and Validation Microflows",
          "Error Handling in Microflows",
          "Advanced Microflow Techniques",
          "Sub-Microflows and Reusability",
          "Loops and Iterations",
          "Commit and Rollback Handling",
          "Debugging and Monitoring Microflows"
          ]
      },
      {
        title: "Logic Drafting - Micro/Nanoflows/JavaActions",
        content: [
          "Introduction to Logic Drafting",
          "Implementing Logic in Microflows",
          "Using Nanoflows for Modularity",
          "Creating Java Actions",
          "Integration with Java Code",
          "Advanced Logic Drafting Techniques",
          "Transaction Handling in Microflows",
          "Optimization and Performance Tuning",
          "Unit Testing Logic in Mendix",
          "Best Practices for Logic Drafting"
        ]
      },
      {
        title: "Data Integration wiz/ DataHub and Workflows",
        content: [
          "Overview of Data Integration in Mendix",
          "Working with DataHub",
          "Data Mapping and Synchronization",
          "Data Import and Export",
          "Real-time Data Integration",
          "Workflow Automation in Mendix",
          "Setting up Workflows",
          "Defining Workflow States and Transitions",
          "Workflow Actions and Notifications",
          "Managing and Monitoring Workflows",
        ]
      }


  ];

  const specialisationTrack = [
    {
      title: "DevOps in Mendix - CI/CD(VCS, Deployment)",
      content: [
        "Continuous Integration and Continuous Deployment",
        "Version Control System Integration",
        "Setting up CI/CD Pipelines for Mendix Apps",
        "Automated Deployment Processes",
        "Ensuring Quality in CI/CD",
      ],
    },
    {
      title: "Native Mobile Building in Mendix - Take 1",
      content: [
        "Introduction to Mendix Native Mobile",
        "Building Mobile Layouts and Navigation",
        "Native Mobile Widgets and Styling",
        "Mobile Device Features Integration",
        "Testing and Debugging Mobile Apps",
        "Advanced Native Mobile Techniques",
        "Offline Functionality in Mobile Apps",
        "Performance Optimization for Mobile",
        "Integrating with Native Device APIs",
        "Publishing and Distributing Mobile Apps",
      ],
    },
    {
      title: "Configuration Management - Take 1(Deeplink, SMTP)",
      content: [
        "Deep Linking in Mendix",
        "Configuring Deep Links for Mobile and Web",
        "Integrating SMTP for Email Notifications",
        "Email Templates and Customization",
        "Testing and Troubleshooting SMTP Configurations",
        "Single Sign-On (SSO) Integration",
        "Configuring SSO Providers",
        "Auditing and Logging in Mendix",
        "Enabling Audit Trail and History",
        "Monitoring and Analyzing Audit Logs",
      ],
    },
  ];

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
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> GloriousMindMine</span></h2>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Foundation</span> Track </h2>
          <p className="Foundation-track-description">Glorious Mendix course begins by cementing your foundation in Mendix concepts.</p>
          <CourseList tabData={foundation}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialization</span> Track</h2>
          <p className="Foundation-track-description">Our Mendix course syllabus covers specializations that help you become a niche Mendix professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our Mendix course syllabus covers specializations that help you become a niche Mendix professional.</p>
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