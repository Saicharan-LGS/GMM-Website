import { Component } from "react";
import "./index.css"


class card2 extends Component{
    render(){
        const {details}=this.props
        const {Image,answer,question}=details
        return(
            <div className="kcourseFlexibleProgramCard">
                <Image className="kcourseFlexibleProgramImage" />
                <h1 className="kcourseFlexibleProgramQuestion">{question}</h1>
                <p className="kcourseFlexibleProgramAnswer">{answer}</p>   
            </div>
        )
    }
}

export default card2