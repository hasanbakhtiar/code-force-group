import React, { useState } from 'react'
import GenCompo from './GenCompo'

const CounterTwo = (props) => {
    const {incCount,count} = props;
  return (
    <div>{count} <button style={{backgroundColor:"green"}} onClick={incCount}>+1</button></div>
  )
}

export default GenCompo(CounterTwo)