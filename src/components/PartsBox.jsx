import React from 'react'
import { useState } from 'react'
import './style_partsBox.css'

function PartsBox(props) {
  const [part,setpart] = useState('')
  const [parts,setParts] = useState([]) 
  const [partActive,setActive] = useState(null)
  return (
    <div className="partsContainer">
      <div className='eachPartsTop'>
        <input type={'text'} value={part} onChange={(event)=> setpart(event.target.value)}/>
        <button onClick={()=>setParts([...parts,{id:Date.now(),partValue:part}])}>Add</button>
      </div>
      <div>
        {
            parts.map((value,index)=>{
                return(
                    <div className="eachParts" key={index}>
                        <h5>{value.partValue}</h5>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default PartsBox
