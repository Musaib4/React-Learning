import { useState } from 'react'
import {Todo} from './todo'
import {Theme} from "./context/theme.jsx";
import ApiFetch from './context/api.jsx';

import './App.css'

function App() {

  return (
    <>
    <Theme>
      <Todo/>
    </Theme>

    <ApiFetch/>
      
    </>
  )
}

export default App
