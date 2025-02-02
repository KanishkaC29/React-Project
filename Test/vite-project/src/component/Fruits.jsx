import React from 'react'
import Fruitt from './Fruitt'
export default function Fruits() {
    let fruits=[{names:'apple',price:30},{names:'banana',price:20},{names:'orange',price:40}]

  return (
    <div>
       {
        <Fruitt fruits={fruits}/>
    //    fruits.map((fruits)=><h1>{fruits.names} {fruits.price}</h1>)
       }
    </div>
  )
}

