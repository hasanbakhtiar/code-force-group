import React, { useState } from 'react'
import GenCompo from './GenCompo';

const CounterOne = (props) => {
    const {count,incCount} = props;
  return (
    <div>{count} <button style={{backgroundColor:"red"}} onClick={incCount}>+1</button></div>
  )
}

export default GenCompo(CounterOne)