import React, { useState } from 'react'

const Signin = () => {
    const [state, setstate] = useState({
        first_name: '',
        last_name: '',
        identifier: '',
        password: '',
        email: '',
    })
    const handelChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const Sign = () => {

    }
    return (
        <div style={{ margin: 50 }}>
            <input type='text' id='first_name' placeholder='first_name' value={state.first_name} name='first_name' onChange={e => handelChange(e)} /> <br /><br />
            <input type='text' id='last_name' placeholder='last_name' value={state.last_name} name='last_name' onChange={e => handelChange(e)} /> <br /><br />
            <input type='text' id='identifier' placeholder='identifier' value={state.identifier} name='identifier' onChange={e => handelChange(e)} /> <br /><br />
            <input type='password' id='password' placeholder='password' name='password' value={state.password} onChange={e => handelChange(e)} /> <br /><br />
            <input type='email' id='email' placeholder='email' value={state.email} name='email' onChange={e => handelChange(e)} /> <br /><br />

            <button style={{ margin: 10 }} onClick={Sign}>Sign in</button>
        </div>
    )
}

export default Signin
