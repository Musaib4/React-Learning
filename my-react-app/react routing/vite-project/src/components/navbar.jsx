import react from 'react'
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <>
      <div>
      <Link to="/">Home</Link>
      <Link to="/page1">page1</Link>
    </div>
    </>
  )
}

export default Navbar
