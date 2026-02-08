import react from 'react'
import './App.css'
import Navbar from './components/navbar'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page1 />} />
        <Route path="/page3" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
