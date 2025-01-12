
import  { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import UserProfile from "./components/UserProfile"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile/:id" element={<UserProfile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
