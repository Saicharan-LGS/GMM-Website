import "./index.css"

const HireCard1=(props)=>{
    const {details}=props 
    const {name,Image,text}=details
    return(
        <div className="HireFromusCard1Container">
            <img src={Image} className="HirefromusCard1Image" alt=""/>
            <p className="HirefromusCard1Name">{name}</p>
            <p className="HirefromusCard1Text">{text}</p>
        </div>
    )
}
export default HireCard1