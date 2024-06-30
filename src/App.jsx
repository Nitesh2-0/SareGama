import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
const App = () => {
  return <div className="bg-[#1F1E24] w-screen h-screen flex">
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/trending' element={<Trending />}></Route>
    </Routes>
  </div>
}

export default App