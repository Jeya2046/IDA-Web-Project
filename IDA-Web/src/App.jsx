import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import MyNavbar from './Components/MyNavbar'
import { Routes, Route } from 'react-router-dom'
import Services from './Components/Services'
import Clients from './Components/Clients'
import Careers from './Components/Careers'
import ContactUs from './Components/ContactUs'



function App() {

  return (
    <>
      <MyNavbar />
      <div className="container" >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/contactus' element={<ContactUs />} />
          </Routes>
      </div>
    </>
  )
}

export default App

