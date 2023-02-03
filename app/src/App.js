import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cat from './pages/Cat'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cat' element={<Cat/>} />
    </Routes>
  )
}

export default App