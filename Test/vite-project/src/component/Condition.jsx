import React from 'react'
import Bike from './Bike'
import Car from './Car'

export default function Condition() {
    // let name=true

    // if else
    // if(name=='kanishka'){
    //     return <h2>Welcome user</h2>
    // }
    // else{
    //     return <h2>create account</h2>
    // }

    // Ternary operator

    // return(
    //     <div>{name=='visalini'  ? (<h1>welcome user</h1>): (<h1>create account</h1>)} </div>
    // )

    // Logical && operator

    // return(
    //     <div>
    //         {name && (<p>name is avaiable</p>)} 
    //     </div>
    // )

    // conditional with components


    let transport='Car'
    return(
        <div>{transport=='Bike' ? <Bike/> :<Car/>}</div>
    )











  
}
