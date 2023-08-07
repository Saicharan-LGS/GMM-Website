import "./index.css"



const CarrerPrep=(props)=>{
    console.log(props.details)
    const {details}=props
    const {heading,list}=details
    return(
        <div className="carrerpreplistContainer">
            <div className="carrerpreplistSubContainer">
                <div className="careerPrepCounsilingImageContainer">
                     <img src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg" alt="prepimage" className="careerPrepCounsilingImage"/>
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