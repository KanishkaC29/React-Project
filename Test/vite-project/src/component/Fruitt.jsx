import React from 'react'
import { v4 as uuidv4 } from 'uuid';
export default function ({fruits}) {
  return (
    <div>

        {fruits.map((fruit)=><li key={uuidv4()}>{fruit.names} : {fruit.price}</li>)}

    </div>
  )
}
