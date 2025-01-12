
import  { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import UserProfile from "./components/UserProfile"
import NotFound from "./components/NotFound"
import Navbar from "./components/Navbar"
import Analytics from "./assets/pages/Analytics/Analytics"
import Development from "./assets/pages/Analytics/Development"
import CyberSecurity from "./assets/pages/Analytics/CyberSecurity"
import UIX from "./assets/pages/Analytics/UIX"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile/:id" element={<UserProfile/>}/>        
        <Route path="/analytics" element={<Analytics/>}>
          <Route path="/analytics/development" element={<Development/>}/>                   
          <Route path="/analytics/cybersecurity" element={<CyberSecurity/>}/>                   
          <Route path="/analytics/uix" element={<UIX/>}/>                   
        </Route>        
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
