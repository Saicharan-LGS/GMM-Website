import {Link} from 'react-router-dom'
import './index.css'

 // const MobileCourseList=[
    //     {id:0, tab:"English Communication",link:"/english",item1:"Certification in English Communication BluePrint", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
    //     {id:1, tab:"Fullstack Developer",link:"/FullStackCourse",item1:"Certification in Fullstack development", item2:"6 months offline classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
    //     {id:2, tab:"Data Scientist",link:"/DataScience",item1:"Certification in Data Science", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
    //     {id:3, tab:"Salesforce",link:"/salesforce",item1:"Certification in Salesforce", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
    //     {id:4, tab:"Mendix",link:"/Mendix",item1:"Certification in Mendix", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
    //     {id:5, tab:"Polarion",link:"/Polarian",item1:"Certification in Polarion", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
    //     {id:6, tab:"Digital Marketing",link:"/DigitalMarkting",item1:"Certification in Digital Marketing", item2:"45 days online classes",item3:"No English Speaking experience required",item4:"Re-engineered curriculum for post Chat-Gpt era"},
    //   ]

    const MobileCourseList1=[
        // {id:0,item:"100% Job Guarantee",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"AWS Cloud Technology",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
        // {id:1,item:"IT",detail:[{id:0,course:"Data Science Engineer",link:"/DataScience",status:"#RightChoice",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Full Stack Developer",link:"/FullStackCourse",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Digital Marketing Expert",link:"/DigitalMarkting",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Salesforce Admin",link:"/salesforce",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"AWS Cloud Technolgy",link:"/AWS",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
        {id:0,item:"Soft Skills", detail:[{id:0,course:"English Communication Blue Print",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:1,course:"Business Communication (Corporate)",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:2,course:"Leadership Skills",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:3,course:"Team Building",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"},{id:4,course:"IELTS",link:"/english",status:"#Trending",duration:"Job Ready in 6 Month",casestudy:"15"}]},
      ]

function MobileCourseList (props){
    const {toggleMobileCourseItems,toggleShowCourses}=props
    const toggleCourseItems=(event)=>{
        console.log("called")
        console.log(event.target.value)
        toggleShowCourses()
        toggleMobileCourseItems(MobileCourseList1[event.target.value])
    }
    return(
            <ul className='MobileViewCourseList'>
                {MobileCourseList1.map(each=>{
                return(
                    <Link style={{textDecoration:"none"}} value={each.id} key={each.id} to={each.link}><li className= {`MobileViewCourseItem`} onClick={toggleCourseItems} key={each.id}><button className={`NavcoursesBasicDoubtsTabsListItemButton1`} style={{fontSize:"12px",color:"black"}} value={each.id}>{each.item}</button></li></Link>
                )})}
            </ul>
    )
}
export default MobileCourseList