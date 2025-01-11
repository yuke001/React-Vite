import React from 'react'
import {useParams} from 'react-router-dom'

const Pages = () => {
    let {id} = useParams()
    console.log(id);

  return (
    <div>
        <h1>page {id}</h1>
        <h1>hello</h1>
    </div>
  )
}

export default Pages