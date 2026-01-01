import { useState } from 'react'
import {Todo} from './todo'
import {Theme} from "./theme";
import ApiFetch from './api';

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
