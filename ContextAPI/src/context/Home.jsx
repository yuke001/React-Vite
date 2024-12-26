import React, { Fragment } from 'react'
import { userContext } from './UserProvider'

const Home = () => {
    return (
        <userContext.Consumer>
            {
                (data) => {
                    console.log(data);

                    return <Fragment>
                        <h2>{data.place}</h2>
                    </Fragment>

                }
            }
        </userContext.Consumer>
    )
}

export default Home