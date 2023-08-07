import { Component } from "react";
import "./index.css"


class card4 extends Component{
    render(){
        const {details}=this.props
        const {Image,answer,question}=details
        console.log(Image)
        return(
            <div className="dcourseFlexibleProgramCard">
                <Image className="dcourseFlexibleProgramImage" />
                <h1 className="dcourseFlexibleProgramQuestion">{question}</h1>
                <p className="dcourseFlexibleProgramAnswer">{answer}</p>   
            </div>
        )
    }
}

export default card4