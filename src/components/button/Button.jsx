import React from 'react'
import { Link } from 'react-router-dom'

// css
import './button.css'

export default function Button({text,children,bgColor,color}) {
  return (
    <div className='Button' style={{backgroundColor:`${bgColor}`,color:`${color}`}} >
        <Link>
        {
            children
        }
        <span>{text}</span>
        </Link>
    </div>
  )
}
