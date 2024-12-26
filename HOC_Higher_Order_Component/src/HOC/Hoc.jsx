import React from 'react'

const HOC = (Yuke) => {


    let data = () => {
        return <Yuke data={{ name: "Yuke", place: "BLR" }}></Yuke>
    }

    return data


}

export default HOC