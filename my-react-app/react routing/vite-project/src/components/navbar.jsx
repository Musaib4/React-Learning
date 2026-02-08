import react from 'react'
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <>
      <div>
      <Link to="/">Home</Link>
      <Link to="/page2">page2</Link>
      <Link to="/page3">page3</Link>
    </div>
    </>
  )
}

export default Navbar
