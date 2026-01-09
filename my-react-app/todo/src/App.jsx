import { useState } from 'react'
import {Todo} from './todo'
import {Theme} from "./context/theme.jsx";
import {ApiFetch} from './services/api.jsx';
import { ProductProvider } from "./context/apiContext";


import './App.css'

function App() {

  return (
    <>
    <Theme>
      <Todo/>
    </Theme>

    <ProductProvider>
      <ApiFetch />
    </ProductProvider>
      
    </>
  )
}

export default App
