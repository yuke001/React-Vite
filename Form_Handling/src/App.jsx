import React, { useState } from 'react'

const App = () => {

    let [state, setState] = useState({
        Uname: "",
        gmail: "",
        pass: "",
        gender: ""

    })

    let { Uname, pass, gmail, gender } = state

    let handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })


    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }


    let click = () => {
        setState({
            Uname: "",
            gmail: "",
            pass: "",
            gender: ""
        })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <form aaction="" onSubmit={handleSubmit}>

                <label htmlFor=""> UserName </label> <br />
                <input type="text" name="Uname" value={Uname} id="" onChange={handleChange} /> <br /><br />

                <label htmlFor=""> Email</label><br />
                <input type="text" name="gmail" value={gmail} id="" onChange={handleChange} /> <br /><br />

                <label htmlFor=""> Password</label><br />
                <input type="text" name="pass" value={pass} id="" onChange={handleChange} /> <br /><br />

                <input type="radio" name="gender" value={"male"} id="" onChange={handleChange} />MALE
                <input type="radio" name="gender" value={"female"} id="" onChange={handleChange} />FEMALE
                <br /><br />


                <button type="submit">Submit</button>



            </form>

        </div>
    )
}

export default App