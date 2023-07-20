import { Component } from "react";
import "./index.css"


class FlexibleProgram extends Component{
    render(){
        const {programDetails}=this.props
        const {Image,answer,question}=programDetails
        console.log(Image)
        return(
            <div className="courseFlexibleProgramCard">
                <Image className="courseFlexibleProgramImage" />
                <h1 className="courseFlexibleProgramQuestion">{question}</h1>
                <p className="courseFlexibleProgramAnswer">{answer}</p>   
            </div>
        )
    }
}

export default FlexibleProgram