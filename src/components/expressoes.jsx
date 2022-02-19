import React from 'react'

function expressoes() {
  const user = 'Eduardo'
  function getGreeting(user){
    if(user) {
      return <h1>Hello, {user}</h1>
    } else {
      <h1>Hello, Stranger</h1>
    }
  }
  return (
    <>
    </>
  )
}

export default expressoes