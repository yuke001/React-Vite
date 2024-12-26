import React, { Children, Fragment } from 'react'
import { userContext } from './UserProvider'
const Cart = () => {
    return (
        <userContext.Consumer>
            {
                (data)=>{
                    console.log(data);

                    return <Fragment>
                        <h1>{data.name}</h1>
                    </Fragment>
                    
                }
            }
           
          
        </userContext.Consumer>
    )
}

export default Cart