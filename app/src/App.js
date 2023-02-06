import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cat from './pages/Cat'
import HorizontalSections from './pages/HorizontalSections'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cat' element={<Cat />} />
      <Route path='/horizontal-sections' element={<HorizontalSections/>} />
    </Routes>
  )
}

export default App