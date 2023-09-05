import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"
import companies from "../../../Images/companieslogo.png"

const foundation = [
    { title: 'Introduction to Computer Programming', content:[
        "Getting Started with Programming",
        "Introduction to JavaScript",
        "JavaScript Operators",
        "JavaScript Decision Statements",
        "JavaScript Loops & Control Statements",
        "JavaScript Arrays and Strings",
        "JavaScript Objects and JSON",
        "Functions in JavaScript - Basics",
        "Functions in JavaScript - Advanced",
        "Asynchronous coding in JavaScript",
        "Basics of OOPS",
        "Functional Programming",
        "ES5 & ES6 Concepts",
        "Regex & Debugging in JavaScript"
      ]  },
    { title: 'Design and Analysis of Algorithms', content:  [
        "Getting Started with Algorithms",
        "Arrays & Strings",
        "Introduction to Pattern Matching",
        "Advanced Pattern Matching, Coding & Analysis",
        "Advanced Sorting Algorithms",
        "Introduction to Searching Algorithms",
        "Advanced Searching Algorithms",
        "Getting Started with Recursion",
        "Advanced Recursion Coding & Analysis",
        "Getting Started with Back Tracking & its Analysis"
      ] },
      {
        title: "Front-end Development",
        content: [
            "HTML",
            "CSS",
            "Bootstrap",
            "DOM",
            "jQuery Basics & AJAX",
            "Advanced Asynchronous coding in JavaScript",
            "Introduction to Tailwind CSS",
            "Advanced Layout Techniques with Tailwind CSS",
            "Introduction to React Ecosystem",
            "Advanced React",
            "Next.js",
            "Project Management & Deployment"
          ]
      },
      {
        title: "Backend Development",
        content: [
            "Introduction to Databases, DBMS, and Database Design",
            "Database Transaction & ER Diagram",
            "CRUD Operations with Maria DB",
            "Writing Queries in Maria DB",
            "Overview of MongoDB",
            "CRUD Operations with MongoDB",
            "Pagination, Indexes & Aggregation in MongoDB",
            "Intro to WebServices & API",
            "Node.js",
            "Express.js",
            "Project Management & Deployment Using Render"
          ]
      },
      {
        title: "Practical Software Engineering",
        content: [
            "Introduction to Databases, DBMS, and Database Design",
            "Database Transaction & ER Diagram",
            "CRUD Operations with Maria DB",
            "Writing Queries in Maria DB",
            "Overview of MongoDB",
            "CRUD Operations with MongoDB",
            "Pagination, Indexes & Aggregation in MongoDB",
            "Intro to WebServices & API",
            "Node.js",
            "Express.js",
            "Project Management & Deployment Using Render"
          ]
      }
  ];

  const specialisationTrack=[
    {
      title: "Distributed Systems With High-Level Design",
      content: [
            "Software Architecture Intuition",
            "Web Application Intuition",
            "Application On Scale",
            "Availability",
            "Load Balancing"
          ]
    },
    {
      title: "Cloud Computing",
      content: [
            "Cloud Computing Basics",
            "AWS Services",
            "Practical Application Of Cloud"
          ]
    },
    {
      title: "Blockchain Development",
      content: [
            "Blockchain Fundamentals",
            "Cryptocurrency Fundamentals",
            "Dapp With Ethereum And Solidity",
            "Blockchain In Industry"
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
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> Glorious Mindmine</span></h2>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Foundation</span> Track </h2>
          <p className="Foundation-track-description">Glorious Mindmine's Full Stack Data Science course begins by cementing your foundation in Data Science concepts.</p>
          <CourseList tabData={foundation}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialization</span> Track</h2>
          <p className="Foundation-track-description">Our Full Stack Data Science course syllabus covers specializations that help you become a niche Data Science and Analytics professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track-Almax</h2>
          <p className="Foundation-track-description">Our Full Stack Data Science course syllabus covers specializations that help you become a niche Data Science and Analytics professional.</p>
          <CourseList tabData={careerTrack}/>
        </div>
        <div>
            <h2 className="Foundation-track-heading">Congratulations! You are now placed at one of the tech companies as a Web Development Professional</h2>
            <div className="Fullstack-company-image-container">
                <img src={companies} alt="" className="Fullstack-company-image"/>
            </div>
  </div>
        
    </div>
 )
}


export default FullStack