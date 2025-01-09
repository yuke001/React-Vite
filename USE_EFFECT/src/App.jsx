import React, { useEffect, useState } from 'react'


const App = () => {

  let[count,setCount]=useState(0)

  let handleChange=()=>{
    setCount(count+1)
  }

  useEffect(()=>{
    document.title=`this is react ${count}`
    alert(`this is react ${count}`)
  },[count>10])

  // useEffect(()=>{
  //   setInterval(()=>{
  //     return setCount(count+1)
  //   },1000)

  // })


  return (
    <div>
      <h1>This is count : {count}</h1>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default App