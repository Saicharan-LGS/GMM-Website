import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"

const foundation = [
    { title: 'Introduction to Polarion and Polarion Basics', content:[
        "Polarion History?",
        "Use of Polarion in specific industries",
        "Features of Polarion etc.",
        "Installation set up",
        "Available Templates & Projects",
        "Default user and user roles",
      ]  },
    { title: 'Work Items', content:  [
      "Workitem Types",
      "Custom Field",
      "Enumeration",
      "Read Only Field",
      "Calculated Field",
      "Form Configuration",
      "Auto-Assignee",
      "What is Workflow",
      "Workflow Function & Condition",
      ] },
      {
        title: "User Management and Baseline",
        content: [
          "User - (All types of operations create, add, delete etc.)",
          "Roles - Global and Project Roles",
          "Permission Management",
          "Access Management",
          "Licenses (All Types)",
          "Groups",
          "Baseline in Document",
          "Baseline in Project",
          "Baseline in Collection"
          ]
      },
      {
        title: "Document Management and Plan in Polarion",
        content: [
          "Document Properties",
          "Import and Export of document",
          "Branch & Reuse Management",
          "Baseline Management & Audit trails",
          "Document Comparison",
          "Configuring workitem and custom fields",
          "Document E-Signature",
          "Creating Plan Template",
          "Creating Iterations and Releases",
          "Adding & configuring workitems to iterations and releases",
          ]
      },
      {
        title: "Test Management and Polarion API's Overview",
        content: [
          "Creating Test Run Template",
          "Creating Test Run",
          "Configuring workitems with test steps and details",
          "Adding workitems to test runs",
          "Executing Workitems via test runs",
          "Using Open API's",
          "Using Rendering API's",
          ]
      }
  ];

  const specialisationTrack=[
    {
      title: "Scripts, Macros & Custom Development",
      content: [
        "Workflow scripts",
        "FMC -Post-save & Pre-save scripts, real-time with examples",
        "Declaring a macro",
        "Defining a macro",
        "Calling a macro",
        "Sample live reports using OTB widgets",
        "Live reports using Polarion API's",
        "Live reports/pages using other technologies"
              ]
    },
    {
      title: "GTAC Ticket and Collections",
      content: [
            "Ticket Management",
            "Raising a ticket",
            "Support on raised tickets",
            "Closing a tickets etc",
            "Creating collection",
            "Adding document, Baselines & revisions to collections"
          ]
    },
    {
      title: "Integration",
      content: [
            "JIRA integration with Polarion ALM",
            "OKTA(SSO) integration with Polarion ALM",
            "Microsoft TFS and EA integration with Polarion ALM"
          ]
    }
  
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
      title: "Coding and Technical Revision",
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
          <p className="Foundation-track-description">GloriousMindMine's Polarion course begins by cementing your foundation in Polarion concepts.</p>
          <CourseList tabData={foundation}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialization</span> Track</h2>
          <p className="Foundation-track-description">Our Polarion course syllabus covers specializations that help you become a niche Polarion Professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our Polarion course syllabus covers specializations that help you become a niche Polarion professional.</p>
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