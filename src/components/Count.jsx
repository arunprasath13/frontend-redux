import React from 'react'
import {useSelector } from "react-redux";


const Count = () => {
 const count = useSelector((state) => state.count.count)
  return (
    <div style={{color:"red",fontSize:"20px"}}>
      {count}
    </div>
  )
}

export default Count;
