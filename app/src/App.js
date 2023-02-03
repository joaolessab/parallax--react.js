import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Example from './pages/Example'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/example' element={<Example/>} />
    </Routes>
  )
}

export default App