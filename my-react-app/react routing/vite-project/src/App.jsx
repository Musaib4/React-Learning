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
      <Navbar/>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
        </>
  )
}

export default App
