import React from 'react'
import Hoc from './HOC'

const Hoc1 = (props) => {
    console.log(props.data.name);
    
    return (
        <div>
            <h1>{props.data.name}</h1>

        </div>
    )
}

export default Hoc(Hoc1)