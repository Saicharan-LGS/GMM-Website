import React from 'react'
import CourseList from '../../DataScience/CourseList'
import "../../DataScience/FullStack/index.css"
//import companies from "../../../Images/companieslogo.png"

const foundation = [
  {
      title: 'Clarity and Conciseness & Active Listening',
      content: [
          'Clearly articulate your thoughts and ideas.',
          'Avoid using jargon or complex terminology that might confuse others.',
          'Get to the point and avoid unnecessary tangents.',
          'Pay close attention to the speaker and demonstrate your engagement.',
          'Ask clarifying questions to ensure you understand the speaker\'s message.',
          'Avoid interrupting and allow the speaker to finish before responding.'
      ]
  },
  {
      title: 'Tone & Delivery and Body Language, Speaking Speed and Pause',
      content: [
          'Use an appropriate tone for the situation. Maintain a respectful and professional demeanor.',
          'Vary your tone to reflect enthusiasm, seriousness, or empathy as needed.',
          'Avoid using a monotone voice, which can be perceived as disinterest.',
          'Maintain good eye contact to show attentiveness.',
          'Use open and approachable body language.',
          'Avoid crossing your arms, fidgeting, or appearing distracted.',
          'Speak at a moderate pace to allow listeners to process the information.',
          'Use pauses effectively to emphasize key points and give listeners time to absorb what you\'ve said.'
      ]
  },
  {
      title: 'Feedback and Confirmation & Cultural Sensitivity',
      content: [
          'Encourage feedback from your listeners to ensure they understood your message.',
          'Summarize key points to confirm mutual understanding.',
          'Ask for questions or concerns to address any confusion.',
          'Be aware of cultural differences that may influence communication norms.',
          'Adapt your communication style to be respectful and inclusive of diverse audiences.'
      ]
  },
  {
      title: 'Preparation for Presentations & Handling Questions and Challenges',
      content: [
          'Practice and rehearse your presentations to build confidence.',
          'Structure your content logically with a clear introduction, main points, and conclusion.',
          'Address questions with confidence and clarity.',
          'If you don\'t have an immediate answer, offer to follow up with the information later.'
      ]
  },
  {
      title: 'Managing Nervousness & Telephone and Video Call Etiquette',
      content: [
          'Practice deep breathing and relaxation techniques to manage nervousness.',
          'Focus on the message you want to convey rather than on your anxiety.',
          'Speak clearly on phone calls and video conferences.',
          'Use video calls for important discussions to enhance visual communication.'
      ]
  },
  {
      title: 'Emotional Intelligence, Feedback and Improvement',
      content: [
        'Be mindful of your emotions and how they may affect your communication.',
          'Practice empathy to understand others\' perspectives and feelings.',
          'Solicit feedback from colleagues or mentors to identify areas for improvement.',
          'Continuously work on refining your communication skills.',
          'Has context menu'
      ]
  }
];


const careerTrack = [
  {
    title: 'Body Language and Facial Expressions',
    content: [
      'Posture: Maintain an upright and confident posture to project professionalism.',
      'Gestures: Use gestures that complement your message and emphasize key points.',
      'Handshakes: Offer a firm handshake during introductions for a positive first impression.',
      'Openness: Avoid crossed arms, which can signal defensiveness or closed-mindedness.',
      'Eye Contact: Establish and maintain appropriate eye contact to show engagement and sincerity.',
      'Smiling: Use genuine smiles to create a welcoming and friendly atmosphere.',
      'Facial Reactions: Reflect your emotions appropriately in response to the conversation.'
    ]
  },
  {
    title: 'Proximity and Personal Space, Voice Tone and Pitch',
    content: [
      'Respect personal space to avoid making others uncomfortable.',
      'Adjust your distance based on cultural norms and the nature of the relationship.',
      'Match your tone to the context of the conversation.',
      'Use a steady and confident pitch to convey authority and assurance.'
    ]
  },
  {
    title: 'Dress and Appearance, Time Management and Listening Nonverbals',
    content: [
      'Dress in a manner that aligns with the formality of the situation.',
      'Consider the company dress code and industry standards.',
      'Punctuality shows respect for others\' time and dedication to the conversation.',
      'Avoid checking the time frequently during meetings or discussions.',
      'Nodding: Use occasional nods to signal that you\'re actively listening and understanding.',
      'Facial Expressions: Display attentive expressions to show interest in the speaker\'s words.'
    ]
  },
  {
    title: 'Adaptation to Cultural Norms, Consistency with Verbal Communication and Managing Nervousness',
    content: [
      'Different cultures have varying interpretations of nonverbal cues. Research and adapt accordingly.',
      'Be mindful of gestures and expressions that could be misinterpreted or offensive in other cultures.',
      'Ensure that your nonverbal cues align with your spoken words.',
      'Inconsistent messages can lead to confusion and undermine trust.',
      'Be aware of nonverbal signals that may indicate nervousness (e.g., fidgeting).',
      'Practice relaxation techniques to maintain composure.'
    ]
  },
  {
    title: 'Observational Skills and Conflict Resolution, Leadership and Influence',
    content: [
      'Pay attention to others\' nonverbal cues to better understand their perspectives and emotions.',
      'Adapt your communication style based on the nonverbal cues you receive.',
      'Use nonverbal cues to de-escalate tense situations (e.g., calm gestures, controlled tone).',
      'Respectful body language can help maintain a positive atmosphere during disagreements.',
      'Strong nonverbal communication skills can enhance your presence as a leader.',
      'Command attention and respect through confident body language and effective use of space.'
    ]
  }
];

  
const FullStack=()=> {
  return (
    <div className="Fullstack-main-container">
        <h2 className="Fullstack-journey-heading">Let’s walk through your journey at<span className="Fullstack-journey-heading-underline"> GloriousMindMine</span></h2>
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
        <div>
        <h2 className="Foundation-track-heading"><span className="Foundation-track-heading-underline">WHAT ALL WILL </span> YOU  LEARN IN BUSINESS COMMUNICATION (NON-VERBAL)</h2>
          <p className="Foundation-track-description">Speak English Fluently Without Banging Your Head On English Grammar And Spending Hours & Hours.</p>
          <CourseList tabData={careerTrack}/>
        </div>
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