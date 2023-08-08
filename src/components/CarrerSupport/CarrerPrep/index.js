import "./index.css"



const CarrerPrep=(props)=>{
    console.log(props.details)
    const {details}=props
    const {heading,list,imageurl}=details
    return(
        <div className="carrerpreplistContainer">
            <div className="carrerpreplistSubContainer">
                <div className="careerPrepCounsilingImageContainer">
                     <img src={imageurl} alt="prepimage" className="careerPrepCounsilingImage"/>
                </div>
                <div className="carrerpreplistContainer1">
                    <h1 className="carrerpreplistheading">{heading}</h1>
                    <ul>
                        {list.map(each=>(<li key={each} className="carrerpreplistContent">{each}</li>))}
                    </ul>
                </div>
            </div>         
        </div>
    )
}

export default CarrerPrep