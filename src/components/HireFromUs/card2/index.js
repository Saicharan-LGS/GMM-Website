import { Component } from "react";
import "./index.css"


class card3 extends Component{
    render(){
        const {details}=this.props
        const {Image,answer,question}=details
        console.log(Image)
        return(
            <div className="scourseFlexibleProgramCard">
                <Image className="scourseFlexibleProgramImage" />
                <h1 className="scourseFlexibleProgramQuestion">{question}</h1>
                <p className="scourseFlexibleProgramAnswer">{answer}</p>   
            </div>
        )
    }
}

export default card3