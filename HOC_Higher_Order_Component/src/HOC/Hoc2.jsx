import React from 'react'
import Hoc from './HOC'

const Hoc2 = (props) => {
    console.log(props.data.place);

    return (
        <div>
            <h2>{props.data.place}</h2>
        </div>
    )
}

export default Hoc(Hoc2)