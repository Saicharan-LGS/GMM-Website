import {Route,Routes} from 'react-router-dom'
import './App.css'
import Polarian from "./components/courses/Polarion/FullStackMain"
import Mendix from "./components/courses/Mendix/FullStackMain"
import English from './components/courses/English/FullStackMain'
import DigitalMarketing from './components/courses/DigitalMarketing/FullStackMain'
import Home from "./components/Homes/Home"
import HireFromUs from './components/HireFromUs/MainPage'
import DataScience from './components/courses/DataScience/FullStackMain'
import CarrerSupport from "./components/CarrerSupport/CarrerMain"
import Salesforce from "./components/courses/SalesForce/FullStackMain"
import FullStackCourse from './components/courses/FullStackCourse/FullStackMain'
import MobileViewCourse from './components/Homes/MobileViewCourse'
import PopupForm from './components/Homes/Popupform'
import About from './components/Homes/AboutPage'
import SuccessStory from './components/SucessStory'
import CareerSupport from './components/CarrerSupport/CarrerMain'
import NotFound from './components/NotFound'
import ChatBot from './components/ChatBot'
import Whatsapp from './components/Whatsapp'
import Corporate from './components/Corporate/CorporateMain'
import Terms from "./components/TermsAndConditions"
import Privacy from './components/PrivacyPolicy'
import Studyabroad from './components/StudyAbroad/Studyabroad'
import AWS from "./components/courses/AWS/FullStackMain"
import StudyAbroadPopUp from './components/StudyAbroad/StudyAbroadPopUp'
const App = () => (
    <>
    <Whatsapp />
    <ChatBot />
    <Routes>
        <Route eaxct path="/studypopup" element={<StudyAbroadPopUp />} />
        <Route exact path="/studyabroad" element={<Studyabroad />} />
        <Route exact path="/AWS" element={<AWS />} />
        <Route exact path="/privacy-policy" element={<Privacy />}/>
        <Route exact path="/terms-and-conditions" element={<Terms />}/>
        <Route exact path="/corporate" element={<Corporate />} />
        <Route exact path="/Polarian" element={<Polarian />} />
        <Route exact path="/Mendix" element={<Mendix />} />
        <Route exact path="/carrerSupport" element={<CarrerSupport />}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/english" element={<English/>}/>
        <Route exact path="/salesforce" element={<Salesforce />} />
        <Route exact path="/DigitalMarkting" element={<DigitalMarketing />} />
        <Route exact path="/Hirefromus" element={<HireFromUs/>}/>
        <Route exact path="/FullStackCourse" element={<FullStackCourse/>}/>
        <Route exact path="/DataScience" element={<DataScience />} />
        <Route exact path="/MobileCourse" element={<MobileViewCourse />} />
        <Route exact path="/registration" element={<PopupForm />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/success" element={<SuccessStory />} />
        <Route exact path="/career" element={<CareerSupport />} />
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>

)

export default App
