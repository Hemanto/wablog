import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/Action'

const Signin = () => {
    const getUser = async (token) => {
        const res = await axios.post('http://localhost:8000/api/userAPI/get_user/', { token: token })
        return await res.data
    }

    const getToken = async (data) => {
        const res = await axios.post('http://localhost:8000/rest-auth/registration/', data)
        const user = await getUser(await res.data.key)
        return { user: await user, token: await res.data.key };
    }

    const [state, setstate] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: '',
        date_of_birth: "",

    })
    const handelChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const dispatch = useDispatch()
    const Sign = async () => {
        const user = await getToken(state)
        dispatch(register(await user))
    }
    return (
        <div style={{ margin: 50 }}>
            <input type='text' id='first_name' placeholder='first_name' value={state.first_name} name='first_name' onChange={e => handelChange(e)} /> <br /><br />
            <input type='text' id='last_name' placeholder='last_name' value={state.last_name} name='last_name' onChange={e => handelChange(e)} /> <br /><br />
            <input type='text' id='username' placeholder='username' value={state.username} name='username' onChange={e => handelChange(e)} /> <br /><br />
            <input type='password' id='password' placeholder='password' name='password' value={state.password} onChange={e => handelChange(e)} /> <br /><br />
            <input type='email' id='email' placeholder='email' value={state.email} name='email' onChange={e => handelChange(e)} /> <br /><br />
            <input type='date' id='date' placeholder='date' value={state.date_of_birth} name='date_of_birth' onChange={e => handelChange(e)} /> <br /><br />
            <button style={{ margin: 10 }} onClick={Sign}>Sign in</button>
        </div>
    )
}

export default Signin
