import React from 'react'
import './input.css'
export default function Input({placeholder,type,height}) {
  return (
    <div className='inputField'>
        <input type={type} placeholder={placeholder} style={{height:`${height}`}} />
    </div>
  )
}
