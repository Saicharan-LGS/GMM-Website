import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"

const foundation = [
    { title: 'Mastering English Communcation', content:[
            '6 Action Items to improve your Communication Skills',
            '10 Daily Rituals – Habits that Can Change you.',
            '4 Pillars of Communication: Reading, Writing, Listening & Speaking',
            'Conversational Vocabulary.',
            'Power of Tenses – Learn different tenses and their usage',
            'Grammar from Beginner to Intermediate level.',
            'Pronunciation and Correct form of Pronouncing words.',
      ]  },
    { title: 'Effective Communcation And Personal Developemnt', content:  [
            'Voice Modulation & Pitch Pattern',
            'Body language – Present yourself appropriately',
            'How to remove hesitation & speak with Confidence?',
            'How you can improve your Listening Skills?',
            'How to improve your speaking skills with examples and exercises.',
            'How to improve your Vocabulary?',
            'How to use vocabulary in your daily life/small talks?',
            'Voice and accent and how to overcome mother tongue influence.',
      ] },
      {
        title: "Mastering Confident Communcation",
        content: [
            'How to give your introduction with Confidence?',
            'Free Speech pattern – What is it and why is it so important in Communication Skills',
            '10 Storytelling and why stories are so important?',
            '10 Presentations to work on Memory - Deliver - Connection',
            'Assessment with every lesson',
            'Minimum 3 Practical Live Delivery Sessions for Real-time exposure'
           ]
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
            "10+ Mock Analytics Interviews",
            "10+ Mock Communication Interviews",
            "Company-wise Interview Guides"
          ]
    }
  ]

  
const FullStack=()=> {
  return (
    <div className="Fullstack-main-container">
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> GloriousMindMine</span></h2>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">WHAT ALL WILL </span> YOU  LEARN</h2>
          <p className="Foundation-track-description">Speak English Fluently Without Banging Your Head On English Grammar and spending Hours & Hours.</p>
          <CourseList tabData={foundation}/>
        </div>
        {/* <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialisation</span> Track</h2>
          <p className="Foundation-track-description">Our Full Stack Data Science course syllabus covers specialisations that help you become a niche Data Science and Analytics professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div> */}
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Career</span> Track</h2>
          <p className="Foundation-track-description">Our English Communication Blue print course syllabus covers specialisations that help you become a Good English speaker.</p>
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