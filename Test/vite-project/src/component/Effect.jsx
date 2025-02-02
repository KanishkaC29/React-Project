import React, { useEffect, useState } from 'react'

export default function Effect() {
    // useEffect -->Hook allows you to perform side effects in your components.
    // functional -->stateless
    // mounting phase
    // updating phase
    // unmount phase

    // useEffect(()=>{},[])
    // []  -->emty dependency array

    const [state,setState]=useState(0)


    useEffect(()=>{
        // mounting phase
        console.log('mounting phase')

    },[])

    
    useEffect(()=>{
        // updating phase
        console.log('updating phase')

        return()=>{
            console.log('unmounting phase')
        }

    },[state])

    const clickHander=()=>{
        setState(state+1)
    }


  return (
    <div>
        <button onClick={clickHander} style={{backgroundColor:"blue"}}>click</button>
        <p>{state}</p>

    </div>
  )
}