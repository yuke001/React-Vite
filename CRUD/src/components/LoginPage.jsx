import React, { useState } from 'react'
import axios from 'axios'
import './LoginPage.css'

const LoginPage = () => {

    let [state, setState] = useState({
        name: "",
        email: ""
    })

    let { name, email } = state

    let handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })

    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let payload = { name, email }

            let { data } = await axios.post("http://localhost:3000/users", payload)
            
            console.log(data);


        }
        catch (err) {

            console.log(err)
        }
    }



    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">UserName</label>
                <input type="text" name='name' value={name} onChange={handleChange} /> <br /> <br />

                <label htmlFor="">Email</label>
                <input type="text" name='email' value={email} onChange={handleChange} />  <br /> <br />

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}

export default LoginPage