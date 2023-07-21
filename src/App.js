import {Route,Routes} from 'react-router-dom'
import './App.css'

import Course from './components/courses/DataScience/FullStackMain'
import Home from "./components/Home/HomeMain"
import HireFromUs from "./hireFromUsComponents/hireFromUs"
//import Header from "./components/Home/Header"
const App = () => (
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Fullstack" element={<Course/>}/>
        <Route exact path="/Hirefromus" element={<HireFromUs/>}/>
    </Routes>

)

export default App
