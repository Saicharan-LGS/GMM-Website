import { Component } from "react";
import "./index.css"

class WhyGloriousMindMineCard extends Component{
    render(){
        const {eachDetails}=this.props
        const {description,Image}=eachDetails
        return(
                 <div className="courseWhyGloriousMindMineCard">
                    <Image className="courseWhyGloriousMindMineImage" />
                    <p className="courseWhyGloriousMindMineDescription">{description}</p>   
                </div>
           
        )
    }
}

export default WhyGloriousMindMineCard