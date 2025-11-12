import Contact from './Pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Navbar from "./components/Navbar"
import Login from './Pages/Login'

function App() {
  return (
      <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
