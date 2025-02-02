import React, { useState } from 'react'


export default function Count() {

    const[count,setCount]=useState(0)
    const[factor,setFactor]=useState(1)

    function handleIncrement(){
        setCount(count+factor)
    }

    function handleDecrement(){
        setCount(count-factor)
    }

    function handleFactorIncrement(){
        setFactor(factor+1)
    }

    function handleFactorDencrement(){
        setFactor(factor-1)
    }
  return (
    <div>

        <h3>My count: {count}</h3>
        <button onClick={handleIncrement}>Increament</button>
        <button onClick={handleDecrement}>Decrement</button>

        <h3>My Factor: {factor}</h3>
        <button onClick={handleFactorIncrement}>Increament</button>
        <button onClick={handleFactorDencrement}>Decrement</button>
    </div>
  )
}
