import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"
import companies from "../../../Images/companieslogo.png"


const foundation = [
  {
    title: "Introduction to AWS",
    content: [
      "Overview of Cloud Computing",
      "Introduction to AWS",
      "AWS Global Infrastructure",
      "AWS Core Services",
      "AWS Pricing and Billing",
    ],
  },
  {
    title: "AWS Fundamentals",
    content: [
      "AWS Identity and Access Management (IAM)",
      "Amazon EC2 (Elastic Compute Cloud)",
      "Amazon S3 (Simple Storage Service)",
      "Amazon RDS (Relational Database Service)",
      "Amazon VPC (Virtual Private Cloud)",
      "AWS Lambda and Serverless Computing",
    ],
  },
  {
    title: "AWS Security and Compliance",
    content: [
      "AWS Shared Responsibility Model",
      "AWS Security Best Practices",
      "Data Encryption on AWS",
      "AWS Compliance and Governance",
    ],
  },
  {
    title: "AWS Networking",
    content: [
      "Amazon VPC Setup and Configuration",
      "Subnets, Routes, and Gateways",
      "Security Groups and Network ACLs",
      "Direct Connect and VPNs",
      "AWS Route 53 (Domain Name System)",
    ],
  },
  {
    title: "AWS Services Integration",
    content: [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "AWS Step Functions",
      "AWS API Gateway",
    ],
  },
  {
    title: "AWS Monitoring and Management",
    content: [
      "AWS CloudWatch",
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS CloudTrail",
    ],
  },
];

const specialisationTrack = [
  {
    title: "AWS Serverless Applications",
    content: [
      "AWS Lambda Functions",
      "Amazon API Gateway",
      "AWS Serverless Application Model (SAM)",
      "Event-Driven Architectures on AWS",
    ],
  },
  {
    title: "AWS Big Data and Analytics",
    content: [
      "Amazon EMR (Elastic MapReduce)",
      "Amazon Redshift",
      "Amazon Kinesis",
      "AWS Glue",
    ],
  },
  {
    title: "AWS Machine Learning",
    content: [
      "Amazon SageMaker",
      "AWS Deep Learning AMIs",
      "AWS AI Services",
      "Machine Learning Deployment on AWS",
    ],
  },
  {
    title: "AWS DevOps and CI/CD",
    content: [
      "AWS CodePipeline",
      "AWS CodeBuild",
      "AWS CodeDeploy",
      "AWS CodeStar",
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
          <p className="Foundation-track-description">Glorious Mindmine's Salesforce Admin course begins by cementing your foundation in Salesforce Admin concepts.</p>
          <CourseList tabData={foundation}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialization</span> Track</h2>
          <p className="Foundation-track-description">Our SalesForce Admin course syllabus covers specializations that help you become a nice SalesForce professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our SalesForce Admin course syllabus covers specializations that help you become a nice SalesForce professional.</p>
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