import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dummy from './components/Dummy'
import FormValidation from './components/FormValidation'
import Gsap from './components/Gsap'
import ParamsPractice from './components/ParamsPractice'
import LocalStorageTwo from './components/LocalStorageTwo'
import Calendly from './components/Calendly'
import ParamPractice2 from './components/ParamPractice2'
import UploadImage from './components/UploadImage'
import CustomEmailError from './components/CustomEmailError'
import CreativeHover from './components/CreativeHover'
import AgeCalculator from './components/AgeCalculator'

function App() {

  return (
    <>
      <Routes>
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/form" element={<FormValidation />} />
        <Route path="/gsap" element={<Gsap />} />
        <Route path="/param/:paramId" element={<ParamsPractice />} />
        <Route path="/tabs" element={<ParamPractice2 />} />
        <Route path="/tabs/:tabId" element={<ParamPractice2 />} />
        <Route path="/local" element={<LocalStorageTwo />} />
        <Route path="/cal" element={<Calendly />} />
        <Route path="/image" element={<UploadImage />} />
        <Route path="/input" element={<CustomEmailError />} />
        <Route path="/hover" exact element={<CreativeHover />} />
        <Route path="/age" exact element={<AgeCalculator />} />
         </Routes>
    </>
  )
}

export default App
