import './index.css'

import Facebook from '../../Images/Facebook-Logo.png'
import Instagram from '../../Images/Instagram-Logos.png'
import Twitter from '../../Images/Twitter-Logos.png'
import Linkedin from '../../Images/Linkedin-Logos.png'
import Youtube from '../../Images/Youtubelogo.png'

function SocialIcons(){
    return(
        <div className="Social-icons-list">
            <a href="https://www.facebook.com/gloriousmindmine" rel="noreferrer" target="_blank" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                <img src={Facebook} alt="facebook" className="social-media-logos social-logo1"/>
            </a>
            <a href="https://twitter.com/GmmTraining" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                <img src={Twitter} alt="twitter" className="social-media-logos social-logo1"/>
            </a>
            <a href="https://www.linkedin.com/company/glorious-mindmine-consulting-pvt-ltd-/" rel="noreferrer" target="_blank" className="Ecommerce-Website-Footer-Section-logo-card mr-2">
                                
                <img src={Linkedin} alt="linkedin" className="social-media-logos social-logo1"/>
            </a>
            <a href="https://www.instagram.com/gloriousmindmine/" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card">
                <img src={Instagram} alt="instagram" className="social-media-logos social-logo1"/>
            </a>
            <a href="https://www.youtube.com/@GloriousMindmineTraining" target="_blank" rel="noreferrer" className="Ecommerce-Website-Footer-Section-logo-card">
                <img src={Youtube} alt="youtube" className="social-media-logos social-logo1"/>
            </a>
        </div>
    )
}
export default SocialIcons