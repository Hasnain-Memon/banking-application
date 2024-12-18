"use client"
import React from 'react'
import CP from "react-countup";

const AnimatedCount = ({amount}:  {amount: number}) => {
  return <>
    <CP 
      decimal='.'
      prefix='$'
      end={amount}
      decimals={2}
    />
  </>
}

export default AnimatedCount