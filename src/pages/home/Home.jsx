import React from 'react'

// components
import Hero from '../../components/hero/Hero'
import TodaysSpecial from '../../components/todaysSpecial/TodaysSpecial'
import Category from '../../components/category/Category'
import NearRestaurants from '../../components/nearRestaurants/NearRestaurants'

export default function Home() {
  return (
    <>
    <Hero/>
    <TodaysSpecial/>
    <Category/>
    <NearRestaurants/>
    </>
  )
}
