import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"
//import companies from "../../../Images/companieslogo.png"

const foundation = [
  {
  title: 'Trust and Collaboration',
  content: [
  'Build trust among team members through open and honest communication.',
  'Encourage a collaborative environment where ideas are freely shared.',
  'Value diverse perspectives and create an inclusive space for everyone.',
  'Demonstrate reliability by following through on commitments.',
  ],
  },
  {
  title: 'Effective Goal Setting & Clear Roles',
  content: [
  "Set clear and achievable goals that align with the team's purpose.",
  'Define roles and responsibilities for each team member.',
  'Ensure that each team member understands their role and its importance.',
  'Regularly assess progress toward goals and make adjustments as needed.',
  ],
  },
  {
  title: 'Communication and Active Listening',
  content: [
  'Practice clear and concise communication within the team.',
  'Listen actively to team members, showing respect for their input.',
  'Ask clarifying questions to ensure a thorough understanding.',
  'Avoid interrupting and provide space for everyone to express themselves.',
  ],
  },
  {
  title: 'Constructive Feedback & Growth Mindset',
  content: [
  'Provide constructive feedback to help each other improve.',
  'Offer feedback in a respectful and supportive manner.',
  'Embrace a growth mindset, viewing challenges as opportunities to learn.',
  'Acknowledge and celebrate both individual and team achievements.',
  ],
  },
  {
  title: 'Conflict Resolution & Adaptability',
  content: [
  'Address conflicts openly and professionally, focusing on solutions.',
  'Listen to all sides of the conflict and seek common ground.',
  'Adapt to changes by remaining flexible and open to new approaches.',
  'Turn challenges into opportunities for team growth.',
  ],
  },
  {
  title: 'Recognition and Appreciation & Work-Life Balance',
  content: [
  "Recognize and appreciate each other's contributions and efforts.",
  'Celebrate milestones and successes as a team.',
  'Respect work-life balance to prevent burnout and promote well-being.',
  "Support each other's personal and professional growth.",
  ],
  },
  ];

// const careerTrack = [
//   {
//     title: 'Body Language and Facial Expressions',
//     content: [
//       'Posture: Maintain an upright and confident posture to project professionalism.',
//       'Gestures: Use gestures that complement your message and emphasize key points.',
//       'Handshakes: Offer a firm handshake during introductions for a positive first impression.',
//       'Openness: Avoid crossed arms, which can signal defensiveness or closed-mindedness.',
//       'Eye Contact: Establish and maintain appropriate eye contact to show engagement and sincerity.',
//       'Smiling: Use genuine smiles to create a welcoming and friendly atmosphere.',
//       'Facial Reactions: Reflect your emotions appropriately in response to the conversation.'
//     ]
//   },
//   {
//     title: 'Proximity and Personal Space, Voice Tone and Pitch',
//     content: [
//       'Respect personal space to avoid making others uncomfortable.',
//       'Adjust your distance based on cultural norms and the nature of the relationship.',
//       'Match your tone to the context of the conversation.',
//       'Use a steady and confident pitch to convey authority and assurance.'
//     ]
//   },
//   {
//     title: 'Dress and Appearance, Time Management and Listening Nonverbals',
//     content: [
//       'Dress in a manner that aligns with the formality of the situation.',
//       'Consider the company dress code and industry standards.',
//       'Punctuality shows respect for others\' time and dedication to the conversation.',
//       'Avoid checking the time frequently during meetings or discussions.',
//       'Nodding: Use occasional nods to signal that you\'re actively listening and understanding.',
//       'Facial Expressions: Display attentive expressions to show interest in the speaker\'s words.'
//     ]
//   },
//   {
//     title: 'Adaptation to Cultural Norms, Consistency with Verbal Communication and Managing Nervousness',
//     content: [
//       'Different cultures have varying interpretations of nonverbal cues. Research and adapt accordingly.',
//       'Be mindful of gestures and expressions that could be misinterpreted or offensive in other cultures.',
//       'Ensure that your nonverbal cues align with your spoken words.',
//       'Inconsistent messages can lead to confusion and undermine trust.',
//       'Be aware of nonverbal signals that may indicate nervousness (e.g., fidgeting).',
//       'Practice relaxation techniques to maintain composure.'
//     ]
//   },
//   {
//     title: 'Observational Skills and Conflict Resolution, Leadership and Influence',
//     content: [
//       'Pay attention to others\' nonverbal cues to better understand their perspectives and emotions.',
//       'Adapt your communication style based on the nonverbal cues you receive.',
//       'Use nonverbal cues to de-escalate tense situations (e.g., calm gestures, controlled tone).',
//       'Respectful body language can help maintain a positive atmosphere during disagreements.',
//       'Strong nonverbal communication skills can enhance your presence as a leader.',
//       'Command attention and respect through confident body language and effective use of space.'
//     ]
//   }
// ];

  
const FullStack=()=> {
  return (
    <div className="Fullstack-main-container">
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> Glorious Mindmine</span></h2>
        <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">WHAT ALL WILL </span> YOU  LEARN IN BUSINESS COMMUNICATION (VERBAL)</h2>
          <p className="Foundation-track-description">Speak English Fluently Without Banging Your Head On English Grammar And Spending Hours & Hours.</p>
          <CourseList tabData={foundation}/>
        </div>
        {/* <div>
          <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">Specialisation</span> Track</h2>
          <p className="Foundation-track-description">Our Full Stack Data Science course syllabus covers specialisations that help you become a niche Data Science and Analytics professional.</p>
          <CourseList tabData={specialisationTrack}/>
        </div> */}
        {/* <div>
        <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">WHAT ALL WILL </span> YOU  LEARN IN BUSINESS COMMUNICATION (NON-VERBAL)</h2>
          <p className="Foundation-track-description">Speak English Fluently Without Banging Your Head On English Grammar And Spending Hours & Hours.</p>
          <CourseList tabData={careerTrack}/>
        </div> */}
        {/* <div>
            <h2 className="Foundation-track-heading">Congratulations! You are now placed at one of the tech companies as a Web Development Professional</h2>
            <div className="Fullstack-company-image-container">
                <img src={companies} alt="" className="Fullstack-company-image"/>
            </div>
        </div> */}
        
  </div>
  )
}


export default FullStack