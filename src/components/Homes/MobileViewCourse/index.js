import {Link} from 'react-router-dom'
import './index.css'
function MobileCourseList(){
    const MobileCourseList=[
        {id:0, tab:"English Communication",link:"/english",item1:"Certification in English Communication BluePrint", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
        {id:1, tab:"Fullstack Developer",link:"/FullStackCourse",item1:"Certification in Fullstack development", item2:"6 months offline classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
        {id:2, tab:"Data Scientist",link:"/DataScience",item1:"Certification in Data Science", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
        {id:3, tab:"Salesforce",link:"/salesforce",item1:"Certification in Salesforce", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
        {id:4, tab:"Mendix",link:"/Mendix",item1:"Certification in Mendix", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
        {id:5, tab:"Polarion",link:"/Polarian",item1:"Certification in Polarion", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
        {id:6, tab:"Digital Marketing",link:"/DigitalMarkting",item1:"Certification in Digital Marketing", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
      ]
    return(
        <div>
            <ul className='MobileViewCourseList'>
                {MobileCourseList.map(each=>{
                return(
                    <Link style={{textDecoration:"none"}} key={each.id} to={each.link}><li className= {`MobileViewCourseItem`} key={each.id}><button className={`NavcoursesBasicDoubtsTabsListItemButton`} value={each.id}>{each.tab}</button></li></Link>
                )})}
            </ul>
        </div>
    )
}
export default MobileCourseList