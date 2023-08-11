
import "./index.css"
import Lottie from 'lottie-react';

import WhatsappTime from './WhatsappTime.json';

const Whatsapp=()=>{
    return(
        <a className="whatsapp-button" href="https://api.whatsapp.com/send?phone=917799554668" rel="noreferrer" target="_blank">
            <Lottie  className="whatsapp-icon" loop={true} animationData={WhatsappTime} /> 
        </a>
    )
}

export default Whatsapp