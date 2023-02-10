import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Cat from './pages/react-scroll-parallax/Cat'
import Morty from './pages/react-scroll-parallax/Morty'
import HorizontalSections from './pages/react-scroll-parallax/HorizontalSections'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cat' element={<Cat />} />
      <Route path='/morty' element={<Morty />} />
      <Route path='/horizontal-sections' element={<HorizontalSections/>} />
    </Routes>
  )
}

export default App