import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"

const foundation = [
  {
    title: "Introduction to Digital Marketing and Search Engine Optimization",
    content: [
      "Digital Marketing Overview",
      "Evolution of Digital Marketing",
      "Digital Marketing Channels",
      "Understanding the Digital Marketing Landscape",
      "Importance of Digital Marketing in Business",
      "Introduction to SEO",
      "Keyword Research and Analysis",
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "SEO Tools and Analytics",
    ],
  },
  {
    title: "Pay-Per-Click Advertising and Social Media Marketing",
    content: [
      "Introduction to PPC Advertising",
      "Google Ads",
      "Setting up PPC Campaigns",
      "Keyword Targeting",
      "Ad Copy and Ad Extensions",
      "PPC Analytics and Optimization",
      "Introduction to Social Media Marketing",
      "Social Media Platforms Overview",
      "Creating Social Media Strategy",
      "Content Creation and Curation",
      "Social Media Advertising",
      "Social Media Analytics",
    ],
  },
  {
    title: "Email Marketing and Content Marketing",
    content: [
      "Introduction to Email Marketing",
      "Building Email Lists",
      "Email Campaign Planning",
      "Creating Effective Email Content",
      "Email Automation and Segmentation",
      "Email Marketing Metrics and Analysis",
      "Introduction to Content Marketing",
      "Content Strategy and Planning",
      "Content Creation and Distribution",
      "Blogging and Article Marketing",
      "Visual Content Marketing",
      "Measuring Content Marketing Success",
    ],
  },
  {
    title: "Influencer Marketing and Social Media Influencing",
    content: [
      "Introduction to Influencer Marketing",
      "Identifying Influencers in Niche",
      "Influencer Outreach and Collaboration",
      "Measuring Influencer Marketing ROI",
      "Ethical Considerations in Influencer Marketing",
      "Building Personal Brand on Social Media",
      "Creating Engaging Content",
      "Growing Social Media Following",
      "Collaborating with Brands as an Influencer",
      "Monetizing Social Media Influence",
    ],
  },
  {
    title: "Analytics, Data-driven Marketing and Digital Marketing Strategy",
    content: [
      "Importance of Data in Digital Marketing",
      "Web Analytics with Google Analytics",
      "Data Analysis and Insights",
      "A/B Testing and Conversion Optimization",
      "Using Data for Marketing Decisions",
      "Developing a Digital Marketing Strategy",
      "Defining Marketing Objectives",
      "Target Audience and Buyer Personas",
      "Budget Allocation and Resource Planning",
      "Measuring and Reporting Marketing ROI",
    ],
  },
];

 

const specialisationTrack = [
  {
    title: "Social Media Management",
    content: [
      "Social Media Content Planning and Scheduling",
      "Community Engagement and Customer Support",
      "Social Media Influencer Campaigns",
      "Social Media Analytics and Reporting",
    ],
  },
  {
    title: "E-commerce Marketing",
    content: [
      "Creating and Optimizing Product Pages",
      "E-commerce Email Marketing",
      "Conversion Rate Optimization for E-commerce",
      "Marketplace Advertising (e.g., Amazon, eBay)",
    ],
  },
  {
    title: "Content Strategy and Copywriting",
    content: [
      "Developing a Content Marketing Plan",
      "Copywriting for Digital Marketing",
      "Content Promotion and Distribution",
      "SEO Content Strategy",
    ],
  },
  {
    title: "Marketing Analytics",
    content: [
      "Advanced Web Analytics and Tracking",
      "Data Visualization for Marketing",
      "Attribution Modeling",
      "Marketing Data Interpretation and Insights",
    ],
  },
  {
    title: "Email Marketing Automation",
    content: [
      "Creating Automated Email Campaigns",
      "Segmentation and Personalization",
      "Drip Email Campaigns",
      "A/B Testing for Email Optimization",
    ],
  },
  {
    title: "Video Marketing",
    content: [
      "Video Content Creation and Editing",
      "YouTube Marketing and Advertising",
      "Video SEO and Optimization",
      "Live Streaming and Webinars",
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
          <p className="Foundation-track-description">GloriousMindMine's Digital Marketing course begins by cementing your foundation in DigitalMarketing concepts.</p>
          <CourseList tabData={foundation}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialisation</span> Track</h2>
          <p className="Foundation-track-description">Our Digital Marketing course syllabus covers specialisations that help you become a niche Digital Marketing professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our Digital Marketing course syllabus covers specialisations that help you become a niche Digital Marketing professional.</p>
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