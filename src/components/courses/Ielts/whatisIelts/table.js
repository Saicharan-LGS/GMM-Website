import React from 'react';
import './index.css'
 

const jsonData = [

  {

    "BandScore": "9",

    "SkillLevel": "Expert user",

    "Description": "The test taker has fully operational command of the language. Their use of English is appropriate, accurate and fluent, and shows complete understanding.",



  },

  {

    "BandScore": "8",

    "SkillLevel": "Very good user",

    "Description": "The test taker has fully operational command of the language with only occasional unsystematic inaccuracies and inappropriate usage. They may misunderstand some things in unfamiliar situations. They handle complex and detailed argumentation well.",
    

   

  },

  {

    "BandScore": "7",

    "SkillLevel": "Good user",

    "Description": "The test taker has operational command of the language, though with occasional inaccuracies, inappropriate usage and misunderstandings in some situations. They generally handle complex language well and understand detailed reasoning.",
    

   

  },

  {

    "BandScore": "6",

    "SkillLevel": "Competent user",

    "Description": "The test taker has an effective command of the language despite some inaccuracies, inappropriate usage and misunderstandings. They can use and understand fairly complex language, particularly in familiar situations.",
    

   

  },

  {

    "BandScore": "5",

    "SkillLevel": "Modest user",

    "Description": "The test taker has a partial command of the language and copes with overall meaning in most situations, although they are likely to make many mistakes. They should be able to handle basic communication in their own field.",
    

   

  },

  {

    "BandScore": "4",

    "SkillLevel": "Limited user",

    "Description": "The test taker's basic competence is limited to familiar situations. They frequently show problems in understanding and expression. They are not able to use complex language.",
    
   

  },

  {

    "BandScore": "3",

    "SkillLevel": "Extremely limited user",

    "Description": "The test taker conveys and understands only general meaning in very familiar situations. There are frequent breakdowns in communication.",
    

   

  },

  {
    "BandScore": "2",

    "SkillLevel": "Intermittent user",

    "Description": "The test taker has great difficulty understanding spoken and written English.",
    

   

  },

  {

    "BandScore": "1",

    "SkillLevel": "Non-user",

    "Description": "The test taker has no ability to use the language except a few isolated words.",
    

   

  },

  {

    "BandScore": "0",

    "SkillLevel": "Did not attempt the test",

    "Description": "The test taker did not answer the questions.",
    

   

  },

  

  
 

];

 

const Table = () => {

  return (

    <table className='ielts-score-table'>
      <thead>
        <tr className='ielts-score-table-row'>
          <th className='ielts-score-table-heading'>Band Score</th>
          <th className='ielts-score-table-heading'>Skill Level</th>
          <th className='ielts-score-table-heading'>Description</th>
        </tr>
      </thead>
      <tbody>
        {jsonData.map((row, index) => (
          <tr className='ielts-score-table-row' key={index}>
            <td className='ielts-score-table-row-text'>{row.BandScore}</td>
            <td className='ielts-score-table-row-text'>{row.SkillLevel}</td>
            <td className='ielts-score-table-row-text'>{row.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );

};

 

export default Table;