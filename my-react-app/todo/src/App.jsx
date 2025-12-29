import { useState } from 'react'
import {Todo,Home} from './todo'
import {Theme} from "./theme";

import './App.css'

function App() {

  return (
    <>
    <Theme>
      <Home />
    </Theme>
      <Todo/>
    </>
  )
}

export default App
