import React from 'react'

export default function Message() {

    function handleClick(){
        alert('Check all your data')
    }
  return (
    <div>
        <button onClick={handleClick}>click here</button>
    </div>
  )
}

