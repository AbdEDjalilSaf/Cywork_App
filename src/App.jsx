import { useState } from 'react'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events' 
import ContactUs from './pages/ContactUs'
import { Link, Routes ,Route } from 'react-router-dom';
import './App.css'

function App() {

  
  return (
    <>
    <Routes>
<Route path='/' element={<Home />}/>
<Route path='/News' element={<News />}/>
<Route path='/Events' element={<Events />}/>
<Route path='/ContactUs' element={<ContactUs />}/>
</Routes>
  {/* <Home /> */}
    </>
  )
}

export default App
