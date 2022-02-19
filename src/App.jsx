import { useState } from 'react'

import './App.css'
import Components from './components/Components'
import Estado from './components/Estado'

function App() {
  function handleFuncaoProps() {
    console.log('SOU A FUNCAO PASSADA POR PROPS')
  }

  return (
    <div className="App">
      <Components textprops="SOU UMA PROPS" funcaoprops={handleFuncaoProps} />
      <p>ESTADO:</p>
      <Estado />
    </div>
  )
}

export default App
