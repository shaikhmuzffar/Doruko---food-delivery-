import React from 'react'
import './mainbox.css'

// comoponents
import SiderBox from '../../UI/siderbox/SiderBox'
import ContentBox from '../../UI/contnentBox/ContentBox'


export default function MainBox() {
  return (
    <>
      <div className="mainbox">
        <SiderBox/>
        <ContentBox/>
      </div>
    </>
  )
}
