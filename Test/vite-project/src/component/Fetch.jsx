import React, { useEffect, useState } from 'react'

export default function Fetch() {

    const[state,setState]=useState([])

    useEffect(()=>{
        // mounting phase
        fetch('https://jsonplaceholder.typicode.com/users')//promise(then)
        .then((response)=>response.json())
        .then((res)=>setState(res))
    },[])

    console.log(state)
  return (
    <div>
        {

            state.map((res)=><li key={res.id}>{JSON.stringify(res.name)}</li>)
        }
    </div>
  )
}


