import React from 'react'

function Components(props) {
  return (
    <div>
      <h2>{props.textprops}</h2>
      <button onClick={props.funcaoprops}>Click</button>
    </div>
  )
}

export default Components