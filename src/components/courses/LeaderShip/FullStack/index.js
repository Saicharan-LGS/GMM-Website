import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"
//import companies from "../../../Images/companieslogo.png"

const foundation = [
  {
      title: 'Effective Leadership Communication',
      content: [
          'Clearly communicate your vision and goals to your team.',
          'Use simple and relatable language to ensure everyone understands.',
          'Avoid overly technical or complex terms that might alienate team members.',
          'Stay focused on the main message and avoid going off-topic.',
          'Listen actively to your team members’ ideas and concerns.',
          'Ask open-ended questions to encourage thoughtful discussions.',
          'Acknowledge and validate the contributions and opinions of your team.',
          'Give your team members the space to express themselves.'
      ]
  },
  {
      title: 'Leading with Empathy & Emotional Intelligence',
      content: [
          'Show empathy towards your team members’ challenges and experiences.',
          'Understand the emotions and motivations behind their actions.',
          'Communicate with empathy, taking into account their feelings and perspectives.',
          'Use emotional intelligence to manage conflicts and build positive relationships.',
          'Lead by example, demonstrating emotional regulation and self-awareness.',
          'Provide support and encouragement during challenging times.'
      ]
  },
  {
      title: 'Influential Presentations and Storytelling',
      content: [
          'Craft compelling stories that illustrate your points and engage your team.',
          'Use narratives to convey complex ideas in an accessible manner.',
          'Connect with your team emotionally through storytelling.',
          'Deliver presentations with confidence and enthusiasm.',
          'Use persuasive techniques to inspire action and commitment.',
          'Incorporate data and evidence to strengthen your arguments.'
      ]
  },
  {
      title: 'Feedback and Growth-Oriented Leadership',
      content: [
          'Foster a culture of feedback where open communication is encouraged.',
          'Provide constructive feedback to help team members improve.',
          'Acknowledge achievements and celebrate successes publicly.',
          'Encourage a growth mindset by focusing on learning and development.',
          'Set clear expectations and provide guidance for improvement.',
          'Lead regular performance reviews to track progress and growth.'
      ]
  },
  {
      title: 'Navigating Difficult Conversations',
      content: [
          'Approach challenging conversations with a calm and composed demeanor.',
          'Prepare ahead of time to ensure the conversation remains focused.',
          'Listen actively and demonstrate that you value the other person’s perspective.',
          'Address sensitive topics with sensitivity and respect.',
          'Find common ground and work towards mutually beneficial solutions.',
          'Keep the lines of communication open for ongoing dialogue.'
      ]
  },
  {
      title: 'Adaptive Leadership in Change Management',
      content: [
          'Communicate clearly about changes and the reasons behind them.',
          'Acknowledge the challenges and uncertainties associated with change.',
          'Provide a roadmap for how the team will navigate through changes.',
          'Be open to feedback and address concerns related to change.',
          'Lead by example in adapting to new situations.',
          'Empower your team to embrace change and contribute ideas.'
      ]
  }
];


  // const careerTrack=[
  //   {
  //     title: "Business Communication",
  //     content: [
  //           "7 Cs of Business Communication",
  //           "Grammar: Tenses, Adjectives, and Verbs",
  //           "Body Language & Modals",
  //           "Ace your Business Presentations",
  //           "Email Writing",
  //           "Telephonic Communication and Business Vocab",
  //           "Networking and building Interpersonal Skills"
  
  //         ]
  //   },
  //   {
  //     title: "Profile and Resume Building",
  //     content: [
  //           "Build highly optimized Resumes and Cover Letters",
  //           "Build your LinkedIn Profile",
  //           "Build your GitHub Portfolio",
  //           "Build your own website"
  //         ]
  //   },
  //   {
  //     title: "Interview Prep and Mock Interview",
  //     content: [
  //           "Interview Best Practices",
  //           "10+ Mock Analytics Interviews",
  //           "10+ Mock Communication Interviews",
  //           "Company-wise Interview Guides"
  //         ]
  //   }
  // ]

  
const FullStack=()=> {
  return (
    <div className="Fullstack-main-container">
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> Glorious Mindmine</span></h2>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">WHAT ALL WILL </span> YOU  LEARN</h2>
          <p className="Foundation-track-description">Speak English Fluently Without Banging Your Head On English Grammar And Spending Hours & Hours.</p>
          <CourseList tabData={foundation}/>
        </div>
        {/* <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialisation</span> Track</h2>
          <p className="Foundation-track-description">Our Full Stack Data Science course syllabus covers specialisations that help you become a niche Data Science and Analytics professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div> */}
        {/* <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our English Communication Blue print course syllabus covers specializations that help you become a Good English speaker.</p>
          <CourseList tabData={careerTrack}/>
        </div>
        <div>
            <h2 className="Foundation-track-heading">Congratulations! You are now placed at one of the tech companies as a Web Development Professional</h2>
            <div className="Fullstack-company-image-container">
                <img src={companies} alt="" className="Fullstack-company-image"/>
            </div>
      </div> */}
        
    </div>
 )
}


export default FullStack