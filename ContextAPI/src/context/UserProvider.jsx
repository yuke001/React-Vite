import React, { createContext } from 'react'

export let userContext = createContext()

const UserProvider = ({ children }) => {
    return (
        <userContext.Provider value={{ name: "Yuke",place: "BLR" }}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider