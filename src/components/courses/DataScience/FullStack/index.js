import React from 'react'
import CourseList from '../CourseList'
import './index.css'
const foundation = [
  { title: 'Introduction to Computer Programming', content:[
    "Getting Started with Python",
    "Data Types in Python",
    "Indexing & Slicing",
    "In-built Functions and Methods",
    "Conditional Statements",
    "Loops & Iterations",
    "Conditional & Infinite Looping",
    "Advanced Looping Concepts",
    "Custom functions in Python",
    "Lambda & Map Functions",
    "Errors and Exception Handling",
    "OOPs in Python",
    "Coding Best Practices",
    "Arrays and Strings",
    "Recursion - I and II",
    "Sorting Algorithms",
    "Search Algorithms",
    "Competitive Coding"
    ]  
  },
  { title: 'Numerical Programming in Python', content:  [
    "Packages & Libraries - OS",
    "Datetime, Regex & Beautiful Soup",
    "Command Line & File System",
    "Git and Github",
   "Standard Data Management Libraries",
    "Data Wrangling using Pandas and Numpy",
    "Data Visualisation Libraries - Matplotlib & Seaborn",
    "Exploratory Data Analysis"
    ] },
    {
      title: "Relational Databases",
      content: [
        "Getting Started with SQL",
        "SQL Environment & Basic Commands",
        "Fundamentals of SQL Query",
        "Dealing with Multiple Tables",
        "Advanced SQL Joins",
        "Mathematical & Data type conversion Functions",
        "DateTime & String Functions",
        "Window Functions",
        "Miscellaneous Functions",
        "Connect & Analyse Data with SQL & Python",
        "Database Management & Schema Design",
        "Competitive Coding & Query Optimisation"
        ]
    },
    {
      title: "Data Visualization Tools",
      content: [
        "Fundamentals of Excel",
        "Data Exploration with In-Built Functions",
        "Storytelling with Excel",
        "Advanced Dashboarding Concepts - Macros & VBA",
        "Getting Started with Tableau Ecosystem",
        "Choosing the Right Chart - Visual Intuition",
        "Storytelling with Tableau",
        "Intro to Power BI",
        "Intro to Google Analytics",
        "Dashboarding and SQL"
        ]
    },
    {
      title: "Applied Statistics",
      content: [
        "Calculus for ML",
        "Vector Algebra",
        "Matrix Algebra",
        "Probability Theory",
        "Data Summarization",
        "Probability Distributions - Discrete and Continuous",
        "Joint Distribution",
        "Sampling and Statistical Inference",
        "Concept of Confidence",
        "Hypothesis Testing",
        "Statistical Inference in Industry - A/B testing"
        ]
    },
    {
      title: "Introduction to MACHINE learning",
      content: [
        "Getting Started With ML",
        "ML Lifecycle",
        "Implementing simple Supervised Algorithm",
        "Linear & Tree based models",
        "Implementing simple Unsupervised Algorithm",
        "Unsupervised Clustering: K-means & Hierarchical",
        "Data Preparation for ML Models",
        "Cross validation",
        "Hyperparameter tuning",
        "TedX Views Prediction - Case Study",
        'Customer Segmentation - Case Study',
        "Time Series Analysis",
        "Bagging & Boosting: Complex Algorithms",
        "Nonlinear Algorithms - Polynomial Regression",
        "SVM & Neural Networks",
        "Natural Language Processing",
        "Image processing",
        "Recommender Systems",
        "SQL Feature Engineering, Prediction and Analysis"
        ]
    }
];

const specialisationTrack=[
  {
    title: "Distributed Systems With High-Level Design",
    content: [
        "Big Data Fundamentals",
        "Data Warehousing With Hive",
        "Apache Spark Using Python",
        "Distributed ML Training"
        ]
  },
  {
    title: "Product Analytics",
    content: [
        "Product Analytics Essentials",
        "Core Visualisation Principles",
        "Product Intelligence Platforms",
        "Advanced Query Optimisation",
        "Business Process Automation"
        ]
  },
  {
    title: "Deep Learning",
    content: [
      "Deep Neural Networks",
      "Natural Language Processing",
      "Computer Vision"
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
    title: "Coding and Techanical Revision",
    content: [
      "20+ Coding Challenges",
      "50+ Assignments",
      "1 Python Project",
      "1 Data Analytics Project",
      "1 ML Modelling Project"
    ]
  }
]
  
const FullStack=()=> {
  return (
    <div className="Fullstack-main-container">
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> Glorious Minemine</span></h2>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Foundation</span> Track </h2>
          <p className="Foundation-track-description">Glorious Mindmine's Full Stack Data Science course begins by cementing your foundation in Data Science concepts.</p>
          <CourseList tabData={foundation}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialisation</span> Track</h2>
          <p className="Foundation-track-description">Our Full Stack Data Science course syllabus covers specialisations that help you become a niche Data Science and Analytics professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our Full Stack Data Science course syllabus covers specialisations that help you become a niche Data Science and Analytics professional.</p>
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