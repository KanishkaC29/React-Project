import React, { useState } from 'react'
export default function Forms() {
    const[name,setName]=useState('')
    const submitHandler =(e)=>{
        e.preventDefault()
        alert()
        console.log('kanishka')
        setName('kanishka')
       
    }
  return (
    <div>

        <form onSubmit={submitHandler}>
            {/* <input type="text"/> */}
            <button>click</button>
            <p>{name=='kanishka' ? name : "no user"}</p>

        </form>
    </div>
  )
}
