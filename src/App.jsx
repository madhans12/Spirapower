import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import SideBar from './Components/Sidebar/SideBar'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import "./App.css"
import Enquires from './Pages/SalesTracker/Enquires/Enquires'
const App = () => {
  return (
    <div>

      <Navbar />
      <SideBar />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/Home' element={<Home />}></Route>
        <Route path="/enquires" element={<Enquires />}></Route>

      </Routes>

    </div>
  )
}

export default App