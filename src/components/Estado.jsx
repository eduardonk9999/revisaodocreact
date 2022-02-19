import React, { useState } from 'react'

function Estado() {
  const [contador, setContador] = useState(0)


  function handleAddNumber() {
    setContador(contador + 1)
  }

  function handleRemoveNumber() {
    setContador(contador - 1)
  }

  return (
    <>
      <p>{contador}</p>
      <button onClick={handleAddNumber}>ADD NUMBER</button>
      <button onClick={handleRemoveNumber}>REMOVE NUMBER</button>
    </>
  )
}

export default Estado