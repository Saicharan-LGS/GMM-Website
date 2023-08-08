import './index.css'
function EnterpriseCard(props){
    const {cardDetails} = props

    const {EnterpriseIcon,enterpriseHeading,enterpriseDesc,color} = cardDetails
    return(
        <div className="Enterprise-card-skill-main-container">
            <div className="Enterprise-card-skill-sub-container">
                <div className="Enterprise-card-skill-main-icon-container" style={{backgroundColor:`${color}`}}>
                    <EnterpriseIcon className="Enterprise-card-skill-main-icon" />
                </div>
                <h3 className="Enterprise-card-skill-main-heading">{enterpriseHeading}</h3>
                <p className="Enterprise-card-skill-main-description">{enterpriseDesc}</p>
            </div>
        </div>
    )

}

export default EnterpriseCard