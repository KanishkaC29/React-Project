import React, { useState } from 'react'
export default function UserForm() {

    const [name,setName]=useState({firstname:"",lastname:""})

    // function firstnameHandlter(e){
    //     setName({...name,firstname:e.target.value})
    // }

    function lastnameHandlter(e){
        setName({...name,lastname:e.target.value})
    }

    const handleClick=(e)=>{
        e.preventDefault();
        document.getElementById('data').innerHTML=`Hi!${name.firstname} ${name.lastname}`
    }
  return (
    <div>
        <form>
            <input type="text" value={name.firstname} onChange={(e)=> setName({...name,firstname:e.target.value})(e)} />
            <input type="text" value={name.lastname} onChange={lastnameHandlter} />
            <button onClick={handleClick} >click</button>
            <p id='data'></p>
            
        </form>
    </div>
  )
}
