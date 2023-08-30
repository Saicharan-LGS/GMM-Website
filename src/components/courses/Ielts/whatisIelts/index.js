import React, {Component} from "react";
import './index.css';
import Table from "./table.js";
import Header from "../../../Homes/Headers";
import Footer from "../../../Homes/Footer";
class WhatIsIelts extends Component {
    render(){
  return (
    <>
    <Header />
    <div className="ielts-margin">
        <div className="ielts-margin-container">
            <h1 className="ielts-second-page-what-is-ielts">What Is IELTS?</h1>
            <p className="ielts-second-page-paragraph-body">The International English Language Testing System, commonly known as IELTS, is an indispensable tool specifically crafted to empower individuals in their pursuit of opportunities in countries where English is the predominant language. This encompasses renowned nations like Australia, Canada, New Zealand, the United Kingdom, and the United States.</p>
            <p className="ielts-second-page-paragraph-body">Your proficiency in listening, reading, writing, and speaking the English language undergoes rigorous evaluation through this comprehensive assessment. IELTS employs a meticulous grading system, delineated on a scale ranging from 1 to 9, to gauge your language prowess.</p>
            <p className="ielts-second-page-paragraph-body">IELTS stands as a collaborative effort, jointly owned and championed by illustrious institutions - the British Council, IDP IELTS, and Cambridge University Press & Assessment. It is not merely a test; it's a gateway to fulfilling dreams and aspirations in English-speaking environments.</p>
            
        </div>
        <div className="ielts-margin-container">
            <h1 className="ielts-second-page-second-heading">Why Take IELTS?</h1>
            <p className="ielts-second-page-paragraph-body">If your ambition is to embark on a journey of work, residence, or education in an English-speaking nation, then demonstrating an exceptionally high level of English proficiency is not just a preference; it's an absolute imperative.</p>
            <p className="ielts-second-page-paragraph-body">Consider this: English stands as the third most spoken language worldwide, with a staggering 379 million speakers spanning the globe. It's the bridge that connects cultures, facilitates global communication, and unlocks boundless opportunities.</p>
            <p className="ielts-second-page-paragraph-body">Being proficient in the native tongue of your desired destination carries an array of advantages that ripple through every facet of life. It's not merely a key to job prospects; it's the very essence of integration into the heart of the community.</p>
            <p className="ielts-second-page-paragraph-body">In essence, IELTS is not just a test; it's your passport to a world where fluency in English transforms dreams into reality.</p>
        </div>
        <div className="ielts-margin-container">
            <h1 className="ielts-second-page-second-heading">IELTS Score Scale</h1>
            <Table/>
        </div>
        <div className="ielts-margin-container">
            <h1 className="ielts-second-page-second-heading">What IELTS Score Do I Need?</h1>
            <p className="ielts-second-page-paragraph-body">Achieving a high score on your IELTS examination serves as an indisputable testament to your profound grasp of the English language. It illuminates your exceptional ability to communicate effectively in a language that transcends borders.</p>
            <p className="ielts-second-page-paragraph-body">However, it's crucial to recognize that the significance of your IELTS score extends far beyond mere accolades. Every immigration authority, university, workplace, or institution sets forth distinct and rigorous IELTS score prerequisites. These prerequisites are not arbitrary; they are the benchmarks that pave the way for your aspirations in the country of your choice, whether it's pursuing higher education or embarking on a promising career.</p>
            <p className="ielts-second-page-paragraph-body">The IELTS score you aim to attain becomes the compass guiding your journey. It is the pivotal determinant of your eligibility for your desired pursuit. It's the threshold that unlocks the doors of opportunity, and it's a reflection of your dedication to excellence in the English language.</p>
        </div>
        <div className="ielts-margin-container">
            <h1 className="ielts-second-page-second-heading">How IELTS Is Developed</h1>
            <p className="ielts-second-page-paragraph-body">IELTS stands as a paragon of equitable and precise evaluation in the realm of English language proficiency.</p>
            <p className="ielts-second-page-paragraph-body">Designed with meticulous care, IELTS leaves no room for compromise when it comes to assessing linguistic prowess. It is a testament to international collaboration, with language specialists hailing from the esteemed shores of Australia, Canada, New Zealand, the United Kingdom, and the United States meticulously crafting its test questions.</p>
            <p className="ielts-second-page-paragraph-body">Comprising four comprehensive sections—Listening, Reading, Writing, and Speaking—IELTS scrutinizes language skills in every dimension. It's a holistic appraisal, designed to gauge your ability to comprehend, express, and communicate effectively.</p>
            <p className="ielts-second-page-paragraph-body">Moreover, what sets IELTS apart is its profound resonance with the fabric of everyday life. The test content is a mirror to the language as it exists in the real world, rooted in authenticity and relevance. It does not discriminate; it is impartial, ensuring that all test takers, regardless of their backgrounds or origins, are granted an equitable opportunity to prove their English language proficiency.</p>
            <p className="ielts-second-page-paragraph-body">In a world where opportunities know no borders, IELTS stands unwavering as the embodiment of fairness, accuracy, and the key to unlocking your potential in the global arena.</p>
        </div>
    </div>
    <Footer />
    </>
  )
    }
}

export default WhatIsIelts